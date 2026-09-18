import { Field, FieldGroup, FieldLabel } from "@/components/ui/base/field"
import { Input } from "@/components/ui/base/input"

export function InputGrid() {
  return (
    <FieldGroup className="grid max-w-sm grid-cols-2">
      <Field>
        <FieldLabel htmlFor="first-name">名</FieldLabel>
        <Input id="first-name" placeholder="太郎" />
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">姓</FieldLabel>
        <Input id="last-name" placeholder="山田" />
      </Field>
    </FieldGroup>
  )
}
