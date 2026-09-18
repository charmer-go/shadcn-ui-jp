import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/aria/toggle-group"

export function ToggleGroupVertical() {
  return (
    <ToggleGroup
      selectionMode="multiple"
      orientation="vertical"
      spacing={1}
      defaultSelectedKeys={["bold", "italic"]}
    >
      <ToggleGroupItem id="bold" aria-label="太字を切り替え">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem id="italic" aria-label="斜体を切り替え">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem id="underline" aria-label="下線を切り替え">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
