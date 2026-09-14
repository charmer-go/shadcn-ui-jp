import { Badge } from "@/components/ui/radix/badge"
import { Field, FieldLabel } from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"

export function InputBadge() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge variant="secondary" className="ml-auto">
          Beta
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
