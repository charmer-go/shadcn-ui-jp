"use client"

import { ChevronDownIcon, MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/aria/input-group"

export function InputGroupDropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="ファイル名を入力" />
        <InputGroupAddon align="inline-end">
          <DropdownMenuTrigger>
            <InputGroupButton variant="ghost" aria-label="その他" size="icon-xs">
              <MoreHorizontal />
            </InputGroupButton>
            <DropdownMenu placement="bottom end" offset={8} crossOffset={-4}>
              <DropdownMenuGroup>
                <DropdownMenuItem>設定</DropdownMenuItem>
                <DropdownMenuItem>パスをコピー</DropdownMenuItem>
                <DropdownMenuItem>保存場所を開く</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenu>
          </DropdownMenuTrigger>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="検索クエリを入力" />
        <InputGroupAddon align="inline-end">
          <DropdownMenuTrigger>
            <InputGroupButton variant="ghost" className="pr-1.5! text-xs">
              検索対象... <ChevronDownIcon className="size-3" />
            </InputGroupButton>
            <DropdownMenu placement="bottom end" offset={8} crossOffset={-4}>
              <DropdownMenuGroup>
                <DropdownMenuItem>ドキュメント</DropdownMenuItem>
                <DropdownMenuItem>ブログ記事</DropdownMenuItem>
                <DropdownMenuItem>変更履歴</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenu>
          </DropdownMenuTrigger>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
