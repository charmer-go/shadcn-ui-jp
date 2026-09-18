import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/radix/field"
import { Textarea } from "@/components/ui/radix/textarea"

export function TextareaField() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">メッセージ</FieldLabel>
      <FieldDescription>以下にメッセージを入力してください。</FieldDescription>
      <Textarea id="textarea-message" placeholder="ここにメッセージを入力してください。" />
    </Field>
  )
}
