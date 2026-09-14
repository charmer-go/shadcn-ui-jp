param(
  [int]$Skip = 0,
  [int]$Take = 4,
  [switch]$Individual
)

$Utf8 = New-Object System.Text.UTF8Encoding($false)
[Console]::OutputEncoding = $Utf8
$OutputEncoding = $Utf8

$files = @(Get-ChildItem -LiteralPath ".\apps\v4\content" -Recurse -File -Filter "*.mdx" |
  Sort-Object FullName |
  Select-Object -Skip $Skip -First $Take)

$cache = @{}
$needed = @{}

function Invoke-Translate([string]$Text) {
  if ([string]::IsNullOrWhiteSpace($Text) -or
      $Text -match "[\u3040-\u30ff\u3400-\u9fff]" -or
      $Text -notmatch "[A-Za-z]{3,}") {
    return $Text
  }
  if ($cache.ContainsKey($Text)) {
    return $cache[$Text]
  }
  $needed[$Text] = $true
  return $Text
}

function Protect([string]$Text, [ref]$Parts) {
  [regex]::Replace($Text, "\x60[^\x60]*\x60|https?://[^\s\)]+|<[^>]+>", {
    param($Match)
    $Index = $Parts.Value.Count
    $Parts.Value += $Match.Value
    return "ZZZCODE$($Index)ZZZ"
  })
}

function Restore([string]$Text, [object[]]$Parts) {
  for ($Index = 0; $Index -lt $Parts.Count; $Index++) {
    $Text = $Text.Replace("ZZZCODE$($Index)ZZZ", $Parts[$Index])
  }
  return ($Text -replace "[\r\n]+", " ")
}

function Translate-Attributes([string]$Line) {
  [regex]::Replace($Line, '(?<Key>title|description)="(?<Value>[^"]+)"', {
    param($Match)
    $Value = $Match.Groups["Value"].Value
    if ($Value -match "[\u3040-\u30ff\u3400-\u9fff]" -or
        $Value -match "[/\\]" -or
        $Value -match "^[a-z0-9_.-]+$") {
      return $Match.Value
    }
    $Parts = @()
    $Translated = Restore (Invoke-Translate (Protect $Value ([ref]$Parts))) $Parts
    return $Match.Groups["Key"].Value + '="' + $Translated.Trim() + '"'
  })
}

function Translate-Line([string]$Line) {
  $OutputLine = Translate-Attributes $Line
  $Indent = $OutputLine.Substring(0, $OutputLine.Length - $OutputLine.TrimStart().Length)
  $Trimmed = $OutputLine.Trim()

  if ($Trimmed -match "^---$" -or [string]::IsNullOrWhiteSpace($Trimmed)) {
    return $OutputLine
  }
  if ($Trimmed -match "^(doc|api|base|component|featured|links|author|date|slug|name|styleName|className|previewClassName|direction|value|type|mode|variant|size|on[A-Z])\s*[:=]") {
    return $OutputLine
  }
  if ($Trimmed -match "^(title|description)\s*:") {
    $Value = $Trimmed.Substring($Trimmed.IndexOf(":") + 1).Trim()
    if ($Value -match "[\u3040-\u30ff\u3400-\u9fff]" -or $Value -notmatch "[A-Za-z]{3,}") {
      return $OutputLine
    }
    $Prefix = $Trimmed.Substring(0, $Trimmed.IndexOf(":") + 1) + " "
    $Parts = @()
    $Translated = Restore (Invoke-Translate (Protect $Value ([ref]$Parts))) $Parts
    return $Indent + $Prefix + $Translated.Trim()
  }
  if ($Trimmed -match "^(import|export|const|let|var|function|type|interface|return|if|else|for|while)\b" -or
      $Trimmed -match "^[{}()[\];]+$" -or
      $Trimmed -match "^[A-Za-z_:][\w:-]*\s*=" -or
      $Trimmed -match "^[A-Za-z_$][\w$]*$") {
    return $OutputLine
  }
  if ($Trimmed -match "^(?<Open><[^>]+>)(?<Inner>[^<]+)(?<Close></[^>]+>)\s*$") {
    $Parts = @()
    $Translated = Restore (Invoke-Translate (Protect $Matches["Inner"] ([ref]$Parts))) $Parts
    return $Indent + $Matches["Open"] + $Translated.Trim() + $Matches["Close"]
  }
  if ($Trimmed.StartsWith("<") -and $Trimmed -notmatch ">\s*[A-Za-z]") {
    return $OutputLine
  }
  if ($Trimmed -notmatch "[A-Za-z]{3,}" -or
      (($Trimmed -match "[\u3040-\u30ff\u3400-\u9fff]") -and $OutputLine -eq $Line)) {
    return $OutputLine
  }

  $Prefix = ""
  $Body = $Trimmed
  if ($Body -match "^(?<Prefix>#{1,6}\s+|>\s*|[-*+]\s+)") {
    $Prefix = $Matches["Prefix"]
    $Body = $Body.Substring($Prefix.Length)
  }
  $Parts = @()
  $TranslatedBody = Restore (Invoke-Translate (Protect $Body ([ref]$Parts))) $Parts
  return $Indent + $Prefix + $TranslatedBody.Trim()
}

