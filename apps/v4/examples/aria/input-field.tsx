import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"

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
