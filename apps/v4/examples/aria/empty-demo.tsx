import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"

import { Button, LinkButton } from "@/components/ui/aria/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/aria/empty"

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
      <LinkButton
        href="#"
        variant="link"
        className="text-muted-foreground"
        size="sm"
      >
        詳細を見る <ArrowUpRightIcon />
      </LinkButton>
    </Empty>
  )
}
