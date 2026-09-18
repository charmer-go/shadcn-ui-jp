"use client"

import * as React from "react"

import { Button } from "@/components/ui/aria/button"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenuTrigger>
      <Button variant="outline">開く</Button>
      <DropdownMenu className="w-32">
        <DropdownMenuGroup
          selectionMode="single"
          selectedKeys={[position]}
          onSelectionChange={(keys) => setPosition([...keys][0] as string)}
        >
          <DropdownMenuLabel>パネルの位置</DropdownMenuLabel>
          <DropdownMenuItem id="top">上</DropdownMenuItem>
          <DropdownMenuItem id="bottom">下</DropdownMenuItem>
          <DropdownMenuItem id="right">右</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}
