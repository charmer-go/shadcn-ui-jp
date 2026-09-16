"use client"

import * as React from "react"
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/aria/command"

export function CommandWithGroups() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        メニューを開く
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="コマンドを入力または検索…" />
          <CommandList
            renderEmptyState={() => (
              <CommandEmpty>結果が見つかりません。</CommandEmpty>
            )}
          >
            <CommandGroup heading="候補">
              <CommandItem textValue="カレンダー">
                <CalendarIcon />
                <span>カレンダー</span>
              </CommandItem>
              <CommandItem textValue="絵文字を検索">
                <SmileIcon />
                <span>絵文字を検索</span>
              </CommandItem>
              <CommandItem textValue="計算機">
                <CalculatorIcon />
                <span>計算機</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="設定">
              <CommandItem textValue="プロフィール">
                <UserIcon />
                <span>プロフィール</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="請求">
                <CreditCardIcon />
                <span>請求</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="設定">
                <SettingsIcon />
                <span>設定</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
