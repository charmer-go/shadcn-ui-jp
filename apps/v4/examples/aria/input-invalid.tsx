import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"

export function InputInvalid() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid">無効な入力</FieldLabel>
      <Input id="input-invalid" placeholder="エラー" aria-invalid />
      <FieldDescription>
        この項目には入力エラーがあります。
      </FieldDescription>
    </Field>
  )
}
