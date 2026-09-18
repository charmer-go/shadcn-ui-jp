"use client"

import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react"

import { Button } from "@/components/ui/radix/button"
import { ButtonGroup } from "@/components/ui/radix/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/radix/dropdown-menu"

export default function ButtonGroupDropdown() {
  return (
    <ButtonGroup>
      <Button variant="outline">フォロー</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="pl-2!">
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <VolumeOffIcon />
              会話をミュート
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CheckIcon />
              既読にする
            </DropdownMenuItem>
            <DropdownMenuItem>
              <AlertTriangleIcon />
              会話を報告
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserRoundXIcon />
              ユーザーをブロック
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShareIcon />
              会話を共有
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CopyIcon />
              会話をコピー
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">
              <TrashIcon />
              会話を削除
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
