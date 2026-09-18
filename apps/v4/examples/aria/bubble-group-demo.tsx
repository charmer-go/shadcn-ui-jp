import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/aria/bubble"

export function BubbleGroupDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble variant="muted">
        <BubbleContent>何が問題なのか教えてもらえる？</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent>それはこっちが聞きたいよ！</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>昨日までは動いてたのに。あなたが壊したんでしょ！</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>バグを見つけて直して。</BubbleContent>
          <BubbleReactions aria-label="リアクション: 目" align="start">
            <span>👀</span>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Bubble variant="muted">
        <BubbleContent>
          昨日のあなたと今日のあなたを比較してみようか？ちょっと恥ずかしいことになりそうだけど。
        </BubbleContent>
      </Bubble>
    </div>
  )
}
