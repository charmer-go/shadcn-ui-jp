import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/radix/select"

export function SelectDemo() {
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
          <SelectItem value="grapes">ぶどう</SelectItem>
          <SelectItem value="pineapple">パイナップル</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
