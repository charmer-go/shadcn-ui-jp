"use client"

import { Button } from "@/components/ui/aria/button"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"

export function DropdownMenuShortcuts() {
  return (
    <DropdownMenuTrigger>
      <Button variant="outline">開く</Button>
      <DropdownMenu>
        <DropdownMenuGroup>
          <DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
          <DropdownMenuItem>
            プロフィール
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            請求
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            設定
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          ログアウト
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}
