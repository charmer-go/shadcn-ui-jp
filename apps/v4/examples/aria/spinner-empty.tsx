import { Button } from "@/components/ui/aria/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/aria/empty"
import { Spinner } from "@/components/ui/aria/spinner"

export function SpinnerEmpty() {
  return (
    <Empty className="w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>リクエストを処理しています</EmptyTitle>
        <EmptyDescription>
          リクエストの処理が完了するまでしばらくお待ちください。ページを更新しないでください。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          キャンセル
        </Button>
      </EmptyContent>
    </Empty>
  )
}
