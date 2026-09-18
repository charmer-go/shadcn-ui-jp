import { BoldIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/base/toggle"

export function ToggleOutline() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="斜体を切り替え">
        <ItalicIcon />
        斜体
      </Toggle>
      <Toggle variant="outline" aria-label="太字を切り替え">
        <BoldIcon />
        太字
      </Toggle>
    </div>
  )
}
