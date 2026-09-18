import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/aria/select"

export function SelectGroups() {
  const fruits = [
    { label: "リンゴ", value: "apple" },
    { label: "バナナ", value: "banana" },
    { label: "ブルーベリー", value: "blueberry" },
  ]
  const vegetables = [
    { label: "にんじん", value: "carrot" },
    { label: "ブロッコリー", value: "broccoli" },
    { label: "ほうれん草", value: "spinach" },
  ]
  const allItems = [...fruits, ...vegetables]
  return (
    <Select placeholder="フルーツを選択" className="w-full max-w-48">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>フルーツ</SelectLabel>
          {fruits.map((item) => (
            <SelectItem key={item.value} id={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>野菜</SelectLabel>
          {vegetables.map((item) => (
            <SelectItem key={item.value} id={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
