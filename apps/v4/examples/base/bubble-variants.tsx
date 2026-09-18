import { Markdown } from "@/components/markdown"
import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/components/ui/base/bubble"

export function BubbleVariantsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-12 py-12">
      <Bubble>
        <BubbleContent>これはデフォルトのプライマリバブルです。</BubbleContent>
      </Bubble>
      <Bubble variant="secondary" align="end">
        <BubbleContent>これはセカンダリバリアントです。</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          これはミュートバリアントです。チャットバブルに控えめな色を使用しています。
        </BubbleContent>
        <BubbleReactions role="img" aria-label="リアクション: いいね">
          <span>👍</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="tinted" align="end">
        <BubbleContent>
          これはティントバリアントです。プライマリカラーから派生した、より柔らかい色合いです。
        </BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>アウトラインバリアントも使用できます。</BubbleContent>
      </Bubble>
      <Bubble variant="destructive" align="end">
        <BubbleContent>リアクション付きのデストラクティブバリアントもあります。</BubbleContent>
        <BubbleReactions role="img" aria-label="リアクション: 火">
          <span>🔥</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="ghost">
        <BubbleContent>
          <Markdown>{`ゴーストバブルは、アシスタントのテキストや**マークダウン**など、枠で囲むべきではないコンテンツに使えます。

枠がなく、コンテナの幅いっぱいに表示したいアシスタントのメッセージに最適です。\`コード\`もレンダリングできます。

ゴーストバブルは全幅表示で、コンテナの幅をいっぱいに使うことができます。
`}</Markdown>
        </BubbleContent>
      </Bubble>
    </div>
  )
}
