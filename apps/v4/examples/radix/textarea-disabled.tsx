import { Field, FieldLabel } from "@/components/ui/radix/field"
import { Textarea } from "@/components/ui/radix/textarea"

export function TextareaDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">メッセージ</FieldLabel>
      <Textarea
        id="textarea-disabled"
        placeholder="ここにメッセージを入力してください。"
        disabled
      />
    </Field>
  )
}
