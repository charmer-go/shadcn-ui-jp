import { ShieldAlertIcon } from "lucide-react"

import { Button } from "@/components/ui/aria/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/aria/item"

export function ItemIcon() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>セキュリティアラート</ItemTitle>
          <ItemDescription>
            不明なデバイスからの新しいログインを検知しました。
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            確認
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
