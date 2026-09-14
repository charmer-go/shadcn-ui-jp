import { Field, FieldLabel } from "@/components/ui/aria/field"
import { Switch } from "@/components/ui/aria/switch"

export default function FieldSwitch() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  )
}
