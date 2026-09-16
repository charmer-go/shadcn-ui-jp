import { Label } from "@/components/ui/aria/label"
import { Switch } from "@/components/ui/aria/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">機内モード</Label>
    </div>
  )
}
