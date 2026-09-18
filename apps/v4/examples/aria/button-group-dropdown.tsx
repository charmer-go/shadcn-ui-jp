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

import { Button } from "@/components/ui/aria/button"
import { ButtonGroup } from "@/components/ui/aria/button-group"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"

export default function ButtonGroupDropdown() {
  return (
    <ButtonGroup>
      <Button variant="outline">フォロー</Button>
      <DropdownMenuTrigger>
        <Button variant="outline" className="pl-2!">
          <ChevronDownIcon />
        </Button>
        <DropdownMenu placement="bottom end" className="w-44">
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
        </DropdownMenu>
      </DropdownMenuTrigger>
    </ButtonGroup>
  )
}
