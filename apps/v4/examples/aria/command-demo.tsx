"use client"

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/aria/command"

export function CommandDemo() {
  return (
    <Command className="max-w-sm rounded-lg border">
      <CommandInput placeholder="コマンドを入力または検索…" />
      <CommandList
        renderEmptyState={() => <CommandEmpty>結果が見つかりません。</CommandEmpty>}
      >
        <CommandGroup heading="候補">
          <CommandItem textValue="カレンダー">
            <Calendar />
            <span>カレンダー</span>
          </CommandItem>
          <CommandItem textValue="絵文字を検索">
            <Smile />
            <span>絵文字を検索</span>
          </CommandItem>
          <CommandItem textValue="計算機" isDisabled>
            <Calculator />
            <span>計算機</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="設定">
          <CommandItem textValue="プロフィール">
            <User />
            <span>プロフィール</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem textValue="請求">
            <CreditCard />
            <span>請求</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem textValue="設定">
            <Settings />
            <span>設定</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
