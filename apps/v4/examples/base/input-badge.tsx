import { Badge } from "@/components/ui/base/badge"
import { Field, FieldLabel } from "@/components/ui/base/field"
import { Input } from "@/components/ui/base/input"

export function InputBadge() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge variant="secondary" className="ml-auto">
          ベータ
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  )
}
