import { CopyIcon, FileCodeIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/radix/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/radix/input-group"

export function InputGroupBlockStart() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-start-input">入力欄</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput
            id="block-start-input"
            placeholder="お名前を入力"
          />
          <InputGroupAddon align="block-start">
            <InputGroupText>氏名</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>ヘッダーは入力欄の上に配置されます。</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-start-textarea">テキストエリア</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-start-textarea"
            placeholder="console.log('Hello, world!');"
            className="font-mono text-sm"
          />
          <InputGroupAddon align="block-start">
            <FileCodeIcon className="text-muted-foreground" />
            <InputGroupText className="font-mono">script.js</InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto">
              <CopyIcon />
              <span className="sr-only">コピー</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          ヘッダーはテキストエリアの上に配置されます。
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}
