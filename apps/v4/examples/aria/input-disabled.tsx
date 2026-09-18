import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"

export function InputDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="input-demo-disabled">メールアドレス</FieldLabel>
      <Input
        id="input-demo-disabled"
        type="email"
        placeholder="メールアドレス"
        disabled
      />
      <FieldDescription>この項目は現在無効になっています。</FieldDescription>
    </Field>
  )
}
