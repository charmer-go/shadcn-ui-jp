import { CopyIcon, TrashIcon } from "lucide-react"

import { Button } from "@/components/ui/radix/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/radix/input-group"

export function InputGroupWithButtons() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="input-button-13">ボタン</FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-button-13" />
          <InputGroupAddon>
            <InputGroupButton>デフォルト</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-button-14" />
          <InputGroupAddon>
            <InputGroupButton variant="outline">アウトライン</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-button-15" />
          <InputGroupAddon>
            <InputGroupButton variant="secondary">セカンダリ</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-button-16" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="secondary">ボタン</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-button-17" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs">
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-button-18" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="secondary" size="icon-xs">
              <TrashIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}
