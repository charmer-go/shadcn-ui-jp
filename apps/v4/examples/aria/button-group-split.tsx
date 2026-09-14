import { IconPlus } from "@tabler/icons-react"

import { Button } from "@/components/ui/aria/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/aria/button-group"

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <IconPlus />
      </Button>
    </ButtonGroup>
  )
}
