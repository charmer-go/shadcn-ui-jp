import { Button } from "@/components/ui/radix/button"
import { Textarea } from "@/components/ui/radix/textarea"

export function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
