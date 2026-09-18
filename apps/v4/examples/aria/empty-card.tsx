import { ArrowUpRightIcon, FolderIcon } from "lucide-react"

import { Button, LinkButton } from "@/components/ui/aria/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/aria/empty"

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
          <LinkButton href="#">プロジェクトを作成</LinkButton>
          <Button variant="outline">プロジェクトをインポート</Button>
        </div>
        <LinkButton href="#" variant="link" className="text-muted-foreground">
          詳細を見る <ArrowUpRightIcon />
        </LinkButton>
      </EmptyContent>
    </Empty>
  )
}
