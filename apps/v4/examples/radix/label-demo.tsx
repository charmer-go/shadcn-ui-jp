import { Checkbox } from "@/components/ui/radix/checkbox"
import { Label } from "@/components/ui/radix/label"

export default function LabelDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">利用規約に同意する</Label>
    </div>
  )
}
