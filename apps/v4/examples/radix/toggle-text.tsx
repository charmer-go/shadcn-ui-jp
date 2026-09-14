import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/radix/toggle"

export function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}
