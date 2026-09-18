"use client"

import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"

export function DropdownMenuIcons() {
  return (
    <DropdownMenuTrigger>
      <Button variant="outline">開く</Button>
      <DropdownMenu>
        <DropdownMenuItem>
          <UserIcon />
          プロフィール
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          請求
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          設定
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          ログアウト
        </DropdownMenuItem>
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}
