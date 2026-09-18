import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@/components/ui/radix/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="ブックマークを切り替え" size="sm" variant="outline">
      <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
      ブックマーク
    </Toggle>
  )
}
