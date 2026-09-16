import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/aria/field"
import { Textarea } from "@/components/ui/aria/textarea"

export function TextareaInvalid() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="textarea-invalid">メッセージ</FieldLabel>
      <Textarea
        id="textarea-invalid"
        placeholder="ここにメッセージを入力してください。"
        aria-invalid
      />
      <FieldDescription>有効なメッセージを入力してください。</FieldDescription>
    </Field>
  )
}
