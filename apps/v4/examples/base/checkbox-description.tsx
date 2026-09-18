import { Checkbox } from "@/components/ui/base/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/base/field"

export function CheckboxDescription() {
  return (
    <FieldGroup className="mx-auto w-72">
      <Field orientation="horizontal">
        <Checkbox
          id="terms-checkbox-desc"
          name="terms-checkbox-desc"
          defaultChecked
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-desc">
            利用規約に同意する
          </FieldLabel>
          <FieldDescription>
            このチェックボックスをクリックすると、利用規約に同意したことになります。
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}
