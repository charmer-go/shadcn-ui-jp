import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/aria/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/aria/input-group"

export function InputGroupBlockEnd() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-end-input">入力欄</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-end-input" placeholder="金額を入力" />
          <InputGroupAddon align="block-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>フッターは入力欄の下に配置されます。</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-end-textarea">テキストエリア</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-end-textarea"
            placeholder="コメントを入力..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton variant="default" size="sm" className="ml-auto">
              投稿
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          フッターはテキストエリアの下に配置されます。
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}
