"use client"

import { toast } from "sonner"

import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/components/ui/aria/bubble"
import { Button } from "@/components/ui/aria/button"

export function BubbleReactionsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-12 py-12">
      <Bubble variant="muted" align="end">
        <BubbleContent>
          テストなんて要らないよ、自分のコードが動くのは分かってるから。
        </BubbleContent>
        <BubbleReactions
          align="start"
          role="img"
          aria-label="リアクション: いいね、驚き"
        >
          <span>👍</span>
          <span>😮</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          強気だね。分かった、テストを追加するよ。終わったら知らせるね。
        </BubbleContent>
        <BubbleReactions
          role="img"
          aria-label="リアクション: 目、ロケット、他2件"
        >
          <span>👀</span>
          <span>🚀</span>
          <span>+2</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="default" align="end">
        <BubbleContent>
          一発でテストが通ったよ。全142件。いい感じ！
        </BubbleContent>
        <BubbleReactions
          side="top"
          align="start"
          role="img"
          aria-label="リアクション: パーティー、拍手"
        >
          <span>🎉</span>
          <span>👏</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>本当にこのコマンドを実行していい？</BubbleContent>
        <BubbleReactions>
          <Button
            variant="ghost"
            size="xs"
            onClick={() => toast.success("「はい」がクリックされました。コマンドを実行中...")}
          >
            はい、実行して
          </Button>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
