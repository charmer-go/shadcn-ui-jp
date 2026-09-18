"use client"

import * as React from "react"
import { Building2Icon, CreditCardIcon, WalletIcon } from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"

export function DropdownMenuRadioIcons() {
  const [paymentMethod, setPaymentMethod] = React.useState("card")

  return (
    <DropdownMenuTrigger>
      <Button variant="outline">支払い方法</Button>
      <DropdownMenu className="min-w-56">
        <DropdownMenuGroup
          selectionMode="single"
          selectedKeys={[paymentMethod]}
          onSelectionChange={(keys) => setPaymentMethod([...keys][0] as string)}
        >
          <DropdownMenuLabel>支払い方法を選択</DropdownMenuLabel>
          <DropdownMenuItem id="card">
            <CreditCardIcon />
            クレジットカード
          </DropdownMenuItem>
          <DropdownMenuItem id="paypal">
            <WalletIcon />
            PayPal
          </DropdownMenuItem>
          <DropdownMenuItem id="bank">
            <Building2Icon />
            銀行振込
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}
