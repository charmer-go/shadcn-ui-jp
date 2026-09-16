import { Field, FieldGroup, FieldLabel } from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"
import { InputGroup, InputGroupInput } from "@/components/ui/aria/input-group"

export function InputGroupBasic() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="input-default-01">
          デフォルト（入力グループなし）
        </FieldLabel>
        <Input placeholder="プレースホルダー" id="input-default-01" />
      </Field>
      <Field>
        <FieldLabel htmlFor="input-group-02">入力グループ</FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-group-02" placeholder="プレースホルダー" />
        </InputGroup>
      </Field>
      <Field data-disabled="true">
        <FieldLabel htmlFor="input-disabled-03">無効</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="input-disabled-03"
            placeholder="このフィールドは無効になっています"
            disabled
          />
        </InputGroup>
      </Field>
      <Field data-invalid="true">
        <FieldLabel htmlFor="input-invalid-04">不正な値</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="input-invalid-04"
            placeholder="この入力内容は無効です"
            aria-invalid="true"
          />
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}
