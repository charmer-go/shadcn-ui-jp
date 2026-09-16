import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/aria/select"

export function SelectDisabled() {
  const items = [
    { label: "リンゴ", value: "apple" },
    { label: "バナナ", value: "banana" },
    { label: "ブルーベリー", value: "blueberry" },
    { label: "ぶどう", value: "grapes", disabled: true },
    { label: "パイナップル", value: "pineapple" },
  ]
  return (
    <Select isDisabled placeholder="フルーツを選択" className="w-full max-w-48">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem
              key={item.value}
              id={item.value}
              isDisabled={item.disabled}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
