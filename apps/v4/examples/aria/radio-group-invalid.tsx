import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/aria/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/aria/radio-group"

export function RadioGroupInvalid() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">通知設定</FieldLegend>
      <FieldDescription>
        通知の受け取り方法を選択してください。
      </FieldDescription>
      <RadioGroup
        aria-label="通知設定"
        defaultValue="email"
        isInvalid
      >
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="email" id="invalid-email" />
          <FieldLabel htmlFor="invalid-email" className="font-normal">
            メールのみ
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="sms" id="invalid-sms" />
          <FieldLabel htmlFor="invalid-sms" className="font-normal">
            SMSのみ
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="both" id="invalid-both" />
          <FieldLabel htmlFor="invalid-both" className="font-normal">
            メールとSMSの両方
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}
