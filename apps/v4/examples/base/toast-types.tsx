"use client"

import { Button } from "@/components/ui/base/button"
import { toast } from "@/components/ui/base/toast"

export function ToastTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast.add({ description: "イベントを作成しました。" })}
      >
        デフォルト
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "success",
            description: "イベントを作成しました。",
          })
        }
      >
        成功
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "info",
            description: "イベントの10分前までにお越しください。",
          })
        }
      >
        情報
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "warning",
            description: "イベントは午前8:00より前には開始できません。",
          })
        }
      >
        警告
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "error",
            description: "イベントを作成できませんでした。",
            priority: "high",
          })
        }
      >
        エラー
      </Button>
    </div>
  )
}
