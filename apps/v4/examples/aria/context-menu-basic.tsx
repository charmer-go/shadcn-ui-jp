"use client"

import { Pressable } from "react-aria-components"

import {
  ContextMenu,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/aria/context-menu"

export function ContextMenuBasic() {
  return (
    <ContextMenuTrigger>
      <Pressable>
        <div
          role="button"
          className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm"
        >
          <span className="hidden pointer-fine:inline-block">
            右クリックしてください
          </span>
          <span className="hidden pointer-coarse:inline-block">
            長押ししてください
          </span>
        </div>
      </Pressable>
      <ContextMenu>
        <ContextMenuGroup>
          <ContextMenuItem>戻る</ContextMenuItem>
          <ContextMenuItem isDisabled>進む</ContextMenuItem>
          <ContextMenuItem>再読み込み</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenu>
    </ContextMenuTrigger>
  )
}
