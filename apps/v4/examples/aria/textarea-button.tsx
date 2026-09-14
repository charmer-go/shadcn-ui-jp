import { Button } from "@/components/ui/aria/button"
import { Textarea } from "@/components/ui/aria/textarea"

export function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
