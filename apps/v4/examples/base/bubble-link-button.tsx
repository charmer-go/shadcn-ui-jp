"use client"

import { toast } from "sonner"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
} from "@/components/ui/base/bubble"

export function BubbleLinkButtonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble variant="muted">
        <BubbleContent>今日はどのようなご用件ですか？</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble variant="tinted" align="end">
          <BubbleContent asChild>
            <button onClick={() => toast("「パスワードを忘れた」をクリックしました")}>
              パスワードを忘れました
            </button>
          </BubbleContent>
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent asChild>
            <button onClick={() => toast("「サブスクリプションのヘルプ」をクリックしました")}>
              サブスクリプションについて助けが必要です
            </button>
          </BubbleContent>
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent asChild>
            <button
              onClick={() =>
                toast("「その他」をクリックしました。担当者につなぎます。")
              }
            >
              その他の用件。担当者と話したいです。
            </button>
          </BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>
  )
}
