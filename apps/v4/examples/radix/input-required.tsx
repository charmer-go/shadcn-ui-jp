import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"

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
