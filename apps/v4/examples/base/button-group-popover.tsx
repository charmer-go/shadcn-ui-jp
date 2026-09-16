import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/base/button"
import { ButtonGroup } from "@/components/ui/base/button-group"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/base/field"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/base/popover"
import { Textarea } from "@/components/ui/base/textarea"

export default function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <BotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="outline" size="icon" aria-label="ポップオーバーを開く" />
          }
        >
          <ChevronDownIcon />
        </PopoverTrigger>
        <PopoverContent align="end" className="rounded-xl text-sm">
          <PopoverHeader>
            <PopoverTitle>Copilotで新しいタスクを開始</PopoverTitle>
            <PopoverDescription>
              自然言語でタスクを説明してください。
            </PopoverDescription>
          </PopoverHeader>
          <Field>
            <FieldLabel htmlFor="task" className="sr-only">
              タスクの説明
            </FieldLabel>
            <Textarea
              id="task"
              placeholder="やりたいことは..."
              className="resize-none"
            />
            <FieldDescription>
              Copilotがレビュー用のプルリクエストを作成します。
            </FieldDescription>
          </Field>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
