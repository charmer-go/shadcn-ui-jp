import { Button } from "@/components/ui/base/button"
import { Textarea } from "@/components/ui/base/textarea"

export function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
