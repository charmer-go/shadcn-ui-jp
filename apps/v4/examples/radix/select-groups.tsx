import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/radix/select"

export function SelectGroups() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="フルーツを選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>フルーツ</SelectLabel>
          <SelectItem value="apple">リンゴ</SelectItem>
          <SelectItem value="banana">バナナ</SelectItem>
          <SelectItem value="blueberry">ブルーベリー</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>野菜</SelectLabel>
          <SelectItem value="carrot">にんじん</SelectItem>
          <SelectItem value="broccoli">ブロッコリー</SelectItem>
          <SelectItem value="spinach">ほうれん草</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
