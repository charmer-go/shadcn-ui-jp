import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/radix/button"
import { ButtonGroup } from "@/components/ui/radix/button-group"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/radix/field"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/radix/popover"
import { Textarea } from "@/components/ui/radix/textarea"

export default function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <BotIcon /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="ポップオーバーを開く">
            <ChevronDownIcon />
          </Button>
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
