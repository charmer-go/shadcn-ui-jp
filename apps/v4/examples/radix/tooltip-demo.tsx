import { Button } from "@/components/ui/radix/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/radix/tooltip"

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">ホバー</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>ライブラリに追加</p>
      </TooltipContent>
    </Tooltip>
  )
}
