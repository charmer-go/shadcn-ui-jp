"use client"

import * as React from "react"

import { createChat, getMessageText } from "@/lib/ai"
import { Bubble, BubbleContent } from "@/components/ui/radix/bubble"
import { Button } from "@/components/ui/radix/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/radix/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/radix/dropdown-menu"
import { Message, MessageContent } from "@/components/ui/radix/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
} from "@/components/ui/radix/message-scroller"

const chat = createChat()
  .user(
    "ワークスペース作成後にアクティベーションが落ち込んでいるようです。どのステップが原因か一緒に調べてもらえますか？",
    { id: "command-activation" }
  )
  .assistant(
    "最も大きく落ち込んでいるのは、ワークスペースの作成から最初のチームメイトを招待するまでの間です。\n\nワークスペース作成自体は依然として健全ですが、招待のステップでユーザーが手を止めています。これは、ユーザーがワークスペースに十分な自信を持つ前に、プロダクトがコラボレーションを求めてしまっていることを示唆しています。"
  )
  .user("オンボーディングフローを変更する前に、何を比較すればいいですか？", {
    id: "command-compare",
  })
  .assistant(
    "3つのコホートを比較してください。\n\n1. チームメイトを招待する前にテンプレートを選ぶユーザー\n2. 空のワークスペースから始めるユーザー\n3. 招待をスキップして24時間以内に戻ってくるユーザー\n\nテンプレートを使ったユーザーの方が招待が早いなら、対策としてはより強い招待プロンプトよりも、初回利用時のガイダンスを改善する方が効果的でしょう。"
  )
  .user("それを実験にできますか？", {
    id: "command-experiment",
  })
  .assistant(
    "はい。ワークスペース作成後に短いチェックリストを表示するバリアントを作成します。\n\n- テンプレートを選ぶ\n- プロジェクトの詳細を1つ追加する\n- ワークスペースに文脈ができたらチームメイトを招待する\n\n最初の招待完了率、24時間以内の復帰率、そしてチームが2つ目のプロジェクトを作成するかどうかを測定してください。"
  )
  .user("招待プロンプトを遅らせるとどんなリスクがありますか？", {
    id: "command-risk",
  })
  .assistant(
    "主なリスクは、すでに誰を招待したいか分かっているアカウントのチーム作成を減らしてしまうことです。\n\nその経路を守るために、招待アクションはヘッダーに表示し続け、変更するのはメインの空状態のガイダンスだけにしてください。そうすれば、確信を持ったチームには直接的な経路を提供しつつ、まだ迷っているユーザーを早すぎる段階で招待ステップに押し込まずに済みます。"
  )

const messages = chat.get()
const userMessages = messages.filter((message) => message.role === "user")

export function MessageScrollerCommands() {
  return (
    <MessageScrollerProvider defaultScrollPosition="end">
      <div className="relative flex flex-col gap-4">
        <Card className="mx-auto h-140 w-full max-w-sm gap-0">
          <CardHeader className="gap-1 border-b">
            <CardTitle>コマンド</CardTitle>
            <CardDescription>
              外部からトランスクリプトを操作します。
            </CardDescription>
            <CardAction>
              <CommandMenu />
            </CardAction>
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
                            <Bubble variant={isUserMessage ? "muted" : "ghost"}>
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
        <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-muted-foreground">
          コントロールを使って、会話内の任意のメッセージへジャンプできます。
        </div>
      </div>
    </MessageScrollerProvider>
  )
}

function CommandMenu() {
  const { scrollToMessage } = useMessageScroller()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="secondary">
          移動先...
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="bottom" className="w-64">
        <DropdownMenuLabel>会話</DropdownMenuLabel>
        {userMessages.map((message) => (
          <DropdownMenuItem
            key={message.id}
            onSelect={() =>
              scrollToMessage(message.id, {
                align: "start",
                behavior: "smooth",
              })
            }
          >
            <span className="line-clamp-1 min-w-0">
              {getTrimmedMessageText(message)}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function getTrimmedMessageText(message: (typeof userMessages)[number]) {
  const text = getMessageText(message)

  return text.length > 42 ? `${text.slice(0, 39)}...` : text
}
