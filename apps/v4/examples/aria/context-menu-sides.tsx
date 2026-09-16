"use client"

import { Pressable } from "react-aria-components"

import {
  ContextMenu,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/aria/context-menu"

export function ContextMenuSides() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-4">
      <ContextMenuTrigger>
        <Pressable>
          <div
            role="button"
            className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm"
          >
            <span className="hidden pointer-fine:inline-block">
              右クリック(上)
            </span>
            <span className="hidden pointer-coarse:inline-block">
              長押し(上)
            </span>
          </div>
        </Pressable>
        <ContextMenu placement="top start">
          <ContextMenuGroup>
            <ContextMenuItem>戻る</ContextMenuItem>
            <ContextMenuItem>進む</ContextMenuItem>
            <ContextMenuItem>再読み込み</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenu>
      </ContextMenuTrigger>
      <ContextMenuTrigger>
        <Pressable>
          <div
            role="button"
            className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm"
          >
            <span className="hidden pointer-fine:inline-block">
              右クリック(右)
            </span>
            <span className="hidden pointer-coarse:inline-block">
              長押し(右)
            </span>
          </div>
        </Pressable>
        <ContextMenu placement="right top">
          <ContextMenuGroup>
            <ContextMenuItem>戻る</ContextMenuItem>
            <ContextMenuItem>進む</ContextMenuItem>
            <ContextMenuItem>再読み込み</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenu>
      </ContextMenuTrigger>
      <ContextMenuTrigger>
        <Pressable>
          <div
            role="button"
            className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm"
          >
            <span className="hidden pointer-fine:inline-block">
              右クリック(下)
            </span>
            <span className="hidden pointer-coarse:inline-block">
              長押し(下)
            </span>
          </div>
        </Pressable>
        <ContextMenu placement="bottom start">
          <ContextMenuGroup>
            <ContextMenuItem>戻る</ContextMenuItem>
            <ContextMenuItem>進む</ContextMenuItem>
            <ContextMenuItem>再読み込み</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenu>
      </ContextMenuTrigger>
      <ContextMenuTrigger>
        <Pressable>
          <div
            role="button"
            className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm"
          >
            <span className="hidden pointer-fine:inline-block">
              右クリック(左)
            </span>
            <span className="hidden pointer-coarse:inline-block">
              長押し(左)
            </span>
          </div>
        </Pressable>
        <ContextMenu placement="left top">
          <ContextMenuGroup>
            <ContextMenuItem>戻る</ContextMenuItem>
            <ContextMenuItem>進む</ContextMenuItem>
            <ContextMenuItem>再読み込み</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenu>
      </ContextMenuTrigger>
    </div>
  )
}
