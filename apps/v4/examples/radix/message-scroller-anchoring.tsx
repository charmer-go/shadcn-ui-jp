"use client"

import * as React from "react"
import {
  ArrowUpIcon,
  MessageCircleDashedIcon,
  RotateCwIcon,
} from "lucide-react"

import { MessageAnimated } from "@/components/message-animated"
import { Button } from "@/components/ui/radix/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/radix/card"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/radix/empty"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/radix/message-scroller"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/radix/toggle-group"

type AnchorRole = "user" | "assistant"

type ChatMessage = {
  id: string
  role: AnchorRole
  text: string
}

const scriptedMessages: ChatMessage[] = [
  {
    id: "anchor-1-user",
    role: "user",
    text: "新しいプロンプトでターンが始まったとき、アンカリングがどう動くか見せてもらえますか？",
  },
  {
    id: "anchor-1-assistant",
    role: "assistant",
    text: "まずユーザーのプロンプトを追加し、続けてアシスタントの応答を追加します。「ユーザー」が選択されている場合、プロンプトが上端付近に固定され、その下にアシスタントの応答が表示されます。",
  },
  {
    id: "anchor-2-user",
    role: "user",
    text: "アシスタントのメッセージをアンカーにすると何が変わりますか？",
  },
  {
    id: "anchor-2-assistant",
    role: "assistant",
    text: "今度は各アシスタントの応答が、`MessageScroller` が表示し続ける対象になります。各ターンの後に読者を着地させたい瞬間が返信である場合に便利です。",
  },
  {
    id: "anchor-3-user",
    role: "user",
    text: "ロールを切り替えながらターンを追加し続けることはできますか？",
  },
  {
    id: "anchor-3-assistant",
    role: "assistant",
    text: "はい。選択したロールで次に追加されたメッセージがアンカーになるため、デモをリセットせずにユーザーとアシスタントのアンカリングを比較できます。",
  },
]

export function MessageScrollerAnchoring() {
  const [anchorRole, setAnchorRole] = React.useState<AnchorRole>("user")
  const [messages, setMessages] = React.useState<ChatMessage[]>([])
  const [messageIndex, setMessageIndex] = React.useState(0)
  const nextMessage = scriptedMessages[messageIndex]

  return (
    <div className="relative flex flex-col gap-4">
      <Card className="mx-auto h-140 w-full max-w-sm gap-0">
        <CardHeader className="border-b">
          <CardTitle>ターンのアンカリング</CardTitle>
          <CardDescription>
            上端付近に固定するロールを選択してください。
          </CardDescription>
          <CardAction>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="アンカーされたターンをリセット"
              disabled={messages.length === 0}
              onClick={() => {
                setMessages([])
                setMessageIndex(0)
              }}
            >
              <RotateCwIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="min-h-0 flex-1 overflow-hidden p-0">
          {messages.length === 0 ? (
            <Empty className="h-full">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <MessageCircleDashedIcon />
                </EmptyMedia>
                <EmptyTitle>まだアンカーされたメッセージはありません</EmptyTitle>
                <EmptyDescription>
                  最初のメッセージを送信すると、選択したロールのアンカーを確認できます。
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <MessageScrollerProvider>
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="p-(--card-spacing)">
                    {messages.map((message) => (
                      <MessageAnimated
                        key={message.id}
                        message={message}
                        scrollAnchor={message.role === anchorRole}
                        userVariant="muted"
                        assistantVariant="ghost"
                      />
                    ))}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            </MessageScrollerProvider>
          )}
        </CardContent>
        <CardFooter>
          <ToggleGroup
            type="single"
            aria-label="スクロールアンカーのロールを選択"
            value={anchorRole}
            onValueChange={(value) => {
              if (value === "user" || value === "assistant") {
                setAnchorRole(value)
                setMessages([])
                setMessageIndex(0)
              }
            }}
          >
            <ToggleGroupItem value="user" aria-label="ユーザーのメッセージをアンカー">
              ユーザー
            </ToggleGroupItem>
            <ToggleGroupItem
              value="assistant"
              aria-label="アシスタントのメッセージをアンカー"
            >
              アシスタント
            </ToggleGroupItem>
          </ToggleGroup>
          <Button
            type="button"
            size="icon"
            className="ml-auto"
            disabled={!nextMessage}
            onClick={() => {
              if (!nextMessage) {
                return
              }

              setMessages((messages) => [...messages, nextMessage])
              setMessageIndex((index) => index + 1)
            }}
          >
            <ArrowUpIcon />
            <span className="sr-only">メッセージを送信</span>
          </Button>
        </CardFooter>
      </Card>
      <div className="mx-auto max-w-xs px-0.5 text-center text-xs text-muted-foreground">
        アンカーのロールを切り替えてメッセージを送信し、ターンがどこに収まるか比較してみましょう。
      </div>
    </div>
  )
}
