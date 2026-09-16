import { Button } from "@/components/ui/radix/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/radix/tooltip"

export function TooltipDisabled() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-block w-fit">
          <Button variant="outline" disabled>
            無効
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>この機能は現在利用できません</p>
      </TooltipContent>
    </Tooltip>
  )
}
