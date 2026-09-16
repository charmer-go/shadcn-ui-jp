import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/base/menubar"

export function MenubarSubmenu() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>ファイル</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>共有</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>リンクをメールで送信</MenubarItem>
              <MenubarItem>メッセージ</MenubarItem>
              <MenubarItem>メモ</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            印刷... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>編集</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            元に戻す <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            やり直す <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>検索</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>検索...</MenubarItem>
              <MenubarItem>次を検索</MenubarItem>
              <MenubarItem>前を検索</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>切り取り</MenubarItem>
          <MenubarItem>コピー</MenubarItem>
          <MenubarItem>貼り付け</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
