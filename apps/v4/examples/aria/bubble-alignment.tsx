import { Bubble, BubbleContent } from "@/components/ui/aria/bubble"

export function BubbleAlignmentDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble variant="muted">
        <BubbleContent>
          このバブルは左揃えです。これがデフォルトの配置です。
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          このバブルは右揃えです。ユーザーのメッセージに使用します。
        </BubbleContent>
      </Bubble>
    </div>
  )
}
