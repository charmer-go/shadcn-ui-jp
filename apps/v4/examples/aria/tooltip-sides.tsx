import { Button } from "@/components/ui/aria/button"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export function TooltipSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {(["left", "top", "bottom", "right"] as const).map((side) => (
        <TooltipTrigger key={side}>
          <Button variant="outline" className="w-fit capitalize">
            {side}
          </Button>
          <Tooltip placement={side}>
            <p>ライブラリに追加</p>
          </Tooltip>
        </TooltipTrigger>
      ))}
    </div>
  )
}
