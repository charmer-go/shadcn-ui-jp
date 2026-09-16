import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/radix/toggle-group"

export function ToggleGroupSpacing() {
  return (
    <ToggleGroup
      type="single"
      size="sm"
      defaultValue="top"
      variant="outline"
      spacing={2}
    >
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
  )
}
