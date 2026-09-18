import { CheckIcon, InfoIcon, SearchIcon, SparklesIcon } from "lucide-react"

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
  InputGroupInput,
} from "@/components/ui/radix/input-group"
import { Kbd, KbdGroup } from "@/components/ui/radix/kbd"
import { Spinner } from "@/components/ui/radix/spinner"

export function InputGroupWithKbd() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="input-kbd-22">Kbd付き入力グループ</FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-kbd-22" />
          <InputGroupAddon>
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput id="input-kbd-23" />
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput
            id="input-search-apps-24"
            placeholder="アプリを検索..."
          />
          <InputGroupAddon align="inline-end">AIに質問</InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>Tab</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput
            id="input-search-type-25"
            placeholder="入力して検索..."
          />
          <InputGroupAddon align="inline-start">
            <SparklesIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-username-26">ユーザー名</FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-username-26" defaultValue="shadcn" />
          <InputGroupAddon align="inline-end">
            <div className="flex size-4 items-center justify-center rounded-full bg-green-500 dark:bg-green-800">
              <CheckIcon className="size-3 text-white" />
            </div>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription className="text-green-700">
          このユーザー名は使用可能です。
        </FieldDescription>
      </Field>
      <InputGroup>
        <InputGroupInput
          id="input-search-docs-27"
          placeholder="ドキュメントを検索..."
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12件の結果</InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled="true">
        <InputGroupInput
          id="input-search-disabled-28"
          placeholder="ドキュメントを検索..."
          disabled
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">無効</InputGroupAddon>
      </InputGroup>
      <FieldGroup className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="input-group-11">名</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-group-11" placeholder="名" />
            <InputGroupAddon align="inline-end">
              <InfoIcon />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="input-group-12">姓</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-group-12" placeholder="姓" />
            <InputGroupAddon align="inline-end">
              <InfoIcon />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </FieldGroup>
      <Field data-disabled="true">
        <FieldLabel htmlFor="input-group-29">
          読み込み中（&quot;data-disabled=&quot;true&quot;）
        </FieldLabel>
        <InputGroup>
          <InputGroupInput id="input-group-29" disabled defaultValue="shadcn" />
          <InputGroupAddon align="inline-end">
            <Spinner />
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          入力グループの説明です。
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}
