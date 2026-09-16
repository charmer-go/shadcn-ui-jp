import { InboxIcon } from "lucide-react"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/radix/item"

export function ItemSizeDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>デフォルトサイズ</ItemTitle>
          <ItemDescription>
            ほとんどのユースケースに適した標準サイズです。
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>スモールサイズ</ItemTitle>
          <ItemDescription>密度の高いレイアウト向けのコンパクトサイズです。</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>エクストラスモールサイズ</ItemTitle>
          <ItemDescription>利用可能な最もコンパクトなサイズです。</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
