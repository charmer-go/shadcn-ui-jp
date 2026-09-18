import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/aria/table"

export function TableActions() {
  return (
    <Table aria-label="商品一覧">
      <TableHeader>
        <TableHead isRowHeader>商品</TableHead>
        <TableHead>価格</TableHead>
        <TableHead className="text-right">操作</TableHead>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">ワイヤレスマウス</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell className="text-right">
            <DropdownMenuTrigger>
              <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontalIcon />
                <span className="sr-only">メニューを開く</span>
              </Button>
              <DropdownMenu placement="bottom end">
                <DropdownMenuItem>編集</DropdownMenuItem>
                <DropdownMenuItem>複製</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  削除
                </DropdownMenuItem>
              </DropdownMenu>
            </DropdownMenuTrigger>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">メカニカルキーボード</TableCell>
          <TableCell>$129.99</TableCell>
          <TableCell className="text-right">
            <DropdownMenuTrigger>
              <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontalIcon />
                <span className="sr-only">メニューを開く</span>
              </Button>
              <DropdownMenu placement="bottom end">
                <DropdownMenuItem>編集</DropdownMenuItem>
                <DropdownMenuItem>複製</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  削除
                </DropdownMenuItem>
              </DropdownMenu>
            </DropdownMenuTrigger>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">USB-Cハブ</TableCell>
          <TableCell>$49.99</TableCell>
          <TableCell className="text-right">
            <DropdownMenuTrigger>
              <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontalIcon />
                <span className="sr-only">メニューを開く</span>
              </Button>
              <DropdownMenu placement="bottom end">
                <DropdownMenuItem>編集</DropdownMenuItem>
                <DropdownMenuItem>複製</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  削除
                </DropdownMenuItem>
              </DropdownMenu>
            </DropdownMenuTrigger>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
