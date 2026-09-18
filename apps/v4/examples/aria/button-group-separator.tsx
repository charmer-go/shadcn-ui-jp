import { Button } from "@/components/ui/aria/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/aria/button-group"

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        コピー
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        貼り付け
      </Button>
    </ButtonGroup>
  )
}
