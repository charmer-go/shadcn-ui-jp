import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/aria/toggle"

export function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}
