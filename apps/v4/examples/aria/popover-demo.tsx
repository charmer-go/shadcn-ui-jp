import { Button } from "@/components/ui/aria/button"
import { Input } from "@/components/ui/aria/input"
import { Label } from "@/components/ui/aria/label"
import { Popover, PopoverTrigger } from "@/components/ui/aria/popover"

export default function PopoverDemo() {
  return (
    <PopoverTrigger>
      <Button variant="outline">ポップオーバーを開く</Button>
      <Popover className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">寸法</h4>
            <p className="text-sm text-muted-foreground">
              レイヤーの寸法を設定します。
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">幅</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">最大幅</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">高さ</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">最大高さ</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </Popover>
    </PopoverTrigger>
  )
}
