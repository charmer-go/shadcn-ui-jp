import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/radix/toggle-group"

export function ToggleGroupOutline() {
  return (
    <ToggleGroup variant="outline" type="single" defaultValue="all">
      <ToggleGroupItem value="all" aria-label="すべてを切り替え">
        すべて
      </ToggleGroupItem>
      <ToggleGroupItem value="missed" aria-label="不在着信を切り替え">
        不在着信
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
