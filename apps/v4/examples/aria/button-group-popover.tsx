import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import { ButtonGroup } from "@/components/ui/aria/button-group"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/aria/field"
import {
  Popover,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/aria/popover"
import { Textarea } from "@/components/ui/aria/textarea"

export default function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <BotIcon /> Copilot
      </Button>
      <PopoverTrigger>
        <Button variant="outline" size="icon" aria-label="ポップオーバーを開く">
          <ChevronDownIcon />
        </Button>
        <Popover placement="bottom end" className="rounded-xl text-sm">
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
        </Popover>
      </PopoverTrigger>
    </ButtonGroup>
  )
}
