"use client"

import {
  CopyIcon,
  EyeOffIcon,
  InfoIcon,
  MicIcon,
  RadioIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react"
import { toast } from "sonner"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/base/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/base/input-group"

export function InputGroupWithAddons() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="input-icon-left-05">
          アドオン（inline-start）
        </FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-icon-left-05" />
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-icon-right-07">
          アドオン（inline-end）
        </FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-icon-right-07" />
          <InputGroupAddon align="inline-end">
            <EyeOffIcon />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-icon-both-09">
          アドオン（inline-start と inline-end）
        </FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-icon-both-09" />
          <InputGroupAddon>
            <MicIcon className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <RadioIcon className="animate-pulse text-red-500" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-addon-20">アドオン（block-start）</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="input-addon-20" />
          <InputGroupAddon align="block-start">
            <InputGroupText>名</InputGroupText>
            <InfoIcon className="ml-auto text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-addon-21">アドオン（block-end）</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="input-addon-21" />
          <InputGroupAddon align="block-end">
            <InputGroupText>20/240文字</InputGroupText>
            <InfoIcon className="ml-auto text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-icon-both-10">複数アイコン</FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-icon-both-10" />
          <InputGroupAddon align="inline-end">
            <StarIcon />
            <InputGroupButton
              size="icon-xs"
              onClick={() => toast("クリップボードにコピーしました")}
            >
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon>
            <RadioIcon className="animate-pulse text-red-500" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-description-10">説明</FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-description-10" />
          <InputGroupAddon align="inline-end">
            <InfoIcon />
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          入力グループの説明です。
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-label-10">ラベル</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <FieldLabel htmlFor="input-label-10">ラベル</FieldLabel>
          </InputGroupAddon>
          <InputGroupInput id="input-label-10" />
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-optional-12" aria-label="任意" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>（任意）</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}
