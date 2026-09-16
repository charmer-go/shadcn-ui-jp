"use client"

import * as React from "react"
import type { Selection } from "react-aria-components"

import { Button } from "@/components/ui/aria/button"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"

export function DropdownMenuCheckboxes() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["status-bar"])
  )

  return (
    <DropdownMenuTrigger>
      <Button variant="outline">開く</Button>
      <DropdownMenu className="w-40">
        <DropdownMenuGroup
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <DropdownMenuLabel>外観</DropdownMenuLabel>
          <DropdownMenuItem id="status-bar">ステータスバー</DropdownMenuItem>
          <DropdownMenuItem id="activity-bar" isDisabled>
            アクティビティバー
          </DropdownMenuItem>
          <DropdownMenuItem id="panel">パネル</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}
