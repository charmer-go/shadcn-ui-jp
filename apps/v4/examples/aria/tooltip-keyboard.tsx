import { SaveIcon } from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import { Kbd } from "@/components/ui/aria/kbd"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export function TooltipKeyboard() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon-sm">
        <SaveIcon />
      </Button>
      <Tooltip>
        Save Changes <Kbd>S</Kbd>
      </Tooltip>
    </TooltipTrigger>
  )
}
