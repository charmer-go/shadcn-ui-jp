import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/aria/toggle-group"

export function ToggleGroupSpacing() {
  return (
    <ToggleGroup
      size="sm"
      defaultSelectedKeys={["top"]}
      variant="outline"
      spacing={2}
    >
      <ToggleGroupItem id="top" aria-label="上を切り替え">
        上
      </ToggleGroupItem>
      <ToggleGroupItem id="bottom" aria-label="下を切り替え">
        下
      </ToggleGroupItem>
      <ToggleGroupItem id="left" aria-label="左を切り替え">
        左
      </ToggleGroupItem>
      <ToggleGroupItem id="right" aria-label="右を切り替え">
        右
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
