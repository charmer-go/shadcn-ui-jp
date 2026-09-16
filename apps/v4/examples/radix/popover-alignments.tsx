import { Button } from "@/components/ui/radix/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/radix/popover"

export function PopoverAlignments() {
  return (
    <div className="flex gap-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            開始
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-40">
          開始位置に整列
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            中央
          </Button>
        </PopoverTrigger>
        <PopoverContent align="center" className="w-40">
          中央に整列
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            終了
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-40">
          終了位置に整列
        </PopoverContent>
      </Popover>
    </div>
  )
}
