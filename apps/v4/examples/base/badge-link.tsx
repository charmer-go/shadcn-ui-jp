import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/base/badge"

export function BadgeAsLink() {
  return (
    <Badge render={<a href="#link" />}>
      リンクを開く <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  )
}
