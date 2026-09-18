import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/aria/item"

export function ItemLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item href="#">
        <ItemContent>
          <ItemTitle>ドキュメントを見る</ItemTitle>
          <ItemDescription>
            コンポーネントの使い方を学びましょう。
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Item>
      <Item
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
      >
        <ItemContent>
          <ItemTitle>外部リソース</ItemTitle>
          <ItemDescription>
            セキュリティ属性を設定して新しいタブで開きます。
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ExternalLinkIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  )
}
