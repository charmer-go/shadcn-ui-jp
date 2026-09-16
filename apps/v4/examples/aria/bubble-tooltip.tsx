import { CheckIcon } from "lucide-react"

import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/components/ui/aria/bubble"
import { Button } from "@/components/ui/aria/button"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export function BubbleTooltipDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 py-12">
      <Bubble variant="secondary">
        <BubbleContent>古いルートは削除した？</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>うん、レジストリから削除したよ。</BubbleContent>
        <BubbleReactions>
          <TooltipTrigger>
            <Button variant="ghost" size="icon-xs">
              <CheckIcon />
            </Button>
            <Tooltip>2026年1月5日 16:32に既読</Tooltip>
          </TooltipTrigger>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
