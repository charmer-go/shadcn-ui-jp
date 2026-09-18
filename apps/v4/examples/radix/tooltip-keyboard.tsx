import { SaveIcon } from "lucide-react"

import { Button } from "@/components/ui/radix/button"
import { Kbd } from "@/components/ui/radix/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/radix/tooltip"

export function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon-sm">
          <SaveIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        変更を保存 <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}
