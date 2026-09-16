"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/radix/button"

export function SonnerTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("イベントが作成されました")}>
        デフォルト
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("イベントが作成されました")}
      >
        成功
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("イベント開始10分前には会場にお越しください")
        }
      >
        情報
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("イベント開始時刻は午前8時より前には設定できません")
        }
      >
        警告
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("イベントを作成できませんでした")}
      >
        エラー
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "イベント" }), 2000)
              ),
            {
              loading: "読み込み中...",
              success: (data) => `${data.name}を作成しました`,
              error: "エラー",
            }
          )
        }}
      >
        Promise
      </Button>
    </div>
  )
}
