import { Separator } from "@/components/ui/radix/separator"

export function SeparatorMenu() {
  return (
    <div className="flex items-center gap-2 text-sm md:gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-medium">設定</span>
        <span className="text-xs text-muted-foreground">環境設定を管理</span>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col gap-1">
        <span className="font-medium">アカウント</span>
        <span className="text-xs text-muted-foreground">
          プロフィールとセキュリティ
        </span>
      </div>
      <Separator orientation="vertical" className="hidden md:block" />
      <div className="hidden flex-col gap-1 md:flex">
        <span className="font-medium">ヘルプ</span>
        <span className="text-xs text-muted-foreground">
          サポートとドキュメント
        </span>
      </div>
    </div>
  )
}
