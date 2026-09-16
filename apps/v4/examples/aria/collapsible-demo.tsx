"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/aria/collapsible"

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      isExpanded={isOpen}
      onExpandedChange={setIsOpen}
      className="flex w-[350px] flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">注文 #4189</h4>
        <Button slot="trigger" variant="ghost" size="icon" className="size-8">
          <ChevronsUpDown />
          <span className="sr-only">詳細の表示切替</span>
        </Button>
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">ステータス</span>
        <span className="font-medium">発送済み</span>
      </div>
      <CollapsibleContent>
        <div className="flex flex-col gap-2">
          <div className="rounded-md border px-4 py-2 text-sm">
            <p className="font-medium">配送先住所</p>
            <p className="text-muted-foreground">
              100 Market St, San Francisco
            </p>
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">
            <p className="font-medium">商品</p>
            <p className="text-muted-foreground">スタジオヘッドホン ×2</p>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
