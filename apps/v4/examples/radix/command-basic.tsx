"use client"

import * as React from "react"

import { Button } from "@/components/ui/radix/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/radix/command"

export function CommandBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        メニューを開く
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="コマンドを入力または検索…" />
          <CommandList>
            <CommandEmpty>結果が見つかりません。</CommandEmpty>
            <CommandGroup heading="候補">
              <CommandItem>カレンダー</CommandItem>
              <CommandItem>絵文字を検索</CommandItem>
              <CommandItem>計算機</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
