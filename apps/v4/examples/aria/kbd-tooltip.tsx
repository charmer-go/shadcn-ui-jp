import { Button } from "@/components/ui/aria/button"
import { ButtonGroup } from "@/components/ui/aria/button-group"
import { Kbd, KbdGroup } from "@/components/ui/aria/kbd"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export default function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <TooltipTrigger>
          <Button variant="outline">保存</Button>
          <Tooltip>
            変更を保存 <Kbd>S</Kbd>
          </Tooltip>
        </TooltipTrigger>
        <TooltipTrigger>
          <Button variant="outline">印刷</Button>
          <Tooltip>
            ドキュメントを印刷{" "}
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </Tooltip>
        </TooltipTrigger>
      </ButtonGroup>
    </div>
  )
}
