import { Button } from "@/components/ui/aria/button"
import { Popover, PopoverTrigger } from "@/components/ui/aria/popover"

export function PopoverAlignments() {
  return (
    <>
      <div className="flex gap-6">
        <PopoverTrigger>
          <Button variant="outline" size="sm">
            開始
          </Button>
          <Popover placement="bottom start" className="w-40">
            開始位置に整列
          </Popover>
        </PopoverTrigger>
        <PopoverTrigger>
          <Button variant="outline" size="sm">
            中央
          </Button>
          <Popover placement="bottom" className="w-40">
            中央に整列
          </Popover>
        </PopoverTrigger>
        <PopoverTrigger>
          <Button variant="outline" size="sm">
            終了
          </Button>
          <Popover placement="bottom end" className="w-40">
            終了位置に整列
          </Popover>
        </PopoverTrigger>
      </div>
    </>
  )
}
