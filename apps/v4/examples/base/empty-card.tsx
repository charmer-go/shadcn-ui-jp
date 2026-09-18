import { ArrowUpRightIcon, FolderIcon } from "lucide-react"

import { Button } from "@/components/ui/base/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/base/empty"

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
          <Button render={<a href="#" />} nativeButton={false}>
            プロジェクトを作成
          </Button>
          <Button variant="outline">プロジェクトをインポート</Button>
        </div>
        <Button
          variant="link"
          render={<a href="#" />}
          className="text-muted-foreground"
          nativeButton={false}
        >
          詳細を見る <ArrowUpRightIcon />
        </Button>
      </EmptyContent>
    </Empty>
  )
}
