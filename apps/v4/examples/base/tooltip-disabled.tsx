import { Button } from "@/components/ui/base/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/base/tooltip"

export function TooltipDisabled() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger render={<span className="inline-block w-fit" />}>
          <Button variant="outline" disabled>
            無効
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>この機能は現在利用できません</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}
