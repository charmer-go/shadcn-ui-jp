import { Button } from "@/components/ui/radix/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/radix/select"

export function InputForm() {
  return (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">名前</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="山田 太郎"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">メールアドレス</FieldLabel>
          <Input id="form-email" type="email" placeholder="john@example.com" />
          <FieldDescription>
            メールアドレスを第三者と共有することはありません。
          </FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">電話番号</FieldLabel>
            <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">国</FieldLabel>
            <Select defaultValue="us">
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">アメリカ合衆国</SelectItem>
                <SelectItem value="uk">イギリス</SelectItem>
                <SelectItem value="ca">カナダ</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-address">住所</FieldLabel>
          <Input id="form-address" type="text" placeholder="123 Main St" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            キャンセル
          </Button>
          <Button type="submit">送信</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
