import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/aria/toggle-group"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" selectionMode="multiple">
      <ToggleGroupItem id="bold" aria-label="太字を切り替え">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem id="italic" aria-label="斜体を切り替え">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem id="strikethrough" aria-label="取り消し線を切り替え">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
