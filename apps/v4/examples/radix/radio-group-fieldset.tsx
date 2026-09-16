import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/radix/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radix/radio-group"

export function RadioGroupFieldset() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">サブスクリプションプラン</FieldLegend>
      <FieldDescription>
        年間プランと生涯プランは大幅な割引が受けられます。
      </FieldDescription>
      <RadioGroup defaultValue="monthly">
        <Field orientation="horizontal">
          <RadioGroupItem value="monthly" id="plan-monthly" />
          <FieldLabel htmlFor="plan-monthly" className="font-normal">
            月払い（$9.99/月）
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="yearly" id="plan-yearly" />
          <FieldLabel htmlFor="plan-yearly" className="font-normal">
            年払い（$99.99/年）
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="lifetime" id="plan-lifetime" />
          <FieldLabel htmlFor="plan-lifetime" className="font-normal">
            生涯プラン（$299.99）
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}
