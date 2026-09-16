import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/radix/badge"

export function BadgeAsLink() {
  return (
    <Badge asChild>
      <a href="#link">
        リンクを開く <ArrowUpRightIcon data-icon="inline-end" />
      </a>
    </Badge>
  )
}
