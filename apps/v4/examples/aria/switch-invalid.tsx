import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/aria/field"
import { Switch } from "@/components/ui/aria/switch"

export function SwitchInvalid() {
  return (
    <Field orientation="horizontal" className="max-w-sm" data-invalid>
      <FieldContent>
        <FieldLabel htmlFor="switch-terms">利用規約に同意する</FieldLabel>
        <FieldDescription>
          続行するには利用規約に同意する必要があります。
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-terms" data-invalid />
    </Field>
  )
}
