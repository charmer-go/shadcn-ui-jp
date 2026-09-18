import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/base/field"
import { Input } from "@/components/ui/base/input"

export default function FieldInput() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">ユーザー名</FieldLabel>
          <Input id="username" type="text" placeholder="山田 太郎" />
          <FieldDescription>
            アカウント用のユニークなユーザー名を選んでください。
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">パスワード</FieldLabel>
          <FieldDescription>
            8文字以上で入力してください。
          </FieldDescription>
          <Input id="password" type="password" placeholder="••••••••" />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
