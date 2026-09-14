import { Button } from "@/components/ui/aria/button"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button variant="outline">Hover</Button>
      <Tooltip>
        <p>Add to library</p>
      </Tooltip>
    </TooltipTrigger>
  )
}
