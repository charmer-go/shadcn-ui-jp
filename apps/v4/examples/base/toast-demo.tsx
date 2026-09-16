"use client"

import { Button } from "@/components/ui/base/button"
import { toast } from "@/components/ui/base/toast"

export function ToastDemo() {
  function showToast() {
    const id = toast.add({
      title: "イベントを作成しました",
      description: "12月3日（日）午前9:00",
      actionProps: {
        children: "元に戻す",
        onClick() {
          toast.close(id)
        },
      },
    })
  }

  return (
    <Button variant="outline" onClick={showToast}>
      トーストを表示
    </Button>
  )
}
