import { Bubble, BubbleContent } from "@/components/ui/aria/bubble"
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/aria/message"

export function MessageHeaderFooterDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message>
        <MessageContent>
          <MessageHeader>Olivia</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>すでにログを確認しました。</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              レポートをチームに送ってください。手伝いが必要なら @shadcn にメンションしてください。
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <div>
              既読 <span className="font-normal">昨日</span>
            </div>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}
