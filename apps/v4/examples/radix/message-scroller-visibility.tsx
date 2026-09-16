"use client"

import { createChat, getMessageText } from "@/lib/ai"
import { Bubble, BubbleContent } from "@/components/ui/radix/bubble"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/radix/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/radix/hover-card"
import { Message, MessageContent } from "@/components/ui/radix/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
  useMessageScrollerVisibility,
} from "@/components/ui/radix/message-scroller"

const chat = createChat()
  .user("インシデントの引き渡しを確認して、最初に読むべきものを教えてください。", {
    id: "vis-brief",
  })
  .assistant(
    "まずサマリーと影響範囲のセクションから読んでください。この回帰はアップロードキューに影響しましたが、キューに入っていたすべてのジョブで復旧処理は完了しています。"
  )
  .user("顧客への影響はどの程度でしたか？", {
    id: "vis-impact",
  })
  .assistant(
    "影響は処理の遅延にとどまりました。\n\nレコードが失われることはなく、整合性を取るワーカーが各リトライバッチを確認済みです。サポートには2件の顧客からの問い合わせがありましたが、チェックアウトや請求のエラーはありませんでした。"
  )
  .user("未対応のアクションは何ですか？", {
    id: "vis-actions",
  })
  .assistant(
    "次のデプロイまではリトライウィンドウを有効にしたままにし、長期的な対策としてキューの深さに対するアラートを追加してください。\n\nこのアラートは、単発の短いスパイクではなく、持続的なキューの増加に対して発火するようにしてください。"
  )
  .user("フォローアップのチェックリストをください。", {
    id: "vis-checklist",
  })
  .assistant(
    "その後、キューの復旧グラフとデプロイのタイムラインを比較し、処理がいつベースラインに戻ったのかを引き渡しに明確に示してください。そうすれば、サポートとエンジニアリングがインシデントのスレッドを丸ごと読み直さずに、同じ顧客からの質問に答えやすくなります。\n\n各フォローアップ項目には短い担当者メモも追加するとよいでしょう。チェックリスト自体は小さいものですが、担当者を明確にしておくことで、リトライウィンドウの判断・アラートの調整・サポート用マクロがそれぞれ別のフォローアップの会話に分散してしまうのを防げます。\n\n次のデプロイまではリトライウィンドウを有効にしたままにし、長期的な対策としてキューの深さに対するアラートを追加してください。\n\nこのアラートは、単発の短いスパイクではなく、持続的なキューの増加に対して発火するようにしてください。"
  )

const messages = chat.get()
const userMessages = messages.filter((message) => message.role === "user")

export function MessageScrollerVisibility() {
  return (
    <MessageScrollerProvider scrollMargin={12}>
      <div className="relative flex flex-col gap-4">
        <div className="relative mx-auto w-full max-w-sm">
          <Card className="h-140 w-full gap-0">
            <CardHeader className="gap-1 border-b">
              <CardTitle>トランスクリプトのアウトライン</CardTitle>
              <CardDescription>
                現在アンカーされているターンを追跡します。
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="p-(--card-spacing)">
                    {messages.map((message) => {
                      const isUserMessage = message.role === "user"
                      const text = getMessageText(message)

                      return (
                        <MessageScrollerItem
                          key={message.id}
                          messageId={message.id}
                          scrollAnchor={isUserMessage}
                        >
                          <Message align={isUserMessage ? "end" : "start"}>
                            <MessageContent>
                              <Bubble
                                variant={isUserMessage ? "muted" : "ghost"}
                              >
                                <BubbleContent className="space-y-2">
                                  {text
                                    .split(/\n\s*\n/)
                                    .map((paragraph) => paragraph.trim())
                                    .filter(Boolean)
                                    .map((paragraph, index) => (
                                      <p
                                        key={index}
                                        className="whitespace-pre-wrap"
                                      >
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
            </CardContent>
          </Card>
          <div className="absolute top-1/2 -right-12 -translate-y-1/2">
            <TranscriptOutline />
          </div>
        </div>
        <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-muted-foreground">
          アウトラインを開くと、読み進めながらアンカーされたターン間を移動できます。
        </div>
      </div>
    </MessageScrollerProvider>
  )
}

function TranscriptOutline() {
  const { scrollToMessage } = useMessageScroller()
  const { currentAnchorId } = useMessageScrollerVisibility()

  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          aria-label="トランスクリプトのアウトラインを開く"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-md transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {userMessages.map((message) => (
            <span
              key={message.id}
              data-current={message.id === currentAnchorId}
              className="h-0.5 w-4 rounded-full bg-muted-foreground/40 data-[current=true]:bg-foreground"
            />
          ))}
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        align="center"
        side="left"
        sideOffset={-28}
        className="flex w-64 flex-col gap-1 rounded-2xl p-1"
      >
        {userMessages.map((message) => (
          <button
            key={message.id}
            type="button"
            aria-current={
              currentAnchorId === message.id ? "location" : undefined
            }
            className="flex min-h-7 items-center rounded-xl px-2 py-1.5 text-left text-sm transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground aria-current:bg-accent aria-current:text-accent-foreground"
            onClick={() =>
              scrollToMessage(message.id, {
                align: "start",
                behavior: "smooth",
              })
            }
          >
            <span className="line-clamp-1 min-w-0">
              {getTrimmedMessageText(message)}
            </span>
          </button>
        ))}
      </HoverCardContent>
    </HoverCard>
  )
}

function getTrimmedMessageText(message: (typeof userMessages)[number]) {
  const text = getMessageText(message)

  return text.length > 42 ? `${text.slice(0, 39)}...` : text
}
