"use client"

import * as React from "react"
import {
  IconCheck,
  IconCopy,
  IconInfoCircle,
  IconStar,
} from "@tabler/icons-react"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/aria/input-group"
import { Popover, PopoverTrigger } from "@/components/ui/aria/popover"

export default function InputGroupButtonExample() {
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="コピー"
            size="icon-xs"
            onClick={() => {
              copyToClipboard("https://x.com/shadcn")
            }}
          >
            {isCopied ? <IconCheck /> : <IconCopy />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <PopoverTrigger>
          <InputGroupAddon>
            <InputGroupButton variant="secondary" size="icon-xs">
              <IconInfoCircle />
            </InputGroupButton>
          </InputGroupAddon>
          <Popover
            placement="bottom start"
            className="flex flex-col gap-1 rounded-xl text-sm"
          >
            <p className="font-medium">この接続は安全ではありません。</p>
            <p>このサイトでは機密情報を入力しないでください。</p>
          </Popover>
        </PopoverTrigger>
        <InputGroupAddon className="pl-1.5 text-muted-foreground">
          https://
        </InputGroupAddon>
        <InputGroupInput id="input-secure-19" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
          >
            <IconStar
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="検索..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">検索</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
