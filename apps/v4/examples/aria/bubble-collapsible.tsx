"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/components/ui/aria/bubble"
import { Button } from "@/components/ui/aria/button"
import { Collapsible } from "@/components/ui/aria/collapsible"

const text = `アクセシビリティレビューの結果、ダークモードで視覚的に分かりづらいフォーカス状態が2つ見つかりました。

ダイアログ、メニュー、ドロワーの各パスを確認しました。いずれもレイヤー化された表面の中でフォーカス可能なコントロールを描画しているためです。

ダイアログとドロワーは問題ありません。メニューについては、ポインターが関与しない場合でもキーボードフォーカスが見えるように、ホバーとフォーカスのトークンを分ける必要があります。

また、他のテーマが後で独自のフォーカス表現を選べるように、この変更はプリミティブ側ではなくスタイルファイル側に置いておくことをお勧めします。`

const previewLength = 180

export function BubbleCollapsible() {
  const [open, setOpen] = React.useState(false)
  const isLong = text.length > previewLength
  const preview = `${text.slice(0, previewLength)}...`

  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble variant="muted">
        <BubbleContent>今日はどのようなご用件ですか？</BubbleContent>
      </Bubble>

      <Bubble variant="muted" align="end">
        <BubbleContent className="whitespace-pre-line">
          <Collapsible isExpanded={open} onExpandedChange={setOpen}>
            <div>{open || !isLong ? text : preview}</div>
            {isLong ? (
              <Button
                slot="trigger"
                variant="link"
                className="gap-1 p-0 text-muted-foreground"
              >
                {open ? "折りたたむ" : "もっと見る"}
                <ChevronDownIcon
                  data-icon="inline-end"
                  className="group-data-panel-open/button:rotate-180"
                />
              </Button>
            ) : null}
          </Collapsible>
        </BubbleContent>
      </Bubble>
    </div>
  )
}
