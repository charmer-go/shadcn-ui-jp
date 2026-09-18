import { Separator } from "@/components/ui/aria/separator"

export default function SeparatorDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">shadcn/ui</div>
        <div className="text-muted-foreground">デザインシステムの基盤</div>
      </div>
      <Separator />
      <div>
        カスタマイズ、拡張、構築に使える美しく設計されたコンポーネント集です。
      </div>
    </div>
  )
}
