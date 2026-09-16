"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/aria/combobox"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/aria/item"

const countries = [
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

export function ComboboxWithCustomItems() {
  return (
    <Combobox allowsEmptyCollection aria-label="国">
      <ComboboxInput placeholder="国を検索…" />
      <ComboboxContent>
        <ComboboxList
          renderEmptyState={() => (
            <ComboboxEmpty>国が見つかりません。</ComboboxEmpty>
          )}
        >
          {countries
            .filter((country) => country.code !== "")
            .map((country) => (
              <ComboboxItem
                key={country.code}
                id={country.code}
                textValue={country.label}
              >
                <Item size="xs" className="p-0">
                  <ItemContent>
                    <ItemTitle className="whitespace-nowrap">
                      {country.label}
                    </ItemTitle>
                    <ItemDescription>
                      {country.continent} ({country.code})
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </ComboboxItem>
            ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
