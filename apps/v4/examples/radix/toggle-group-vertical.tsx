import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/radix/toggle-group"

export function ToggleGroupVertical() {
  return (
    <ToggleGroup
      type="multiple"
      orientation="vertical"
      spacing={1}
      defaultValue={["bold", "italic"]}
    >
      <ToggleGroupItem value="bold" aria-label="太字を切り替え">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="斜体を切り替え">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="下線を切り替え">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
