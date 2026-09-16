import { Button } from "@/components/ui/aria/button"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button variant="outline">ホバー</Button>
      <Tooltip>
        <p>ライブラリに追加</p>
      </Tooltip>
    </TooltipTrigger>
  )
}
