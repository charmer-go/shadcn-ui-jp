import { Markdown } from "@/components/markdown"
import { Bubble, BubbleContent } from "@/components/ui/radix/bubble"

export function BubbleMarkdownDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble align="end" variant="muted">
        <BubbleContent>
          <Markdown>{`こんにちは！本当に**考えて**いるの？`}</Markdown>
        </BubbleContent>
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
