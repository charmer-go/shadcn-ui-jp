"use client"

import { Button } from "@/components/ui/aria/button"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"

export function DropdownMenuBasic() {
  return (
    <DropdownMenuTrigger>
      <Button variant="outline">開く</Button>
      <DropdownMenu>
        <DropdownMenuGroup>
          <DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
          <DropdownMenuItem>プロフィール</DropdownMenuItem>
          <DropdownMenuItem>請求</DropdownMenuItem>
          <DropdownMenuItem>設定</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>サポート</DropdownMenuItem>
        <DropdownMenuItem isDisabled>API</DropdownMenuItem>
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}
