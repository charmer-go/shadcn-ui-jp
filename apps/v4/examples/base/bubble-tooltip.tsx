import { CheckIcon } from "lucide-react"

import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/components/ui/base/bubble"
import { Button } from "@/components/ui/base/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/base/tooltip"

export function BubbleTooltipDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 py-12">
      <Bubble variant="secondary">
        <BubbleContent>古いルートは削除した？</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>うん、レジストリから削除したよ。</BubbleContent>
        <BubbleReactions>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon-xs" />}>
              <CheckIcon />
            </TooltipTrigger>
            <TooltipContent>2026年1月5日 16:32に既読</TooltipContent>
          </Tooltip>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
