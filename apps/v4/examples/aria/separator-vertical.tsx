import { Separator } from "@/components/ui/aria/separator"

export function SeparatorVertical() {
  return (
    <div className="flex h-5 items-center gap-4 text-sm">
      <div>ブログ</div>
      <Separator orientation="vertical" />
      <div>ドキュメント</div>
      <Separator orientation="vertical" />
      <div>ソース</div>
    </div>
  )
}
