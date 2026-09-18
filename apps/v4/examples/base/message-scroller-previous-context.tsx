"use client"

import * as React from "react"
import { useChat } from "@ai-sdk/react"
import {
  ArrowUpIcon,
  GlobeIcon,
  ImageIcon,
  PaperclipIcon,
  PlusIcon,
  RotateCwIcon,
  TelescopeIcon,
} from "lucide-react"

import { createChat, getMessageText } from "@/lib/ai"
import { MessageAnimated } from "@/components/message-animated"
import { Button } from "@/components/ui/base/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/base/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/base/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/base/input-group"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/base/message-scroller"
import { Slider } from "@/components/ui/base/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/base/tooltip"

const DEFAULT_PEEK = 64

const chat = createChat()
  .user(
    "アプリにチャットを組み込んでいるのですが、AIが返信をストリーミングするたびに会話全体が飛び回ってしまい、スクロールの挙動に困っています"
  )
  .sleep(1000)
  .assistant(
    "ストリーミング時によくあるスクロール問題なので、メッセージ一覧を `MessageScroller` で囲み、`autoScroll` を有効にすると、トークンが届くたび表示領域が下端に固定され、常に最新のテキストを確認できます\n\n閲覧者が下端にいるときだけ自動スクロールするため、過去の内容を読むために上へスクロールすると位置を保持し、ユーザーの操作を邪魔せず滑らかなストリーミングを実現できます"
  )
  .user(
    "なるほど、でも新しいメッセージを送ると会話全体が先頭から再読み込みされたように大きく動いてしまいます"
  )
  .sleep(1000)
  .assistant(
    "`MessageScrollerItem` のターンアンカーを使うと、ドキュメントの下端へ無条件に移動する代わりに、上部付近で固定したいターンに `scrollAnchor` を設定できます\n\nアンカーの上には直前のやり取りが少し見えるため文脈も失われず、通常のオーバーフローコンテナで起きる不自然なジャンプなしに返信を表示できます"
  )
  .user(
    "過去の回答を読み直すために上へスクロールした場合、下端へ強制的に戻らないようにできますか？"
  )
  .sleep(1000)
  .assistant(
    "上へスクロールすると自動スクロールが解除されるため、下で新しいトークンが届き続けても読んでいる位置はそのままです\n\n未読のコンテンツがあると表示領域の下部に `MessageScrollerButton` が表示され、1回タップすれば最新のメッセージへ移動して自動スクロールを再開でき、SlackやiMessageと同じ考え方で追いついているときは静かに、必要なときだけ案内します"
  )
  .user("最後に、支援技術でも動作しますか？")
  .sleep(1000)
  .assistant(
    '`MessageScrollerContent` はデフォルトで `role="log"` と `aria-relevant="additions"` を設定するため、スクリーンリーダーは新しいメッセージをストリーミング中に読み上げます\n\nスクロールボタンは実際の `<button>` 要素で、スクリーンリーダー専用のラベルを備え、すでに下端にいる場合はタブ移動の対象から外れるため、意図しないフォーカス停止も起きません'
  )
const initialMessages = chat.get(2)
const transport = chat.transport({ delayMs: 35 })

export function MessageScrollerPreviousContext() {
  const [demoKey, setDemoKey] = React.useState(0)
  const [peek, setPeek] = React.useState(DEFAULT_PEEK)
  const { messages, sendMessage, setMessages, status } = useChat({
    messages: initialMessages,
    transport,
  })
  const nextMessage = chat.next(messages)
  const isBusy = status === "submitted" || status === "streaming"

  return (
    <MessageScrollerProvider
      key={demoKey}
      scrollMargin={24}
      scrollPreviousItemPeek={peek}
    >
      <div className="relative flex flex-col gap-4">
        <Card className="mx-auto h-140 w-full max-w-sm gap-0">
          <CardHeader className="gap-1 border-b">
            <CardTitle>文脈を見えるままに保つ</CardTitle>
            <CardDescription>
              新しいターンでも、直前の返信の一部が見えたままになります。
            </CardDescription>
            <CardAction>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="文脈の例をリセット"
                      disabled={isBusy}
                      onClick={() => {
                        setMessages(initialMessages)
                        setPeek(DEFAULT_PEEK)
                        setDemoKey((key) => key + 1)
                      }}
                    />
                  }
                >
                  <RotateCwIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p>リセット</p>
                </TooltipContent>
              </Tooltip>
            </CardAction>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-0">
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
                      scrollAnchor={message.role === "user"}
                    />
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (!nextMessage || isBusy) {
                  return
                }
                void sendMessage(nextMessage)
              }}
              className="w-full"
            >
              <InputGroup>
                <div className="h-14 w-full px-3 py-2.5">
                  <span
                    className="line-clamp-2 opacity-60 data-[status=ready]:opacity-100"
                    data-status={status}
                  >
                    {nextMessage ? (
                      getMessageText(nextMessage)
                    ) : (
                      <span className="text-muted-foreground">
                        送信待ちのメッセージはありません。文脈をリセットしてください。
                      </span>
                    )}
                  </span>
                </div>
                <InputGroupAddon align="block-end" className="pt-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <InputGroupButton
                          aria-label="ファイルを追加"
                          type="button"
                          size="icon-sm"
                          variant="outline"
                        />
                      }
                    >
                      <PlusIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      side="top"
                      className="w-44"
                    >
                      <DropdownMenuItem>
                        <PaperclipIcon />
                        写真とファイルを追加
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <ImageIcon />
                        画像を作成
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <TelescopeIcon />
                        詳細リサーチ
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <GlobeIcon />
                        Web検索
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div className="flex w-28 items-center gap-2">
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {peek}px
                    </span>
                    <Slider
                      aria-label="直前の文脈のピーク"
                      value={[peek]}
                      min={64}
                      max={128}
                      step={1}
                      disabled={isBusy}
                      onValueChange={(value) => {
                        const nextValue = Array.isArray(value)
                          ? value[0]
                          : value

                        setPeek(nextValue ?? DEFAULT_PEEK)
                      }}
                    />
                  </div>
                  <InputGroupButton
                    type="submit"
                    variant="default"
                    size="icon-sm"
                    disabled={!nextMessage || isBusy}
                    className="ml-auto"
                  >
                    <ArrowUpIcon />
                    <span className="sr-only">送信</span>
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </CardFooter>
        </Card>
        <div className="px-0.5 text-center text-xs text-muted-foreground">
          スライダーを調整して送信してください。直前のメッセージのピーク表示を確認できます
        </div>
      </div>
    </MessageScrollerProvider>
  )
}
