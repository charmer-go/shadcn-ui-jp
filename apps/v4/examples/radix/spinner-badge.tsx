import { Badge } from "@/components/ui/radix/badge"
import { Spinner } from "@/components/ui/radix/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spinner data-icon="inline-start" />
        同期中
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        更新中
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        処理中
      </Badge>
    </div>
  )
}
