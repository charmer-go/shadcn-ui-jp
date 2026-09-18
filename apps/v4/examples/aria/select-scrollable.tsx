import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/aria/select"

const northAmerica = [
  { label: "東部標準時 (EST)", value: "est" },
  { label: "中部標準時 (CST)", value: "cst" },
  { label: "山地標準時 (MST)", value: "mst" },
  { label: "太平洋標準時 (PST)", value: "pst" },
  { label: "アラスカ標準時 (AKST)", value: "akst" },
  { label: "ハワイ標準時 (HST)", value: "hst" },
]

const europeAfrica = [
  { label: "グリニッジ標準時 (GMT)", value: "gmt" },
  { label: "中央ヨーロッパ時間 (CET)", value: "cet" },
  { label: "東ヨーロッパ時間 (EET)", value: "eet" },
  { label: "西ヨーロッパ夏時間 (WEST)", value: "west" },
  { label: "中央アフリカ時間 (CAT)", value: "cat" },
  { label: "東アフリカ時間 (EAT)", value: "eat" },
]

const asia = [
  { label: "モスクワ時間 (MSK)", value: "msk" },
  { label: "インド標準時 (IST)", value: "ist" },
  { label: "中国標準時 (CST)", value: "cst_china" },
  { label: "日本標準時 (JST)", value: "jst" },
  { label: "韓国標準時 (KST)", value: "kst" },
  { label: "インドネシア中部標準時 (WITA)", value: "ist_indonesia" },
]

const australiaPacific = [
  { label: "オーストラリア西部標準時 (AWST)", value: "awst" },
  { label: "オーストラリア中部標準時 (ACST)", value: "acst" },
  { label: "オーストラリア東部標準時 (AEST)", value: "aest" },
  { label: "ニュージーランド標準時 (NZST)", value: "nzst" },
  { label: "フィジー時間 (FJT)", value: "fjt" },
]

const southAmerica = [
  { label: "アルゼンチン時間 (ART)", value: "art" },
  { label: "ボリビア時間 (BOT)", value: "bot" },
  { label: "ブラジリア時間 (BRT)", value: "brt" },
  { label: "チリ標準時 (CLT)", value: "clt" },
]

const items = [
  ...northAmerica,
  ...europeAfrica,
  ...asia,
  ...australiaPacific,
  ...southAmerica,
]

export function SelectScrollable() {
  return (
    <Select placeholder="タイムゾーンを選択" className="w-full max-w-64">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>北米</SelectLabel>
          {northAmerica.map((item) => (
            <SelectItem key={item.value} id={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>ヨーロッパ・アフリカ</SelectLabel>
          {europeAfrica.map((item) => (
            <SelectItem key={item.value} id={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>アジア</SelectLabel>
          {asia.map((item) => (
            <SelectItem key={item.value} id={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>オーストラリア・太平洋</SelectLabel>
          {australiaPacific.map((item) => (
            <SelectItem key={item.value} id={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>南米</SelectLabel>
          {southAmerica.map((item) => (
            <SelectItem key={item.value} id={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
