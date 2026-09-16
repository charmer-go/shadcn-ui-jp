import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/base/menubar"

export function MenubarCheckbox() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>表示</MenubarTrigger>
        <MenubarContent className="w-64">
          <MenubarCheckboxItem>常にブックマークバーを表示</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            常に完全なURLを表示
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            再読み込み <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            強制再読み込み <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>書式</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>取り消し線</MenubarCheckboxItem>
          <MenubarCheckboxItem>コード</MenubarCheckboxItem>
          <MenubarCheckboxItem>上付き文字</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
