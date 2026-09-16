import { Field, FieldError, FieldLabel } from "@/components/ui/radix/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/radix/select"

export function SelectInvalid() {
  return (
    <Field data-invalid className="w-full max-w-48">
      <FieldLabel>フルーツ</FieldLabel>
      <Select>
        <SelectTrigger aria-invalid>
          <SelectValue placeholder="フルーツを選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">リンゴ</SelectItem>
            <SelectItem value="banana">バナナ</SelectItem>
            <SelectItem value="blueberry">ブルーベリー</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>フルーツを選択してください。</FieldError>
    </Field>
  )
}
