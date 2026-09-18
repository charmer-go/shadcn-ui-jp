import { InfoIcon } from "lucide-react"

import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/components/ui/radix/bubble"
import { Button } from "@/components/ui/radix/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/radix/popover"

export function BubblePopoverDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 py-12">
      <Bubble align="end">
        <BubbleContent>ビルドスクリプトを実行して。</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>コマンドの実行に失敗しました。</BubbleContent>
        <BubbleReactions>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="エラーの詳細を表示"
                className="aria-expanded:text-destructive"
              >
                <InfoIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle className="text-sm">
                  コマンドが終了コード1で失敗しました
                </PopoverTitle>
                <PopoverDescription className="text-sm">
                  ENOENT: no such file or directory, open pnpm-lock.yaml
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
