import { Label } from "@/components/ui/base/label"
import { Switch } from "@/components/ui/base/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">機内モード</Label>
    </div>
  )
}
