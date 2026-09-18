import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="bg-muted">
      <Link href="/docs/changelog">
        Questionnaireコンポーネントを追加 <ArrowRightIcon />
      </Link>
    </Badge>
  )
}
