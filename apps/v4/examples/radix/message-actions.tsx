import {
  CopyIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react"

import { Bubble, BubbleContent } from "@/components/ui/radix/bubble"
import { Button } from "@/components/ui/radix/button"
import {
  Message,
  MessageContent,
  MessageFooter,
} from "@/components/ui/radix/message"

export function MessageActionsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              インストールの失敗はワークスペースパッケージが原因です。
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <Button variant="ghost" size="icon" aria-label="コピー" title="コピー">
              <CopyIcon />
            </Button>
            <Button variant="ghost" size="icon" aria-label="いいね" title="いいね">
              <ThumbsUpIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="低評価"
              title="低評価"
            >
              <ThumbsDownIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>了解、リンクを送ってください。確認します...</BubbleContent>
          </Bubble>
          <MessageFooter className="gap-2">
            <span className="font-normal text-destructive">送信に失敗しました</span>
            <Button
              variant="ghost"
              size="icon-xs"
              title="再試行"
              aria-label="再試行"
            >
              <RefreshCcwIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}
