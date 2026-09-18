import { IconCloud } from "@tabler/icons-react"

import { Button } from "@/components/ui/radix/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/radix/empty"

export default function EmptyOutline() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>クラウドストレージが空です</EmptyTitle>
        <EmptyDescription>
          ファイルをクラウドストレージにアップロードすると、どこからでもアクセスできます。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          ファイルをアップロード
        </Button>
      </EmptyContent>
    </Empty>
  )
}
