import { Field, FieldError, FieldLabel } from "@/components/ui/base/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/base/select"

const items = [
  { label: "フルーツを選択", value: null },
  { label: "リンゴ", value: "apple" },
  { label: "バナナ", value: "banana" },
  { label: "ブルーベリー", value: "blueberry" },
]

export function SelectInvalid() {
  return (
    <Field data-invalid className="w-full max-w-48">
      <FieldLabel>フルーツ</FieldLabel>
      <Select items={items}>
        <SelectTrigger aria-invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>フルーツを選択してください。</FieldError>
    </Field>
  )
}
