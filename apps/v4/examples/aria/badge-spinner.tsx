import { Badge } from "@/components/ui/aria/badge"
import { Spinner } from "@/components/ui/aria/spinner"

export function BadgeWithSpinner() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        削除中
      </Badge>
      <Badge variant="secondary">
        生成中
        <Spinner data-icon="inline-end" />
      </Badge>
    </div>
  )
}
