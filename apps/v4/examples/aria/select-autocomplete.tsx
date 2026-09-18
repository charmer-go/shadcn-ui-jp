"use client"

import { Autocomplete, useFilter } from "react-aria-components"

import { Button } from "@/components/ui/aria/button"
import {
  Select,
  SelectEmpty,
  SelectGroup,
  SelectInput,
  SelectItem,
  SelectList,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/aria/select"

const countries = [
  {
    code: "ar",
    value: "argentina",
    label: "アルゼンチン",
    continent: "South America",
  },
  { code: "au", value: "australia", label: "オーストラリア", continent: "Oceania" },
  { code: "br", value: "brazil", label: "ブラジル", continent: "South America" },
  { code: "ca", value: "canada", label: "カナダ", continent: "North America" },
  { code: "cn", value: "china", label: "中国", continent: "Asia" },
  {
    code: "co",
    value: "colombia",
    label: "コロンビア",
    continent: "South America",
  },
  { code: "eg", value: "egypt", label: "エジプト", continent: "Africa" },
  { code: "fr", value: "france", label: "フランス", continent: "Europe" },
  { code: "de", value: "germany", label: "ドイツ", continent: "Europe" },
  { code: "it", value: "italy", label: "イタリア", continent: "Europe" },
  { code: "jp", value: "japan", label: "日本", continent: "Asia" },
  { code: "ke", value: "kenya", label: "ケニア", continent: "Africa" },
  { code: "mx", value: "mexico", label: "メキシコ", continent: "North America" },
  {
    code: "nz",
    value: "new-zealand",
    label: "ニュージーランド",
    continent: "Oceania",
  },
  { code: "ng", value: "nigeria", label: "ナイジェリア", continent: "Africa" },
  {
    code: "za",
    value: "south-africa",
    label: "南アフリカ",
    continent: "Africa",
  },
  { code: "kr", value: "south-korea", label: "韓国", continent: "Asia" },
  {
    code: "gb",
    value: "united-kingdom",
    label: "イギリス",
    continent: "Europe",
  },
  {
    code: "us",
    value: "united-states",
    label: "アメリカ合衆国",
    continent: "North America",
  },
]

export function SelectAutocomplete() {
  const { contains } = useFilter({ sensitivity: "base" })
  return (
    <Select placeholder="国を選択" className="w-full max-w-48">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <Autocomplete filter={contains}>
        <SelectPopover>
          <SelectInput />
          <SelectList
            renderEmptyState={() => (
              <SelectEmpty>該当する項目がありません。</SelectEmpty>
            )}
          >
            <SelectGroup items={countries}>
              {(item) => <SelectItem id={item.value}>{item.label}</SelectItem>}
            </SelectGroup>
          </SelectList>
        </SelectPopover>
      </Autocomplete>
    </Select>
  )
}
