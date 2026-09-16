import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"

export function InputField() {
  return (
    <Field>
      <FieldLabel htmlFor="input-field-username">ユーザー名</FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="ユーザー名を入力してください"
      />
      <FieldDescription>
        アカウントで使用する一意のユーザー名を選択してください。
      </FieldDescription>
    </Field>
  )
}
