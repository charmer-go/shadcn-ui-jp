import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/radix/button"
import { ButtonGroup } from "@/components/ui/radix/button-group"
import { Input } from "@/components/ui/radix/input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="検索..." />
      <Button variant="outline" aria-label="検索">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
