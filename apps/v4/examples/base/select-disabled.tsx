import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/base/select"

export function SelectDisabled() {
  const items = [
    { label: "フルーツを選択", value: null },
    { label: "リンゴ", value: "apple" },
    { label: "バナナ", value: "banana" },
    { label: "ブルーベリー", value: "blueberry" },
    { label: "ぶどう", value: "grapes", disabled: true },
    { label: "パイナップル", value: "pineapple" },
  ]
  return (
    <Select items={items} disabled>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
