import { HelpCircle, InfoIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/aria/input-group"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export default function InputGroupTooltip() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="パスワードを入力" type="password" />
        <InputGroupAddon align="inline-end">
          <TooltipTrigger>
            <InputGroupButton variant="ghost" aria-label="情報" size="icon-xs">
              <InfoIcon />
            </InputGroupButton>
            <Tooltip>
              <p>パスワードは8文字以上で入力してください</p>
            </Tooltip>
          </TooltipTrigger>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="メールアドレス" />
        <InputGroupAddon align="inline-end">
          <TooltipTrigger>
            <InputGroupButton variant="ghost" aria-label="ヘルプ" size="icon-xs">
              <HelpCircle />
            </InputGroupButton>
            <Tooltip>
              <p>通知の送信に使用します</p>
            </Tooltip>
          </TooltipTrigger>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="APIキーを入力" />
        <TooltipTrigger>
          <InputGroupAddon>
            <InputGroupButton variant="ghost" aria-label="ヘルプ" size="icon-xs">
              <HelpCircle />
            </InputGroupButton>
          </InputGroupAddon>
          <Tooltip placement="left">
            <p>APIキーについてのヘルプはこちら</p>
          </Tooltip>
        </TooltipTrigger>
      </InputGroup>
    </div>
  )
}
