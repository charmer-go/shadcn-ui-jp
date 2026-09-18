import { Label } from "@/components/ui/radix/label"
import { Switch } from "@/components/ui/radix/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">機内モード</Label>
    </div>
  )
}
