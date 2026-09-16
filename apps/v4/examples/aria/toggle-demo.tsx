import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@/components/ui/aria/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="ブックマークを切り替え" size="sm" variant="outline">
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      ブックマーク
    </Toggle>
  )
}
