import { Button } from "@/components/ui/aria/button"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export function TooltipDisabled() {
  return (
    <>
      <TooltipTrigger>
        <span className="inline-block w-fit">
          <Button variant="outline" isDisabled>
            無効
          </Button>
        </span>
        <Tooltip>
          <p>この機能は現在利用できません</p>
        </Tooltip>
      </TooltipTrigger>
    </>
  )
}
