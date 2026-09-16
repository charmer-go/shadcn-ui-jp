import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"

export function InputDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="input-demo-api-key">APIキー</FieldLabel>
      <Input id="input-demo-api-key" type="password" placeholder="sk-..." />
      <FieldDescription>
        APIキーは暗号化され、安全に保存されます。
      </FieldDescription>
    </Field>
  )
}
