"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/aria/button"

export function SonnerDescription() {
  return (
    <Button
      onClick={() =>
        toast("イベントが作成されました", {
          description: "1月3日（月）午後6時",
        })
      }
      variant="outline"
      className="w-fit"
    >
      トーストを表示
    </Button>
  )
}
