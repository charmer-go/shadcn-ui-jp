import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/radix/toggle-group"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" type="multiple">
      <ToggleGroupItem value="bold" aria-label="太字を切り替え">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="斜体を切り替え">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="取り消し線を切り替え">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
