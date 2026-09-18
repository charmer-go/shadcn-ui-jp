import { ArrowUpRightIcon, FolderIcon } from "lucide-react"

import { Button } from "@/components/ui/radix/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/radix/empty"

export function EmptyInCard() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>プロジェクトはまだありません</EmptyTitle>
        <EmptyDescription>
          まだプロジェクトを作成していません。最初のプロジェクトを作成して始めましょう。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button asChild>
            <a href="#">プロジェクトを作成</a>
          </Button>
          <Button variant="outline">プロジェクトをインポート</Button>
        </div>
        <Button variant="link" asChild className="text-muted-foreground">
          <a href="#">
            詳細を見る <ArrowUpRightIcon />
          </a>
        </Button>
      </EmptyContent>
    </Empty>
  )
}
