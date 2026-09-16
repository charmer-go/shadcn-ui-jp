"use client"

import { Button } from "@/components/ui/base/button"
import { toast } from "@/components/ui/base/toast"

export function ToastPromise() {
  function showToast() {
    toast.promise(
      new Promise<{ name: string }>((resolve) => {
        window.setTimeout(() => resolve({ name: "イベント" }), 2000)
      }),
      {
        loading: "イベントを作成中…",
        success: (data) => `${data.name}を作成しました。`,
        error: "イベントを作成できませんでした。",
      }
    )
  }

  return (
    <Button variant="outline" onClick={showToast}>
      イベントを作成
    </Button>
  )
}
