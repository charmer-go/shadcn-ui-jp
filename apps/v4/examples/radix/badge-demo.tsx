import { Badge } from "@/components/ui/radix/badge"

export default function BadgeDemo() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-2">
      <Badge>バッジ</Badge>
      <Badge variant="secondary">セカンダリ</Badge>
      <Badge variant="destructive">デストラクティブ</Badge>
      <Badge variant="outline">アウトライン</Badge>
    </div>
  )
}
