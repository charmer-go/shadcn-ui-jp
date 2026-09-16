import { Button } from "@/components/ui/aria/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"

export function FieldResponsive() {
  return (
    <div className="w-full max-w-lg">
      <form>
        <FieldSet>
          <FieldLegend>プロフィール</FieldLegend>
          <FieldDescription>プロフィール情報を入力してください。</FieldDescription>
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="name">名前</FieldLabel>
                <FieldDescription>
                  本人確認のためフルネームを入力してください
                </FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="山田 太郎" required />
            </Field>
            <Field orientation="responsive">
              <Button type="submit">送信</Button>
              <Button type="button" variant="outline">
                キャンセル
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
