import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/radix/field"
import { Textarea } from "@/components/ui/radix/textarea"

export default function FieldTextarea() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="feedback">フィードバック</FieldLabel>
          <Textarea
            id="feedback"
            placeholder="サービス改善のため、ご意見をお聞かせください..."
            rows={4}
          />
          <FieldDescription>
            サービスについてのご感想をお聞かせください。
          </FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
