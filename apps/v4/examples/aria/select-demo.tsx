import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/aria/select"

const items = [
  { label: "リンゴ", value: "apple" },
  { label: "バナナ", value: "banana" },
  { label: "ブルーベリー", value: "blueberry" },
  { label: "ぶどう", value: "grapes" },
  { label: "パイナップル", value: "pineapple" },
]

export function SelectDemo() {
  return (
    <Select placeholder="フルーツを選択" className="w-full max-w-48">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>フルーツ</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} id={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
