import { SaveIcon } from "lucide-react"

import { Button } from "@/components/ui/base/button"
import { Kbd } from "@/components/ui/base/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/base/tooltip"

export function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
        <SaveIcon />
      </TooltipTrigger>
      <TooltipContent>
        変更を保存 <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}
