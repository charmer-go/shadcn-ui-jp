import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/aria/toggle"

export function ToggleText() {
  return (
    <Toggle aria-label="斜体を切り替え">
      <ItalicIcon />
      斜体
    </Toggle>
  )
}
