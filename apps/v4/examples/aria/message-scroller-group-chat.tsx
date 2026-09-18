"use client"

import * as React from "react"
import { RotateCwIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/components/ui/aria/bubble"
import { Button } from "@/components/ui/aria/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/aria/card"
import { Marker, MarkerContent } from "@/components/ui/aria/marker"
import {
  Message,
  MessageContent,
  MessageHeader,
} from "@/components/ui/aria/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/aria/message-scroller"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

const currentUser = "Grace"

const initialItems = [
  {
    id: "group-1",
    type: "message",
    sender: "Grace",
    role: "participant",
    text: "@mary、アストロファージの数値が金星のエネルギー出力とずっと一致するの。計算を確認してもらえる？",
  },
  {
    id: "group-2",
    type: "message",
    sender: "Mary (Agent)",
    role: "assistant",
    text: "うん、確認した。このカーブは、恒星のエネルギーを取り込みながら二酸化炭素の近くで増殖する微生物を示している。@rocky が同意すれば、これが探していた手がかりだ。",
  },
  {
    id: "group-3",
    type: "message",
    sender: "Grace",
    role: "participant",
    text: "@rocky、いる？",
    scrollAnchor: true,
  },
] satisfies GroupChatItem[]

const rockyMarker = {
  id: "group-4",
  type: "event",
  text: "Rockyがチャットに参加しました",
  scrollAnchor: true,
} satisfies GroupChatItem

const rockyMessage = {
  id: "group-5",
  type: "message",
  sender: "Rocky",
  role: "participant",
  text: "すごい。アストロファージ、光食べる。熱作る。二酸化炭素になる。ロッキー、燃料モデルある。グレース、賢い。",
} satisfies GroupChatItem

type GroupChatItem =
  | {
      id: string
      type: "event"
      text: string
      scrollAnchor?: boolean
    }
  | {
      id: string
      type: "message"
      sender: string
      role: "assistant" | "participant"
      text: string
      scrollAnchor?: boolean
    }

export function MessageScrollerGroupChat() {
  const [demoKey, setDemoKey] = React.useState(0)
  const [rockyTurn, setRockyTurn] = React.useState<
    "idle" | "marker" | "message"
  >("idle")
  const items =
    rockyTurn === "message"
      ? [...initialItems, rockyMarker, rockyMessage]
      : rockyTurn === "marker"
        ? [...initialItems, rockyMarker]
        : initialItems
  const buttonLabel =
    rockyTurn === "idle" ? "Rockyを追加" : "Rockyとしてメッセージを送信"
  const isComplete = rockyTurn === "message"

  return (
    <MessageScrollerProvider>
      <div className="relative flex flex-col gap-4">
        <Card className="mx-auto h-140 w-full max-w-sm gap-0">
          <CardHeader className="gap-1 border-b">
            <CardTitle>グループチャット</CardTitle>
            <CardDescription>
              複数の参加者とアシスタントによるグループチャットです。Markerはターンとしてマークされています。
            </CardDescription>
            <CardAction>
              <TooltipTrigger>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="会話をリセット"
                  isDisabled={rockyTurn === "idle"}
                  onPress={() => {
                    setRockyTurn("idle")
                    setDemoKey((key) => key + 1)
                  }}
                >
                  <RotateCwIcon />
                </Button>
                <Tooltip>
                  <p>リセット</p>
                </Tooltip>
              </TooltipTrigger>
            </CardAction>
          </CardHeader>
          <CardContent className="min-h-0 flex-1 p-0">
            <MessageScrollerProvider>
              <MessageScroller key={demoKey}>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="p-(--card-spacing)">
                    {items.map((item) =>
                      item.type === "message" ? (
                        <GroupChatMessage key={item.id} item={item} />
                      ) : (
                        <GroupChatMarker
                          key={item.id}
                          item={item}
                          scrollAnchor={item.scrollAnchor}
                        />
                      )
                    )}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            </MessageScrollerProvider>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2 border-t">
            <Button
              type="button"
              isDisabled={isComplete}
              onPress={() =>
                setRockyTurn((turn) => (turn === "idle" ? "marker" : "message"))
              }
              className="w-full"
              variant="secondary"
            >
              {buttonLabel}
            </Button>
            <p className="text-xs text-muted-foreground">
              {rockyTurn === "idle"
                ? "マーカーを作成し、それをアンカーにします"
                : "次にRockyの返信を会話に送信します"}
            </p>
          </CardFooter>
        </Card>
        <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-muted-foreground">
          ユーザーが参加すると、マーカーが作成されます。マーカーの scrollAnchor が次のターンとしてマークします
        </div>
      </div>
    </MessageScrollerProvider>
  )
}

function GroupChatMessage({
  item,
}: {
  item: Extract<GroupChatItem, { type: "message" }>
}) {
  const isCurrentUser = item.sender === currentUser
  const variant = isCurrentUser
    ? "muted"
    : item.role === "assistant"
      ? "ghost"
      : "tinted"

  return (
    <MessageScrollerItem messageId={item.id} scrollAnchor={item.scrollAnchor}>
      <Message align={isCurrentUser ? "end" : "start"}>
        <MessageContent>
          {!isCurrentUser && <MessageHeader>{item.sender}</MessageHeader>}
          <Bubble variant={variant}>
            <BubbleContent>{item.text}</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  )
}

function GroupChatMarker({
  item,
  scrollAnchor = false,
}: {
  item: Extract<GroupChatItem, { type: "event" }>
  scrollAnchor?: boolean
}) {
  return (
    <MessageScrollerItem scrollAnchor={scrollAnchor}>
      <Marker variant="separator">
        <MarkerContent>{item.text}</MarkerContent>
      </Marker>
    </MessageScrollerItem>
  )
}
