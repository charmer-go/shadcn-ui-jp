import { Toggle } from "@/components/ui/radix/toggle"

export function ToggleDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="無効なトグル" disabled>
        無効
      </Toggle>
      <Toggle variant="outline" aria-label="無効なトグル（アウトライン）" disabled>
        無効
      </Toggle>
    </div>
  )
}
