import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/base/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/base/radio-group"

export function FieldRadio() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">サブスクリプションプラン</FieldLegend>
      <FieldDescription>
        年払い・生涯プランなら大幅にお得になります。
      </FieldDescription>
      <RadioGroup defaultValue="monthly">
        <Field orientation="horizontal">
          <RadioGroupItem value="monthly" id="plan-monthly" />
          <FieldLabel htmlFor="plan-monthly" className="font-normal">
            月払い（月額980円）
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="yearly" id="plan-yearly" />
          <FieldLabel htmlFor="plan-yearly" className="font-normal">
            年払い（年額9,800円）
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="lifetime" id="plan-lifetime" />
          <FieldLabel htmlFor="plan-lifetime" className="font-normal">
            生涯プラン（29,800円）
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}
