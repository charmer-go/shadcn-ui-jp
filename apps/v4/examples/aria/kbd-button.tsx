import { Button } from "@/components/ui/aria/button"
import { Kbd } from "@/components/ui/aria/kbd"

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
