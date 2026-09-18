import { Field, FieldLabel } from "@/components/ui/radix/field"
import { Switch } from "@/components/ui/radix/switch"

export default function FieldSwitch() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="2fa">多要素認証</FieldLabel>
      <Switch id="2fa" />
    </Field>
  )
}
