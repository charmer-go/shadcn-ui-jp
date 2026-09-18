import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/radix/field"
import { Switch } from "@/components/ui/radix/switch"

export function SwitchDescription() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-focus-mode">デバイス間で共有</FieldLabel>
        <FieldDescription>
          フォーカスはデバイス間で共有され、アプリを終了すると自動的にオフになります。
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-focus-mode" />
    </Field>
  )
}
