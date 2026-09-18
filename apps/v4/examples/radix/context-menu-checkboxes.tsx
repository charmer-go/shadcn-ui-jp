import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuTrigger,
} from "@/components/ui/radix/context-menu"

export function ContextMenuCheckboxes() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">
          右クリックしてください
        </span>
        <span className="hidden pointer-coarse:inline-block">
          長押ししてください
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuCheckboxItem defaultChecked>
            ブックマークバーを表示
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>完全なURLを表示</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem defaultChecked>
            デベロッパーツールを表示
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
