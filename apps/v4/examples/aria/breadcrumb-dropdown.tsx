"use client"

import Link from "next/link"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "react-aria-components"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/aria/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"

export function BreadcrumbDropdown() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            render={(props) =>
              "href" in props ? <Link {...props} /> : <span {...props} />
            }
          >
            ホーム
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <DropdownMenuTrigger>
            <Button className="flex items-center gap-1">
              コンポーネント
              <ChevronDownIcon data-icon="inline-end" className="size-3.5" />
            </Button>
            <DropdownMenu placement="bottom start">
              <DropdownMenuGroup>
                <DropdownMenuItem>ドキュメント</DropdownMenuItem>
                <DropdownMenuItem>テーマ</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenu>
          </DropdownMenuTrigger>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbPage>パンくずリスト</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
