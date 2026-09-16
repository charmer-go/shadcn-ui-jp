import { Button } from "@/components/ui/base/button"
import { ButtonGroup } from "@/components/ui/base/button-group"
import { Kbd, KbdGroup } from "@/components/ui/base/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/base/tooltip"

export default function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            保存
          </TooltipTrigger>
          <TooltipContent>
            変更を保存 <Kbd>S</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            印刷
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
