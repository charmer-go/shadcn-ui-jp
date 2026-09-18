"use client"

import * as React from "react"

import { createChat, getMessageText } from "@/lib/ai"
import { Bubble, BubbleContent } from "@/components/ui/aria/bubble"
import { Button } from "@/components/ui/aria/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/aria/card"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"
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

const chat = createChat()
  .user(
    "ワークスペース作成後にアクティベーションが落ち込んでいます。原因になっていそうなステップを特定するのを手伝ってもらえますか？",
    { id: "command-activation" }
  )
  .assistant(
    "最も急激な低下は、ワークスペースの作成から最初のチームメイトを招待するまでの間で起きています。\n\nワークスペースの作成自体は健全ですが、招待のステップでユーザーが立ち止まっています。これは、ユーザーがワークスペースに十分な自信を持つ前に、プロダクトがコラボレーションを求めていることを示唆しています。"
  )
  .user("オンボーディングフローを変更する前に、何を比較すべきですか？", {
    id: "command-compare",
  })
  .assistant(
    "3つのコホートを比較してください。\n\n1. チームメイトを招待する前にテンプレートを選ぶユーザー。\n2. 空のワークスペースから始めるユーザー。\n3. 招待をスキップし、24時間以内に戻ってくるユーザー。\n\nテンプレートを使うユーザーの方が早く招待しているなら、対策はより強い招待の呼びかけではなく、初回利用時のガイダンス改善である可能性が高いです。"
  )
  .user("それを実験に落とし込めますか？", {
    id: "command-experiment",
  })
  .assistant(
    "できます。ワークスペース作成後に短いチェックリストを表示するバリアントを作成してください。\n\n- テンプレートを選ぶ。\n- プロジェクトの詳細を1つ追加する。\n- ワークスペースに文脈ができたらチームメイトを招待する。\n\n最初の招待完了率、24時間以内の復帰率、そしてチームが2つ目のプロジェクトを作成するかどうかを計測してください。"
  )
  .user("招待の呼びかけを遅らせるリスクは何ですか？", {
    id: "command-risk",
  })
  .assistant(
    "主なリスクは、すでに誰を招待したいか分かっているアカウントのチーム作成を減らしてしまうことです。\n\nその経路を守るため、招待のアクションはヘッダーに表示したままにし、主要な空状態のガイダンスだけを変更してください。そうすれば、確信のあるチームには直接的な経路を残しつつ、まだ迷っているユーザーを招待ステップへ早すぎるタイミングで誘導せずに済みます。"
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
          コントロールを使って、会話内の任意のメッセージへ移動できます。
        </div>
      </div>
    </MessageScrollerProvider>
  )
}

function CommandMenu() {
  const { scrollToMessage } = useMessageScroller()

  return (
    <DropdownMenuTrigger>
      <Button type="button" variant="secondary">
        移動先...
      </Button>
      <DropdownMenu placement="bottom end" className="w-64">
        <DropdownMenuLabel>会話</DropdownMenuLabel>
        {userMessages.map((message) => (
          <DropdownMenuItem
            key={message.id}
            onAction={() =>
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
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}

function getTrimmedMessageText(message: (typeof userMessages)[number]) {
  const text = getMessageText(message)

  return text.length > 42 ? `${text.slice(0, 39)}...` : text
}
