import { Button } from "@/components/ui/aria/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"

export function InputFieldgroup() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">名前</FieldLabel>
        <Input id="fieldgroup-name" placeholder="山田 太郎" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">メールアドレス</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="email"
          placeholder="name@example.com"
        />
        <FieldDescription>
          このアドレスに更新情報をお送りします。
        </FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          リセット
        </Button>
        <Button type="submit">送信</Button>
      </Field>
    </FieldGroup>
  )
}