$records = @()
foreach ($File in $files) {
  $Lines = @(Get-Content -LiteralPath $File.FullName)
  $InFence = $false
  foreach ($Line in $Lines) {
    if ($Line.TrimStart().StartsWith(([char]96).ToString() * 3)) {
      $InFence = -not $InFence
      continue
    }
    if (-not $InFence) {
      [void](Translate-Line $Line)
    }
  }
  $records += [pscustomobject]@{ File = $File; Lines = $Lines }
}

$Keys = @($needed.Keys)
$Debug = $Keys.Count
Write-Output ("DEBUG_KEYS=" + $Debug)
$Separator = "ZZZSEPZZZ"
if ($Individual) {
  foreach ($Item in $Keys) {
    try {
      $Response = Invoke-RestMethod -Uri (
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ja&dt=t&q=" +
        [uri]::EscapeDataString($Item)
      ) -TimeoutSec 30
      $cache[$Item] = (($Response[0] | ForEach-Object { [string]$_[0] }) -join "").Trim()
    } catch {
      $cache[$Item] = $Item
    }
  }
  Write-Output ("DEBUG_CACHE=" + $cache[$Keys[0]])
} else {
for ($Start = 0; $Start -lt $Keys.Count; $Start += 40) {
  $Batch = @()
  $Characters = 0
  for ($Index = $Start; $Index -lt [Math]::Min($Start + 40, $Keys.Count); $Index++) {
    $Candidate = $Keys[$Index]
    if ($Batch.Count -gt 0 -and $Characters + $Candidate.Length -gt 4500) {
      break
    }
    $Batch += $Candidate
    $Characters += $Candidate.Length + 1
  }
  if ($Batch.Count -eq 0) {
    $Batch = @($Keys[$Start])
  }

  try {
    $Query = $Batch -join (" " + $Separator + " ")
    $Response = Invoke-RestMethod -Uri (
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ja&dt=t&q=" +
      [uri]::EscapeDataString($Query)
    ) -TimeoutSec 30
    $Joined = (($Response[0] | ForEach-Object { [string]$_[0] }) -join "")
    $Translated = @($Joined -split "\s*ZZZSEPZZZ\s*" | ForEach-Object { $_.Trim() })
    if ($Translated.Count -eq $Batch.Count) {
      for ($Index = 0; $Index -lt $Batch.Count; $Index++) {
        $cache[$Batch[$Index]] = $Translated[$Index]
      }
    } else {
      foreach ($Item in $Batch) {
        $cache[$Item] = $Item
      }
    }
  } catch {
    foreach ($Item in $Batch) {
      $cache[$Item] = $Item
    }
  }
}
}

$patchFiles = @()
foreach ($Record in $records) {
  $Lines = $Record.Lines
  $NewLines = @()
  $InFence = $false
  foreach ($Line in $Lines) {
    if ($Line.TrimStart().StartsWith(([char]96).ToString() * 3)) {
      $InFence = -not $InFence
      $NewLines += $Line
      continue
    }
    if ($InFence) {
      $NewLines += $Line
      continue
    }
    $NewLines += (Translate-Line $Line)
  }
  $Changed = $false
  for ($Index = 0; $Index -lt $Lines.Count; $Index++) {
    if ($Lines[$Index] -cne $NewLines[$Index]) {
      $Changed = $true
      break
    }
  }
  if ($Changed) {
    $patchFiles += [pscustomobject]@{ Record = $Record; NewLines = $NewLines }
  }
}

if ($patchFiles.Count -gt 0) {
  Write-Output "*** Begin Patch"
  foreach ($Item in $patchFiles) {
    $Record = $Item.Record
    $Lines = $Record.Lines
    $NewLines = $Item.NewLines
    Write-Output ("*** Update File: " + $Record.File.FullName.Substring((Get-Location).Path.Length + 1).Replace("\", "/"))
    $Index = 0
    while ($Index -lt $Lines.Count) {
      if ($Lines[$Index] -ceq $NewLines[$Index]) {
        $Index++
        continue
      }
      $Start = $Index
      while ($Index -lt $Lines.Count -and $Lines[$Index] -cne $NewLines[$Index]) {
        $Index++
      }
      Write-Output "@@"
      if ($Start -gt 0 -and $Lines[$Start - 1] -ceq $NewLines[$Start - 1]) {
        Write-Output (" " + $Lines[$Start - 1])
      }
      for ($ChangedIndex = $Start; $ChangedIndex -lt $Index; $ChangedIndex++) {
        Write-Output ("-" + $Lines[$ChangedIndex])
        Write-Output ("+" + $NewLines[$ChangedIndex])
      }
      if ($Index -lt $Lines.Count -and $Lines[$Index] -ceq $NewLines[$Index]) {
        Write-Output (" " + $Lines[$Index])
      }
    }
  }
  Write-Output "*** End Patch"
}
