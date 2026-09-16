"use client"

import { useState } from "react"
import { Pressable, type Selection } from "react-aria-components"

import {
  ContextMenu,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/aria/context-menu"

export function ContextMenuCheckboxes() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["bookmarks-bar", "developer-tools"])
  )

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
        <ContextMenuGroup
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <ContextMenuItem id="bookmarks-bar">
            ブックマークバーを表示
          </ContextMenuItem>
          <ContextMenuItem>完全なURLを表示</ContextMenuItem>
          <ContextMenuItem id="developer-tools">
            デベロッパーツールを表示
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenu>
    </ContextMenuTrigger>
  )
}
