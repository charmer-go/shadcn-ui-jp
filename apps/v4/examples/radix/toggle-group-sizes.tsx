import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/radix/toggle-group"

export function ToggleGroupSizes() {
  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup type="single" size="sm" defaultValue="top" variant="outline">
        <ToggleGroupItem value="top" aria-label="上を切り替え">
          上
        </ToggleGroupItem>
        <ToggleGroupItem value="bottom" aria-label="下を切り替え">
          下
        </ToggleGroupItem>
        <ToggleGroupItem value="left" aria-label="左を切り替え">
          左
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="右を切り替え">
          右
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" defaultValue="top" variant="outline">
        <ToggleGroupItem value="top" aria-label="上を切り替え">
          上
        </ToggleGroupItem>
        <ToggleGroupItem value="bottom" aria-label="下を切り替え">
          下
        </ToggleGroupItem>
        <ToggleGroupItem value="left" aria-label="左を切り替え">
          左
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="右を切り替え">
          右
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
