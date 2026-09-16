import { AudioLinesIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import { ButtonGroup } from "@/components/ui/aria/button-group"
import { Input } from "@/components/ui/aria/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/aria/input-group"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="メッセージを送信..." />
          <TooltipTrigger>
            <InputGroupAddon align="inline-end">
              <AudioLinesIcon />
            </InputGroupAddon>
            <Tooltip>音声モード</Tooltip>
          </TooltipTrigger>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
