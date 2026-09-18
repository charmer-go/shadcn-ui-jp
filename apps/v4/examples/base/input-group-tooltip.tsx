import { HelpCircle, InfoIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/base/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/base/tooltip"

export default function InputGroupTooltip() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="パスワードを入力" type="password" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger
              render={
                <InputGroupButton
                  variant="ghost"
                  aria-label="情報"
                  size="icon-xs"
                />
              }
            >
              <InfoIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>パスワードは8文字以上で入力してください</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="メールアドレス" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger
              render={
                <InputGroupButton
                  variant="ghost"
                  aria-label="ヘルプ"
                  size="icon-xs"
                />
              }
            >
              <HelpCircle />
            </TooltipTrigger>
            <TooltipContent>
              <p>通知の送信に使用します</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="APIキーを入力" />
        <Tooltip>
          <TooltipTrigger render={<InputGroupAddon />}>
            <InputGroupButton variant="ghost" aria-label="ヘルプ" size="icon-xs">
              <HelpCircle />
            </InputGroupButton>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>APIキーについてのヘルプはこちら</p>
          </TooltipContent>
        </Tooltip>
      </InputGroup>
    </div>
  )
}
