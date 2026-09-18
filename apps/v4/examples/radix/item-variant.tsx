import { InboxIcon } from "lucide-react"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/radix/item"

export function ItemVariant() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item>
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>デフォルトバリアント</ItemTitle>
          <ItemDescription>
            背景が透明でボーダーのないスタイルです。
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>アウトラインバリアント</ItemTitle>
          <ItemDescription>
            ボーダーが表示されるアウトラインスタイルです。
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>ミューテッドバリアント</ItemTitle>
          <ItemDescription>
            副次的なコンテンツ向けのミュートされた背景です。
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
