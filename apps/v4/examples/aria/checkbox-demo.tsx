"use client"

import { Checkbox } from "@/components/ui/aria/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/aria/field"
import { Label } from "@/components/ui/aria/label"

export default function CheckboxDemo() {
  return (
    <FieldGroup className="max-w-sm">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox" name="terms-checkbox" />
        <Label htmlFor="terms-checkbox">利用規約に同意する</Label>
      </Field>
      <Field orientation="horizontal">
        <Checkbox
          id="terms-checkbox-2"
          name="terms-checkbox-2"
          defaultSelected
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-2">
            利用規約に同意する
          </FieldLabel>
          <FieldDescription>
            このチェックボックスをクリックすると、規約に同意したことになります。
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="toggle-checkbox" name="toggle-checkbox" isDisabled />
        <FieldLabel htmlFor="toggle-checkbox">通知を有効にする</FieldLabel>
      </Field>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
          <FieldContent>
            <FieldTitle>通知を有効にする</FieldTitle>
            <FieldDescription>
              いつでも通知の有効・無効を切り替えることができます。
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}
