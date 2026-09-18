import { Checkbox } from "@/components/ui/aria/checkbox"
import { Label } from "@/components/ui/aria/label"

export default function LabelDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">利用規約に同意する</Label>
    </div>
  )
}
