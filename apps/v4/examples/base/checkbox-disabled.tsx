import { Checkbox } from "@/components/ui/base/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/base/field"

export function CheckboxDisabled() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-disabled>
        <Checkbox
          id="toggle-checkbox-disabled"
          name="toggle-checkbox-disabled"
          disabled
        />
        <FieldLabel htmlFor="toggle-checkbox-disabled">
          通知を有効にする
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
