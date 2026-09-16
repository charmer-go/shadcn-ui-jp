import {
  ArrowUpIcon,
  CodeIcon,
  CopyIcon,
  InfoIcon,
  RefreshCwIcon,
} from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/radix/input-group"
import { Textarea } from "@/components/ui/radix/textarea"

export function InputGroupTextareaExamples() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="textarea-header-footer-12">
          デフォルトのテキストエリア（入力グループなし）
        </FieldLabel>
        <Textarea
          id="textarea-header-footer-12"
          placeholder="ここにテキストを入力..."
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="textarea-header-footer-13">入力グループ</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="textarea-header-footer-13"
            placeholder="ここにテキストを入力..."
          />
        </InputGroup>
        <FieldDescription>
          入力グループの説明です。
        </FieldDescription>
      </Field>
      <Field data-invalid="true">
        <FieldLabel htmlFor="textarea-header-footer-14">不正な値</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="textarea-header-footer-14"
            placeholder="ここにテキストを入力..."
            aria-invalid="true"
          />
        </InputGroup>
        <FieldDescription>
          入力グループの説明です。
        </FieldDescription>
      </Field>
      <Field data-disabled="true">
        <FieldLabel htmlFor="textarea-header-footer-15">無効</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="textarea-header-footer-15"
            placeholder="ここにテキストを入力..."
            disabled
          />
        </InputGroup>
        <FieldDescription>
          入力グループの説明です。
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="prompt-31">アドオン（block-start）</FieldLabel>
        <InputGroup>
          <InputGroupTextarea id="prompt-31" />
          <InputGroupAddon align="block-start">
            <InputGroupText>質問・検索・チャット...</InputGroupText>
            <InfoIcon className="ml-auto text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          入力グループの説明です。
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="textarea-header-footer-30">
          アドオン（block-end）
        </FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="textarea-header-footer-30"
            placeholder="ここにテキストを入力..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280文字</InputGroupText>
            <InputGroupButton
              variant="default"
              size="icon-xs"
              className="ml-auto rounded-full"
            >
              <ArrowUpIcon />
              <span className="sr-only">送信</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel htmlFor="textarea-comment-31">アドオン（ボタン）</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="textarea-comment-31"
            placeholder="ご意見をお聞かせください..."
            className="min-h-[120px]"
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton variant="ghost" className="ml-auto" size="sm">
              キャンセル
            </InputGroupButton>
            <InputGroupButton variant="default" size="sm">
              コメントを投稿
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel htmlFor="textarea-code-32">コードエディタ</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="textarea-code-32"
            placeholder="console.log('Hello, world!');"
            className="min-h-[300px] py-3"
          />
          <InputGroupAddon align="block-start" className="border-b">
            <InputGroupText className="font-mono font-medium">
              <CodeIcon />
              script.js
            </InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto">
              <RefreshCwIcon />
            </InputGroupButton>
            <InputGroupButton size="icon-xs" variant="ghost">
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon align="block-end" className="border-t">
            <InputGroupText>1行目, 1列目</InputGroupText>
            <InputGroupText className="ml-auto">JavaScript</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}
