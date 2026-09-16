import { Checkbox } from "@/components/ui/aria/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/aria/field"

export function CheckboxDisabled() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-disabled>
        <Checkbox
          id="toggle-checkbox-disabled"
          name="toggle-checkbox-disabled"
          isDisabled
        />
        <FieldLabel htmlFor="toggle-checkbox-disabled">
          通知を有効にする
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
