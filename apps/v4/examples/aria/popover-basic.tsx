import { Button } from "@/components/ui/aria/button"
import {
  Popover,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/aria/popover"

export function PopoverBasic() {
  return (
    <PopoverTrigger>
      <Button variant="outline">ポップオーバーを開く</Button>
      <Popover placement="bottom start">
        <PopoverHeader>
          <PopoverTitle>寸法</PopoverTitle>
          <PopoverDescription>
            レイヤーの寸法を設定します。
          </PopoverDescription>
        </PopoverHeader>
      </Popover>
    </PopoverTrigger>
  )
}
