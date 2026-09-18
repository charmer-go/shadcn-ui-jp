import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/aria/toggle-group"

export function ToggleGroupOutline() {
  return (
    <ToggleGroup variant="outline" defaultSelectedKeys={["all"]}>
      <ToggleGroupItem id="all" aria-label="すべてを切り替え">
        すべて
      </ToggleGroupItem>
      <ToggleGroupItem id="missed" aria-label="不在着信を切り替え">
        不在着信
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
