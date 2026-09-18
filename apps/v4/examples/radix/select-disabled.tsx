import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/radix/select"

export function SelectDisabled() {
  return (
    <Select disabled>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="フルーツを選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">リンゴ</SelectItem>
          <SelectItem value="banana">バナナ</SelectItem>
          <SelectItem value="blueberry">ブルーベリー</SelectItem>
          <SelectItem value="grapes" disabled>
            ぶどう
          </SelectItem>
          <SelectItem value="pineapple">パイナップル</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
