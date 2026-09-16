import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/radix/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radix/radio-group"

export function RadioGroupDescription() {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <Field orientation="horizontal">
        <RadioGroupItem value="default" id="desc-r1" />
        <FieldContent>
          <FieldLabel htmlFor="desc-r1">デフォルト</FieldLabel>
          <FieldDescription>
            ほとんどの用途に適した標準的な間隔です。
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="comfortable" id="desc-r2" />
        <FieldContent>
          <FieldLabel htmlFor="desc-r2">ゆったり</FieldLabel>
          <FieldDescription>要素間の間隔を広くします。</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="compact" id="desc-r3" />
        <FieldContent>
          <FieldLabel htmlFor="desc-r3">コンパクト</FieldLabel>
          <FieldDescription>
            密度の高いレイアウト向けの最小限の間隔です。
          </FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  )
}
