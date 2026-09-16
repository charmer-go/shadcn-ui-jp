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
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/aria/empty"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/aria/message-scroller"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/aria/select"

const chat = createChat()
  .user("ユーザーのメッセージをiMessageのようにポップインさせつつ、アンカリングを崩さないようにできますか？")
  .sleep(1000)
  .assistant(
    "できます。ユーザーの行はtransformとopacityでアニメーションさせ、アシスタントの返信はその下で通常どおりストリーミングさせてください。\n\nこうすることで行の計測を予測可能に保ちながら、送信直後のバブルにより手触りのある登場を与えられます。"
  )
  .user("iMessageらしさを出すには何が重要ですか？")
  .sleep(1000)
  .assistant(
    "末尾から始まる素早いスプリングを使うことです。少しの拡大縮小、わずかな上方向の移動、そしてレイアウトアニメーションなしという組み合わせです。\n\nバブルは手触りを感じさせつつ、計測される行は予測可能なままなので、アンカリングと自動スクロールが変化するレイアウトと競合せずに済みます。"
  )
  .user("同じスレッドをテストしながらプリセットを切り替えられますか？")
  .sleep(1000)
  .assistant(
    "できます。プリセットを変更する間も会話はそのままにしておき、次のメッセージを送信すれば同じ文脈で新しい登場演出を比較できます。\n\nそうすれば、控えめなフェード、キレのあるポップ、よりドラマチックな3D傾斜の違いを、シナリオを毎回組み直さずに判断しやすくなります。"
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
            会話に追加されたときのユーザーメッセージのアニメーションを選択してください。
          </CardDescription>
          <CardAction className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="アニメーションのメッセージをリセット"
              isDisabled={messages.length === 0 || isBusy}
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
            onChange={(value) => {
              setPresetId(value as MessageAnimationId)
            }}
          >
            <SelectTrigger aria-label="アニメーションプリセット">
              <SelectValue>{preset.name}</SelectValue>
            </SelectTrigger>
            <SelectContent placement="top start">
              <SelectGroup>
                {Object.values(MESSAGE_ANIMATIONS).map((animation) => (
                  <SelectItem key={animation.id} id={animation.id}>
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
            isDisabled={!nextMessage || isBusy}
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
        アニメーションを選択して送信をクリックすると、実際の動きを確認できます。
      </div>
    </div>
  )
}
