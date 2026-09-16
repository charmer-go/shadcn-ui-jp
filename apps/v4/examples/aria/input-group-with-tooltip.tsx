"use client"

import { ChevronDownIcon, InfoIcon, StarIcon } from "lucide-react"
import { toast } from "sonner"

import {
  ButtonGroup,
  ButtonGroupText,
} from "@/components/ui/aria/button-group"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"
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
} from "@/components/ui/aria/input-group"
import {
  Popover,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/aria/popover"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export function InputGroupWithTooltip({
  country,
  setCountry,
}: {
  country: string
  setCountry: (value: string) => void
}) {
  return (
    <>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-tooltip-20">ツールチップ</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-tooltip-20" />
            <InputGroupAddon align="inline-end">
              <TooltipTrigger>
                <InputGroupButton className="rounded-full" size="icon-xs">
                  <InfoIcon />
                </InputGroupButton>
                <Tooltip>ツールチップの内容です。</Tooltip>
              </TooltipTrigger>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            入力グループの説明です。
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-dropdown-21">ドロップダウン</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-dropdown-21" />
            <InputGroupAddon>
              <DropdownMenuTrigger>
                <InputGroupButton className="text-muted-foreground tabular-nums">
                  {country} <ChevronDownIcon />
                </InputGroupButton>
                <DropdownMenu
                  placement="bottom start"
                  className="min-w-16"
                  offset={10}
                  crossOffset={-8}
                >
                  <DropdownMenuItem onClick={() => setCountry("+1")}>
                    +1
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setCountry("+44")}>
                    +44
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setCountry("+46")}>
                    +46
                  </DropdownMenuItem>
                </DropdownMenu>
              </DropdownMenuTrigger>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            入力グループの説明です。
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-secure-19">ポップオーバー</FieldLabel>
          <InputGroup>
            <PopoverTrigger>
              <InputGroupAddon>
                <InputGroupButton variant="secondary" size="icon-xs">
                  <InfoIcon />
                </InputGroupButton>
              </InputGroupAddon>
              <Popover placement="bottom start">
                <PopoverHeader>
                  <PopoverTitle>この接続は安全ではありません。</PopoverTitle>
                  <PopoverDescription>
                    このサイトでは機密情報を入力しないでください。
                  </PopoverDescription>
                </PopoverHeader>
              </Popover>
            </PopoverTrigger>
            <InputGroupAddon className="pl-1 text-muted-foreground">
              https://
            </InputGroupAddon>
            <InputGroupInput id="input-secure-19" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                size="icon-xs"
                onClick={() => toast("お気に入りに追加しました")}
              >
                <StarIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            入力グループの説明です。
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="url">ボタングループ</FieldLabel>
          <ButtonGroup>
            <ButtonGroupText>https://</ButtonGroupText>
            <InputGroup>
              <InputGroupInput id="url" />
              <InputGroupAddon align="inline-end">
                <InfoIcon />
              </InputGroupAddon>
            </InputGroup>
            <ButtonGroupText>.com</ButtonGroupText>
          </ButtonGroup>
          <FieldDescription>
            入力グループの説明です。
          </FieldDescription>
        </Field>
      </FieldGroup>
    </>
  )
}
