"use client"

import { toast } from "sonner"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
} from "@/components/ui/aria/bubble"

export function BubbleLinkButtonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Bubble variant="muted">
        <BubbleContent>今日はどのようなご用件ですか？</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={(props) => (
              <button
                onClick={() => toast("「パスワードを忘れた」をクリックしました")}
                {...props}
              />
            )}
          >
            パスワードを忘れました
          </BubbleContent>
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={(props) => (
              <button
                onClick={() => toast("「サブスクリプションのヘルプ」をクリックしました")}
                {...props}
              />
            )}
          >
            サブスクリプションについて助けが必要です
          </BubbleContent>
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent
            render={(props) => (
              <button
                onClick={() =>
                  toast("「その他」をクリックしました。担当者につなぎます。")
                }
                {...props}
              />
            )}
          >
            その他の用件。担当者と話したいです。
          </BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>
  )
}
