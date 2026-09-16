"use client"

import * as React from "react"
import { AudioLinesIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import { ButtonGroup } from "@/components/ui/aria/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/aria/input-group"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

export default function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false)

  return (
    <ButtonGroup className="[--radius:9999rem]">
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput
            placeholder={
              voiceEnabled ? "音声を録音して送信..." : "メッセージを送信..."
            }
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <TooltipTrigger>
              <InputGroupButton
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                size="icon-xs"
                data-active={voiceEnabled}
                className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                aria-pressed={voiceEnabled}
              >
                <AudioLinesIcon />
              </InputGroupButton>
              <Tooltip>音声モード</Tooltip>
            </TooltipTrigger>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
