import { Checkbox } from "@/components/ui/radix/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/radix/field"

export function CheckboxBasic() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">
          利用規約に同意する
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
