import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/base/select"

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
  const allItems = [
    { label: "フルーツを選択", value: null },
    ...fruits,
    ...vegetables,
  ]
  return (
    <Select items={allItems}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>フルーツ</SelectLabel>
          {fruits.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>野菜</SelectLabel>
          {vegetables.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
