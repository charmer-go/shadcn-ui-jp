"use client"

import * as React from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import { ButtonGroup } from "@/components/ui/aria/button-group"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"

export default function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal")

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" size="icon" aria-label="戻る">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">アーカイブ</Button>
        <Button variant="outline">報告</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">スヌーズ</Button>
        <DropdownMenuTrigger>
          <Button variant="outline" size="icon" aria-label="その他のオプション">
            <MoreHorizontalIcon />
          </Button>
          <DropdownMenu placement="bottom end" className="w-40">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                既読にする
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                アーカイブ
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                スヌーズ
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                カレンダーに追加
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterIcon />
                リストに追加
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  ラベルを付ける...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent
                  selectionMode="single"
                  selectedKeys={[label]}
                  onSelectionChange={(keys) => setLabel([...keys][0] as string)}
                >
                  <DropdownMenuItem id="personal">個人</DropdownMenuItem>
                  <DropdownMenuItem id="work">仕事</DropdownMenuItem>
                  <DropdownMenuItem id="other">その他</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                ゴミ箱
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenu>
        </DropdownMenuTrigger>
      </ButtonGroup>
    </ButtonGroup>
  )
}
