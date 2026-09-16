import { Button } from "@/components/ui/base/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/base/tooltip"

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        ホバー
      </TooltipTrigger>
      <TooltipContent>
        <p>ライブラリに追加</p>
      </TooltipContent>
    </Tooltip>
  )
}
