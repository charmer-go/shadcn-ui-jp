import { Button } from "@/components/ui/radix/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/radix/button-group"

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
