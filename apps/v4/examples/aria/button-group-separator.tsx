import { Button } from "@/components/ui/aria/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/aria/button-group"

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
