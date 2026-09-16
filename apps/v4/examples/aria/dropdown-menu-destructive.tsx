"use client"

import { PencilIcon, ShareIcon, TrashIcon } from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"

export function DropdownMenuDestructive() {
  return (
    <DropdownMenuTrigger>
      <Button variant="outline">操作</Button>
      <DropdownMenu>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PencilIcon />
            編集
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            共有
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            削除
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}
