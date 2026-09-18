import { Button } from "@/components/ui/radix/button"
import { ButtonGroup } from "@/components/ui/radix/button-group"
import { Kbd, KbdGroup } from "@/components/ui/radix/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/radix/tooltip"

export default function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">保存</Button>
          </TooltipTrigger>
          <TooltipContent>
            変更を保存 <Kbd>S</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">印刷</Button>
          </TooltipTrigger>
          <TooltipContent>
            ドキュメントを印刷{" "}
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
}
