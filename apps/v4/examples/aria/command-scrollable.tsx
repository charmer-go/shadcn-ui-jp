"use client"

import * as React from "react"
import {
  BellIcon,
  CalculatorIcon,
  CalendarIcon,
  ClipboardPasteIcon,
  CodeIcon,
  CopyIcon,
  CreditCardIcon,
  FileTextIcon,
  FolderIcon,
  FolderPlusIcon,
  HelpCircleIcon,
  HomeIcon,
  ImageIcon,
  InboxIcon,
  LayoutGridIcon,
  ListIcon,
  PlusIcon,
  ScissorsIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
  ZoomInIcon,
  ZoomOutIcon,
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

export function CommandManyItems() {
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
            <CommandGroup heading="ナビゲーション">
              <CommandItem textValue="ホーム">
                <HomeIcon />
                <span>ホーム</span>
                <CommandShortcut>⌘H</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="受信箱">
                <InboxIcon />
                <span>受信箱</span>
                <CommandShortcut>⌘I</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="ドキュメント">
                <FileTextIcon />
                <span>ドキュメント</span>
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="フォルダー">
                <FolderIcon />
                <span>フォルダー</span>
                <CommandShortcut>⌘F</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="操作">
              <CommandItem textValue="新しいファイル">
                <PlusIcon />
                <span>新しいファイル</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="新しいフォルダー">
                <FolderPlusIcon />
                <span>新しいフォルダー</span>
                <CommandShortcut>⇧⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="コピー">
                <CopyIcon />
                <span>コピー</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="切り取り">
                <ScissorsIcon />
                <span>切り取り</span>
                <CommandShortcut>⌘X</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="貼り付け">
                <ClipboardPasteIcon />
                <span>貼り付け</span>
                <CommandShortcut>⌘V</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="削除">
                <TrashIcon />
                <span>削除</span>
                <CommandShortcut>⌫</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="表示">
              <CommandItem textValue="グリッド表示">
                <LayoutGridIcon />
                <span>グリッド表示</span>
              </CommandItem>
              <CommandItem textValue="リスト表示">
                <ListIcon />
                <span>リスト表示</span>
              </CommandItem>
              <CommandItem textValue="ズームイン">
                <ZoomInIcon />
                <span>ズームイン</span>
                <CommandShortcut>⌘+</CommandShortcut>
              </CommandItem>
              <CommandItem textValue="ズームアウト">
                <ZoomOutIcon />
                <span>ズームアウト</span>
                <CommandShortcut>⌘-</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="アカウント">
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
              <CommandItem textValue="通知">
                <BellIcon />
                <span>通知</span>
              </CommandItem>
              <CommandItem textValue="ヘルプとサポート">
                <HelpCircleIcon />
                <span>ヘルプとサポート</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="ツール">
              <CommandItem textValue="計算機">
                <CalculatorIcon />
                <span>計算機</span>
              </CommandItem>
              <CommandItem textValue="カレンダー">
                <CalendarIcon />
                <span>カレンダー</span>
              </CommandItem>
              <CommandItem textValue="画像エディター">
                <ImageIcon />
                <span>画像エディター</span>
              </CommandItem>
              <CommandItem textValue="コードエディター">
                <CodeIcon />
                <span>コードエディター</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
