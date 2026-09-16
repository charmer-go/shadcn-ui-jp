import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/base/select"

const items = [
  { label: "フルーツを選択", value: null },
  { label: "リンゴ", value: "apple" },
  { label: "バナナ", value: "banana" },
  { label: "ブルーベリー", value: "blueberry" },
  { label: "ぶどう", value: "grapes" },
  { label: "パイナップル", value: "pineapple" },
]

export function SelectDemo() {
  return (
    <Select items={items}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>フルーツ</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
