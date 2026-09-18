"use client"

import * as React from "react"

import { Bubble, BubbleContent } from "@/components/ui/aria/bubble"
import { Button } from "@/components/ui/aria/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/aria/card"
import { Message, MessageContent } from "@/components/ui/aria/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
} from "@/components/ui/aria/message-scroller"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/aria/tabs"

const messages = [
  {
    id: "open-1",
    role: "user",
    text: "これは会話の中でユーザーが最初に送信したメッセージです。",
  },
  {
    id: "open-2",
    role: "assistant",
    text: "ワークスペースの作成は8%増加しましたが、最初の招待の完了は2%しか増えませんでした。",
  },
  {
    id: "open-3",
    role: "user",
    text: "これは会話の中でユーザーが最後に送信したメッセージです。",
  },
  {
    id: "open-4",
    role: "assistant",
    text: "招待のステップから始めましょう。チームはワークスペースを作成していますが、共同作業者の追加を後回しにしています。\n\n推奨されるフォローアップ:\n\n1. アカウント規模別に招待の離脱率を比較する。\n2. 招待をスキップしたユーザーが24時間以内に戻ってくるかどうかを確認する。\n3. 最初のプロジェクト画面の空状態の文言を見直す。\n4. テンプレート別にアクティベーションを分けて見る。テンプレートを使うユーザーはすぐに招待を必要としない可能性があるため。\n\nこの傾向が続くなら、次の実験では招待を強く促すのではなく、より早い段階でコラボレーションを役立つものにするべきです。",
  },
] satisfies Array<{
  id: string
  role: "user" | "assistant"
  text: string
}>

const positions = [
  { value: "start", label: "先頭" },
  { value: "end", label: "末尾" },
  { value: "last-anchor", label: "直前のメッセージ" },
] satisfies Array<{
  value: "start" | "end" | "last-anchor"
  label: string
}>

export function MessageScrollerOpeningPosition() {
  const [positionKey, setPositionKey] = React.useState(0)
  const [position, setPosition] = React.useState<
    "start" | "end" | "last-anchor"
  >("last-anchor")

  return (
    <div className="relative flex flex-col gap-4">
      <Card className="mx-auto h-140 w-full max-w-sm gap-0">
        <CardHeader className="gap-1 border-b">
          <CardTitle>開始位置</CardTitle>
          <CardDescription>
            保存済みのトランスクリプトをどこから開くか選択してください。
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
          <MessageScrollerProvider>
            <OpeningPositionScroller
              position={position}
              positionKey={positionKey}
            />
          </MessageScrollerProvider>
        </CardContent>
        <CardFooter className="flex items-center justify-center border-t">
          <Tabs
            selectedKey={position}
            onSelectionChange={(value) => {
              if (
                value === "start" ||
                value === "end" ||
                value === "last-anchor"
              ) {
                setPosition(value)
                setPositionKey((key) => key + 1)
              }
            }}
            className="w-full"
          >
            <TabsList className="w-full">
              {positions.map((option) => (
                <TabsTrigger key={option.value} id={option.value}>
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardFooter>
      </Card>
      <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-muted-foreground">
        defaultScrollPositionを切り替えて、スレッドを開いたときにトランスクリプトがどこから始まるかを確認してください
      </div>
    </div>
  )
}

function OpeningPositionScroller({
  position,
  positionKey,
}: {
  position: "start" | "end" | "last-anchor"
  positionKey: number
}) {
  const { scrollToEnd, scrollToMessage, scrollToStart } = useMessageScroller()

  React.useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (position === "start") {
        scrollToStart({ behavior: "auto" })
        return
      }

      if (position === "end") {
        scrollToEnd({ behavior: "auto" })
        return
      }

      scrollToMessage("open-3", {
        align: "start",
        behavior: "auto",
        scrollMargin: 64,
      })
    })

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [position, positionKey, scrollToEnd, scrollToMessage, scrollToStart])

  return (
    <MessageScroller>
      <MessageScrollerViewport>
        <MessageScrollerContent className="p-(--card-spacing)">
          {messages.map((message) => {
            const isUserMessage = message.role === "user"

            return (
              <MessageScrollerItem
                key={message.id}
                messageId={message.id}
                scrollAnchor={isUserMessage}
              >
                <Message align={isUserMessage ? "end" : "start"}>
                  <MessageContent>
                    <Bubble variant={isUserMessage ? "muted" : "ghost"}>
                      <BubbleContent className="space-y-2">
                        {message.text
                          .split(/\n\s*\n/)
                          .map((paragraph) => paragraph.trim())
                          .filter(Boolean)
                          .map((paragraph, index) => (
                            <p key={index} className="whitespace-pre-wrap">
                              {paragraph}
                            </p>
                          ))}
                      </BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            )
          })}
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  )
}
