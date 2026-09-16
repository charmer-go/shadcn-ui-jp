import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/aria/avatar"
import { Button } from "@/components/ui/aria/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/aria/empty"

export default function EmptyAvatar() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="size-12">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="grayscale"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>ユーザーはオフラインです</EmptyTitle>
        <EmptyDescription>
          このユーザーは現在オフラインです。メッセージを残して通知するか、後でもう一度お試しください。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">メッセージを残す</Button>
      </EmptyContent>
    </Empty>
  )
}
