import { Button } from "@/components/ui/radix/button"
import { Kbd } from "@/components/ui/radix/kbd"

export default function KbdButton() {
  return (
    <Button variant="outline">
      承認{" "}
      <Kbd data-icon="inline-end" className="translate-x-0.5">
        ⏎
      </Kbd>
    </Button>
  )
}
