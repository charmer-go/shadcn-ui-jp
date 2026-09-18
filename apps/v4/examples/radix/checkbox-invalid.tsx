import { Checkbox } from "@/components/ui/radix/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/radix/field"

export function CheckboxInvalid() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-invalid>
        <Checkbox
          id="terms-checkbox-invalid"
          name="terms-checkbox-invalid"
          aria-invalid
        />
        <FieldLabel htmlFor="terms-checkbox-invalid">
          利用規約に同意する
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
