import { InfoIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/base/input-group"
import { Label } from "@/components/ui/base/label"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/base/tooltip"

export default function InputGroupLabel() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput id="email" placeholder="shadcn" />
        <InputGroupAddon>
          <Label htmlFor="email">@</Label>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
        <InputGroupAddon align="block-start">
          <Label htmlFor="email-2" className="text-foreground">
            メールアドレス
          </Label>
          <Tooltip>
            <TooltipTrigger
              render={
                <InputGroupButton
                  variant="ghost"
                  aria-label="ヘルプ"
                  className="ml-auto rounded-full"
                  size="icon-xs"
                />
              }
            >
              <InfoIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>通知の送信に使用します</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
