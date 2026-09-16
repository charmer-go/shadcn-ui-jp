import { Button } from "@/components/ui/base/button"
import { Kbd } from "@/components/ui/base/kbd"

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
