"use client"

import { MessageAnimated } from "@/components/message-animated"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/aria/card"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScrollerScrollable,
} from "@/components/ui/aria/message-scroller"

const messages = Array.from({ length: 12 }, (_, index) => ({
  id: `scrollable-${index + 1}`,
  role: index % 2 === 0 ? "user" : "assistant",
  text:
    index % 2 === 0
      ? `スクロールチェックポイント${index + 1}を確認してください。`
      : `チェックポイント${index + 1}は同期済みです。表示領域が移動すると、scrollableフックが更新されます。\n\n読者が最初のメッセージにいるときは、フッターは下方向のみを示すべきです。トランスクリプトの中間に移動すると、両方向に進めることを説明する必要があります。\n\n最新のメッセージにいるときは、フッターは再び切り替わり、上方向のみを示すべきです。`,
})) satisfies Array<{
  id: string
  role: "user" | "assistant"
  text: string
}>

export function MessageScrollerScrollable() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-4">
      <Card className="h-140 w-full gap-0 overflow-hidden">
        <CardHeader className="gap-1 border-b">
          <CardTitle>スクロールの状態</CardTitle>
          <CardDescription>
            現在のスクロール位置に応じて、読者がどちらへスクロールできるかを示します。
          </CardDescription>
        </CardHeader>
        <MessageScrollerProvider defaultScrollPosition="start">
          <CardContent className="flex-1 overflow-hidden p-0">
            <MessageScroller>
              <MessageScrollerViewport>
                <MessageScrollerContent className="gap-4 p-(--card-spacing)">
                  <Transcript />
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </CardContent>
          <ScrollStateFooter />
        </MessageScrollerProvider>
      </Card>
      <div className="px-0.5 text-center text-xs text-muted-foreground">
        トランスクリプトをスクロールして、フッターの更新を確認してください。
      </div>
    </div>
  )
}

function Transcript() {
  return messages.map((message) => (
    <MessageAnimated
      key={message.id}
      message={message}
      scrollAnchor={message.role === "user"}
      userVariant="muted"
      assistantVariant="ghost"
    />
  ))
}

function ScrollStateFooter() {
  const { start, end } = useMessageScrollerScrollable()

  const status = getScrollStatus({ start, end })

  return (
    <CardFooter className="justify-center border-t text-center text-sm text-muted-foreground">
      {status}
    </CardFooter>
  )
}

function getScrollStatus({ start, end }: { start: boolean; end: boolean }) {
  if (start && end) {
    return "両方向にスクロールできます。"
  }

  if (end) {
    return "上端にいます。下方向にのみスクロールできます。"
  }

  if (start) {
    return "下端にいます。上方向にのみスクロールできます。"
  }

  return "すべてのメッセージが表示領域内に収まっています。"
}
