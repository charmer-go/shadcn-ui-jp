import { Toggle } from "@/components/ui/radix/toggle"

export function ToggleSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="小さいトグル" size="sm">
        小さい
      </Toggle>
      <Toggle variant="outline" aria-label="デフォルトのトグル" size="default">
        デフォルト
      </Toggle>
      <Toggle variant="outline" aria-label="大きいトグル" size="lg">
        大きい
      </Toggle>
    </div>
  )
}
