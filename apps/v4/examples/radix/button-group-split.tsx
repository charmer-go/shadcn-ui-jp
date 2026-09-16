import { IconPlus } from "@tabler/icons-react"

import { Button } from "@/components/ui/radix/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/radix/button-group"

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">ボタン</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <IconPlus />
      </Button>
    </ButtonGroup>
  )
}
