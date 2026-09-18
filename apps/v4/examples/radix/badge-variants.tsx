import { Badge } from "@/components/ui/radix/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>デフォルト</Badge>
      <Badge variant="secondary">セカンダリ</Badge>
      <Badge variant="destructive">デストラクティブ</Badge>
      <Badge variant="outline">アウトライン</Badge>
      <Badge variant="ghost">ゴースト</Badge>
    </div>
  )
}
