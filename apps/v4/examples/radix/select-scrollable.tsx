import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/radix/select"

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue placeholder="タイムゾーンを選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>北米</SelectLabel>
          <SelectItem value="est">東部標準時 (EST)</SelectItem>
          <SelectItem value="cst">中部標準時 (CST)</SelectItem>
          <SelectItem value="mst">山地標準時 (MST)</SelectItem>
          <SelectItem value="pst">太平洋標準時 (PST)</SelectItem>
          <SelectItem value="akst">アラスカ標準時 (AKST)</SelectItem>
          <SelectItem value="hst">ハワイ標準時 (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>ヨーロッパ・アフリカ</SelectLabel>
          <SelectItem value="gmt">グリニッジ標準時 (GMT)</SelectItem>
          <SelectItem value="cet">中央ヨーロッパ時間 (CET)</SelectItem>
          <SelectItem value="eet">東ヨーロッパ時間 (EET)</SelectItem>
          <SelectItem value="west">西ヨーロッパ夏時間 (WEST)</SelectItem>
          <SelectItem value="cat">中央アフリカ時間 (CAT)</SelectItem>
          <SelectItem value="eat">東アフリカ時間 (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>アジア</SelectLabel>
          <SelectItem value="msk">モスクワ時間 (MSK)</SelectItem>
          <SelectItem value="ist">インド標準時 (IST)</SelectItem>
          <SelectItem value="cst_china">中国標準時 (CST)</SelectItem>
          <SelectItem value="jst">日本標準時 (JST)</SelectItem>
          <SelectItem value="kst">韓国標準時 (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            インドネシア中部標準時 (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>オーストラリア・太平洋</SelectLabel>
          <SelectItem value="awst">オーストラリア西部標準時 (AWST)</SelectItem>
          <SelectItem value="acst">オーストラリア中部標準時 (ACST)</SelectItem>
          <SelectItem value="aest">オーストラリア東部標準時 (AEST)</SelectItem>
          <SelectItem value="nzst">ニュージーランド標準時 (NZST)</SelectItem>
          <SelectItem value="fjt">フィジー時間 (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>南米</SelectLabel>
          <SelectItem value="art">アルゼンチン時間 (ART)</SelectItem>
          <SelectItem value="bot">ボリビア時間 (BOT)</SelectItem>
          <SelectItem value="brt">ブラジリア時間 (BRT)</SelectItem>
          <SelectItem value="clt">チリ標準時 (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
