"use client"

import * as React from "react"
import { useChat } from "@ai-sdk/react"
import {
  ArrowUpIcon,
  MessageCircleDashedIcon,
  RotateCwIcon,
} from "lucide-react"

import { createChat } from "@/lib/ai"
import {
  MESSAGE_ANIMATIONS,
  type MessageAnimationId,
} from "@/lib/message-animations"
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/radix/select"

const chat = createChat()
  .user("アンカリングを崩さずに、ユーザーのメッセージをiMessageみたいにポップインさせることはできますか？")
  .sleep(1000)
  .assistant(
    "はい。ユーザーの行を transform と opacity でアニメーションさせつつ、その下ではアシスタントの応答を通常どおりストリーミングさせます。\n\nこうすることで行の高さ計測は予測可能なまま保たれ、送信直後のバブルにはより手触りのある登場アニメーションを与えられます。"
  )
  .user("どうすればもっとiMessageっぽい見た目のアニメーションになりますか？")
  .sleep(1000)
  .assistant(
    "末尾側からの素早いスプリングを使いましょう。わずかな拡大、少し上への移動、そしてレイアウトアニメーションはなしです。\n\nバブルは手触りのある動きになりますが、計測される行の高さは予測可能なままなので、アンカリングや自動スクロールがレイアウトの変化と競合する必要がありません。"
  )
  .user("同じスレッドでテストしながらプリセットを切り替えることはできますか？")
  .sleep(1000)
  .assistant(
    "はい。会話はそのままの状態でプリセットを変更し、次のメッセージを送信すれば、同じ文脈の中で新しい登場アニメーションを比較できます。\n\nこれにより、控えめなフェード、キレのあるポップ、よりドラマチックな3Dチルトの違いを、毎回シナリオを組み直さずに判断しやすくなります。"
  )

const initialMessages = chat.get(0)
const transport = chat.transport({ delayMs: 15 })

export function MessageScrollerAnimation() {
  const { messages, sendMessage, setMessages, status } = useChat({
    messages: initialMessages,
    transport,
  })
  const [presetId, setPresetId] = React.useState<MessageAnimationId>("fade")
  const nextMessage = chat.next(messages)
  const isBusy = status === "submitted" || status === "streaming"
  const preset = MESSAGE_ANIMATIONS[presetId as MessageAnimationId]

  return (
    <div className="relative flex flex-col gap-4">
      <Card className="mx-auto h-140 w-full max-w-sm gap-0">
        <CardHeader className="border-b">
          <CardTitle>アニメーション</CardTitle>
          <CardDescription>
            会話に追加されたときにユーザーのメッセージをどのようにアニメーションさせるか選択してください。
          </CardDescription>
          <CardAction className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="アニメーションのメッセージをリセット"
              disabled={messages.length === 0 || isBusy}
              onClick={() => setMessages(initialMessages)}
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
                <EmptyTitle>まだメッセージはありません</EmptyTitle>
                <EmptyDescription>
                  下のボタンをクリックして最初のメッセージを送信してください。
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <MessageScrollerProvider>
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent
                    aria-busy={isBusy}
                    className="p-(--card-spacing)"
                  >
                    {messages.map((message) => (
                      <MessageAnimated
                        key={message.id}
                        message={message}
                        animationPreset={preset}
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
        <CardFooter className="border-t">
          <Select
            value={presetId}
            onValueChange={(value) => {
              setPresetId(value as MessageAnimationId)
            }}
          >
            <SelectTrigger aria-label="アニメーションプリセット">
              <SelectValue>{preset.name}</SelectValue>
            </SelectTrigger>
            <SelectContent align="start" side="top" position="popper">
              <SelectGroup>
                {Object.values(MESSAGE_ANIMATIONS).map((animation) => (
                  <SelectItem key={animation.id} value={animation.id}>
                    {animation.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            type="button"
            size="icon"
            className="ml-auto"
            disabled={!nextMessage || isBusy}
            onClick={() => {
              if (!nextMessage || isBusy) {
                return
              }

              void sendMessage(nextMessage)
            }}
          >
            <ArrowUpIcon />
            <span className="sr-only">メッセージを送信</span>
          </Button>
        </CardFooter>
      </Card>
      <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-muted-foreground">
        アニメーションを選択して送信をクリックすると、その動作を確認できます。
      </div>
    </div>
  )
}
