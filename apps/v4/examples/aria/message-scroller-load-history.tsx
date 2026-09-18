"use client"

import * as React from "react"
import { RotateCwIcon } from "lucide-react"
import { toast } from "sonner"

import { createChat, getMessageText } from "@/lib/ai"
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
import { Message, MessageContent } from "@/components/ui/aria/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/aria/message-scroller"
import { Tooltip, TooltipTrigger } from "@/components/ui/aria/tooltip"

const chat = createChat()
  .user("インシデントチャンネルの内容を要約してもらえますか？")
  .assistant(
    "最初のアラートは、エクスポートジョブの遅延でした。UTC 09:42頃から滞留が始まり、リトライキューがしきい値を超えた時点で警告が発火しました。\n\n顧客向けのチェックアウト経路への影響はありませんでしたが、大規模なワークスペースのエクスポートは約12分遅れて実行されていました。"
  )
  .user("チェックアウトに影響はありましたか？")
  .assistant(
    "チェックアウトのエラーは報告されていません。決済の承認、注文の作成、確認メールはいずれも通常のレイテンシ範囲内で収まっていました。\n\n上昇していた指標はエクスポートキューの深さのみで、これはチェックアウトではなく分析データのダウンロードに関連するものです。"
  )
  .user("直前のデプロイで何が変更されましたか？")
  .assistant(
    "変更されたのはエクスポートキューのワーカーだけです。このデプロイで大きなCSVジョブが共有のリトライポリシーに移されたため、失敗した試行がワーカースロットを以前より長く占有するようになりました。\n\nこのアプリのデプロイには、チェックアウト・価格設定・請求APIの変更は含まれていません。"
  )
  .user("ロールバックは必要ですか？")
  .assistant(
    "今のところは不要です。リトライの並列数を減らした後、キューの深さは回復しつつあり、最も古い保留中のジョブも5分未満になっています。\n\nキューが再び増加し始めた場合に備えてロールバックは準備しておいてください。ただ、現在の傾向は回復に向かっています。"
  )
  .user("顧客に見える問題がないか監視を続けてください。")
  .assistant(
    "あと15分、キューとサポートのタグを監視します。エクスポートの失敗、ダウンロードリクエストの遅延、レポートが見つからないと言及しているサポートスレッドを追っています。\n\n次のバッチウィンドウまでこれらが落ち着いていれば、社内的な性能劣化としてクローズできます。"
  )

const history = chat.get()
const INITIAL_VISIBLE_COUNT = 5

export function MessageScrollerLoadHistory() {
  const [demoKey, setDemoKey] = React.useState(0)
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_VISIBLE_COUNT)
  const visibleMessages = history.slice(-visibleCount)
  const canLoadHistory = visibleCount < history.length

  return (
    <MessageScrollerProvider>
      <div className="relative flex flex-col gap-4">
        <Card className="mx-auto h-140 w-full max-w-sm gap-0">
          <CardHeader className="gap-1 border-b">
            <CardTitle>履歴の読み込み</CardTitle>
            <CardDescription>
              先頭に追加されたメッセージでも現在の表示位置は保持されます。
            </CardDescription>
            <CardAction>
              <TooltipTrigger>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="読み込んだメッセージをリセット"
                  isDisabled={visibleCount === INITIAL_VISIBLE_COUNT}
                  onPress={() => {
                    setVisibleCount(INITIAL_VISIBLE_COUNT)
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
          <CardContent className="flex-1 overflow-hidden p-0">
            <MessageScroller key={demoKey}>
              <MessageScrollerViewport>
                <MessageScrollerContent className="p-(--card-spacing)">
                  {visibleMessages.map((message) => {
                    const isUserMessage = message.role === "user"

                    return (
                      <MessageScrollerItem
                        key={message.id}
                        messageId={message.id}
                      >
                        <Message align={isUserMessage ? "end" : "start"}>
                          <MessageContent>
                            <Bubble variant={isUserMessage ? "muted" : "ghost"}>
                              <BubbleContent className="space-y-2">
                                {getMessageText(message)
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
                  <MessageScrollerItem scrollAnchor={false}>
                    <Marker variant="separator">
                      <MarkerContent>会話の終わり</MarkerContent>
                    </Marker>
                  </MessageScrollerItem>
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2 border-t">
            <Button
              type="button"
              isDisabled={!canLoadHistory}
              onPress={() => {
                setVisibleCount(history.length)
                toast("履歴を読み込みました", {
                  description: "上にスクロールすると以前のメッセージを確認できます。",
                })
              }}
              className="w-full"
              variant="secondary"
            >
              {canLoadHistory ? "履歴を読み込む" : "履歴を読み込み済み"}
            </Button>
            <p className="text-xs text-muted-foreground">
              現在の表示位置を保ったまま、以前のメッセージを復元します。
            </p>
          </CardFooter>
        </Card>
        <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-muted-foreground">
          「履歴を読み込む」をクリックすると、会話全体が読み込まれます
        </div>
      </div>
    </MessageScrollerProvider>
  )
}
