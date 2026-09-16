import { Button } from "@/components/ui/base/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/base/popover"

export function PopoverAlignments() {
  return (
    <>
      <div className="flex gap-6">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            開始
          </PopoverTrigger>
          <PopoverContent align="start" className="w-40">
            開始位置に整列
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            中央
          </PopoverTrigger>
          <PopoverContent align="center" className="w-40">
            中央に整列
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            終了
          </PopoverTrigger>
          <PopoverContent align="end" className="w-40">
            終了位置に整列
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}
