import { ExternalLinkIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/ui/radix/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/radix/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/radix/input-group"

export function InputGroupInCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>入力グループ付きカード</CardTitle>
        <CardDescription>入力グループを含むカードです。</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email-input">メールアドレス</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="email-input"
                type="email"
                placeholder="you@example.com"
              />
              <InputGroupAddon align="inline-end">
                <MailIcon />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="website-input">ウェブサイトURL</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput id="website-input" placeholder="example.com" />
              <InputGroupAddon align="inline-end">
                <ExternalLinkIcon />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="feedback-textarea">
              フィードバック・コメント
            </FieldLabel>
            <InputGroup>
              <InputGroupTextarea
                id="feedback-textarea"
                placeholder="ご意見をお聞かせください..."
                className="min-h-[100px]"
              />
              <InputGroupAddon align="block-end">
                <InputGroupText>0/500文字</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">キャンセル</Button>
        <Button>送信</Button>
      </CardFooter>
    </Card>
  )
}
