"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/radix/button"

export function SonnerPosition() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast("イベントが作成されました", { position: "top-left" })
        }
      >
        左上
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("イベントが作成されました", { position: "top-center" })
        }
      >
        上中央
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("イベントが作成されました", { position: "top-right" })
        }
      >
        右上
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("イベントが作成されました", { position: "bottom-left" })
        }
      >
        左下
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("イベントが作成されました", { position: "bottom-center" })
        }
      >
        下中央
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("イベントが作成されました", { position: "bottom-right" })
        }
      >
        右下
      </Button>
    </div>
  )
}
