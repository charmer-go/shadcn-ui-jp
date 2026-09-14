import { Button } from "@/components/ui/base/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/base/button-group"

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  )
}
