import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/aria/bubble"

export function BubbleDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble align="end">
        <BubbleContent>やあ！調子はどう？</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>やあ！チャットバブルを見てみる？</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>
            メッセージをグループ化したり、位置を切り替えたりして、スレッド全体を見やすく保てるよ。
          </BubbleContent>
          <BubbleReactions role="img" aria-label="リアクション: いいね">
            <span>👍</span>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Bubble align="end">
        <BubbleContent>いいね。とっておきのデモを見せて。</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          そう、あなたは今、自分自身をデモしているデモを読んでいるんだ。かなりメタだね。ブランドにもぴったりだよ。
        </BubbleContent>
        <BubbleReactions
          role="img"
          aria-label="リアクション: いいね、火、目、他2件"
        >
          <span>👍</span>
          <span>🔥</span>
          <span>👀</span>
          <span>+2</span>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
