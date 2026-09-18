import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"

export function FieldFieldset() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>住所情報</FieldLegend>
      <FieldDescription>
        商品の配送先として住所が必要です。
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="street">番地・建物名</FieldLabel>
          <Input id="street" type="text" placeholder="千代田区1-1-1" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="city">市区町村</FieldLabel>
            <Input id="city" type="text" placeholder="東京都千代田区" />
          </Field>
          <Field>
            <FieldLabel htmlFor="zip">郵便番号</FieldLabel>
            <Input id="zip" type="text" placeholder="100-0001" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  )
}
