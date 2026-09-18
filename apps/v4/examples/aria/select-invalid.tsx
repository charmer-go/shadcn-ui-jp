import { Field, FieldError, FieldLabel } from "@/components/ui/aria/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/aria/select"

const items = [
  { label: "リンゴ", value: "apple" },
  { label: "バナナ", value: "banana" },
  { label: "ブルーベリー", value: "blueberry" },
]

export function SelectInvalid() {
  return (
    <Field data-invalid className="w-full max-w-48">
      <FieldLabel>フルーツ</FieldLabel>
      <Select placeholder="フルーツを選択" isInvalid>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} id={item.value}>
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
