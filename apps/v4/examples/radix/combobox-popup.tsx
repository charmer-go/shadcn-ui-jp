"use client"

import { Button } from "@/components/ui/radix/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/radix/combobox"

const countries = [
  { code: "", value: "", continent: "", label: "国を選択" },
  {
    code: "ar",
    value: "argentina",
    label: "アルゼンチン",
    continent: "南アメリカ",
  },
  { code: "au", value: "australia", label: "オーストラリア", continent: "オセアニア" },
  { code: "br", value: "brazil", label: "ブラジル", continent: "南アメリカ" },
  { code: "ca", value: "canada", label: "カナダ", continent: "北アメリカ" },
  { code: "cn", value: "china", label: "中国", continent: "アジア" },
  {
    code: "co",
    value: "colombia",
    label: "コロンビア",
    continent: "南アメリカ",
  },
  { code: "eg", value: "egypt", label: "エジプト", continent: "アフリカ" },
  { code: "fr", value: "france", label: "フランス", continent: "ヨーロッパ" },
  { code: "de", value: "germany", label: "ドイツ", continent: "ヨーロッパ" },
  { code: "it", value: "italy", label: "イタリア", continent: "ヨーロッパ" },
  { code: "jp", value: "japan", label: "日本", continent: "アジア" },
  { code: "ke", value: "kenya", label: "ケニア", continent: "アフリカ" },
  { code: "mx", value: "mexico", label: "メキシコ", continent: "北アメリカ" },
  {
    code: "nz",
    value: "new-zealand",
    label: "ニュージーランド",
    continent: "オセアニア",
  },
  { code: "ng", value: "nigeria", label: "ナイジェリア", continent: "アフリカ" },
  {
    code: "za",
    value: "south-africa",
    label: "南アフリカ",
    continent: "アフリカ",
  },
  { code: "kr", value: "south-korea", label: "韓国", continent: "アジア" },
  {
    code: "gb",
    value: "united-kingdom",
    label: "イギリス",
    continent: "ヨーロッパ",
  },
  {
    code: "us",
    value: "united-states",
    label: "アメリカ合衆国",
    continent: "北アメリカ",
  },
]

export function ComboboxPopup() {
  return (
    <>
      <Combobox items={countries} defaultValue={countries[0]}>
        <ComboboxTrigger
          render={
            <Button
              variant="outline"
              className="w-64 justify-between font-normal"
            />
          }
        >
          <ComboboxValue />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxInput showTrigger={false} placeholder="検索" />
          <ComboboxEmpty>項目が見つかりません。</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.code} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </>
  )
}
