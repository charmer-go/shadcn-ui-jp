import { SearchIcon } from "lucide-react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/aria/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/aria/input-group"
import { Kbd } from "@/components/ui/aria/kbd"

export default function EmptyInputGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - ページが見つかりません</EmptyTitle>
        <EmptyDescription>
          お探しのページは存在しません。以下から必要な情報を検索してみてください。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupInput placeholder="ページを検索..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          お困りですか？ <a href="#">サポートに問い合わせる</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}
