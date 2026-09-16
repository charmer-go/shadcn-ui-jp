import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/aria/badge"

export function BadgeAsLink() {
  return (
    <Badge render={(props) => <a {...props} href="#link" />}>
      リンクを開く <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  )
}
