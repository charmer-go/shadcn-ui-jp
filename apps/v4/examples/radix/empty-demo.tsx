import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/radix/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/radix/empty"

export default function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>プロジェクトはまだありません</EmptyTitle>
        <EmptyDescription>
          まだプロジェクトを作成していません。最初のプロジェクトを作成して始めましょう。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>プロジェクトを作成</Button>
        <Button variant="outline">プロジェクトをインポート</Button>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          詳細を見る <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  )
}
