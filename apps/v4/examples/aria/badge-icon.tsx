import { BadgeCheck, BookmarkIcon } from "lucide-react"

import { Badge } from "@/components/ui/aria/badge"

export function BadgeWithIconLeft() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">
        <BadgeCheck data-icon="inline-start" />
        認証済み
      </Badge>
      <Badge variant="outline">
        ブックマーク
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  )
}
