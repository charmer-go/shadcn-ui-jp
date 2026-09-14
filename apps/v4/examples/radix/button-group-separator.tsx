import { Button } from "@/components/ui/radix/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/radix/button-group"

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
