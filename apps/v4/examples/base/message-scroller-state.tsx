"use client"

import { Bubble, BubbleContent } from "@/components/ui/base/bubble"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/base/card"
import { Message, MessageContent } from "@/components/ui/base/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScrollerScrollable,
} from "@/components/ui/base/message-scroller"

const messages = Array.from({ length: 12 }, (_, index) => ({
  id: `state-${index + 1}`,
  role: index % 2 === 0 ? "user" : "assistant",
  text:
    index % 2 === 0
      ? `トランスクリプトのセクション${index + 1}を確認してください。`
      : `セクション${index + 1}の準備ができました。スクロールの状態は行を再レンダリングせずに更新されます。`,
})) satisfies Array<{
  id: string
  role: "user" | "assistant"
  text: string
}>

export function MessageScrollerState() {
  return (
    <Card className="mx-auto h-112 w-full max-w-md gap-0">
      <CardHeader className="border-b">
        <CardTitle>スクロールの状態</CardTitle>
        <CardDescription>
          state用のフックを使って、スクロールの状態をJavaScriptで取得します。
        </CardDescription>
      </CardHeader>
      <CardContent className="min-h-0 flex-1 p-0">
        <MessageScrollerProvider defaultScrollPosition="start">
          <MessageScroller>
            <StatusBar />
            <MessageScrollerViewport>
              <MessageScrollerContent className="gap-4 p-4 pt-12">
                {messages.map((message) => (
                  <MessageScrollerItem
                    key={message.id}
                    messageId={message.id}
                    scrollAnchor={message.role === "user"}
                  >
                    <Message align={message.role === "user" ? "end" : "start"}>
                      <MessageContent>
                        <Bubble
                          variant={
                            message.role === "user" ? "default" : "muted"
                          }
                        >
                          <BubbleContent>{message.text}</BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
      </CardContent>
    </Card>
  )
}

function StatusBar() {
  const { start, end } = useMessageScrollerScrollable()
  const states = [
    { label: "上端にいます", on: !start },
    { label: "下端にいます", on: !end },
    { label: "上に過去のメッセージ", on: start },
    { label: "下に新しいメッセージ", on: end },
  ]

  return (
    <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex flex-wrap gap-1.5">
      {states.map((state) => (
        <span
          key={state.label}
          data-on={state.on}
          className="rounded-full border bg-background px-2 py-0.5 text-xs text-muted-foreground data-[on=true]:border-transparent data-[on=true]:bg-primary data-[on=true]:text-primary-foreground"
        >
          {state.label}
        </span>
      ))}
    </div>
  )
}
