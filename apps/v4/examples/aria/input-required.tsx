import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"

export function InputRequired() {
  return (
    <Field>
      <FieldLabel htmlFor="input-required">
        必須項目 <span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        placeholder="この項目は必須です"
        required
      />
      <FieldDescription>この項目は入力必須です。</FieldDescription>
    </Field>
  )
}
