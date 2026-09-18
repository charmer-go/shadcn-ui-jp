import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/base/avatar"
import { Button } from "@/components/ui/base/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/base/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={10}
        closeDelay={100}
        render={<Button variant="link" />}
      >
        ホバーしてみてください
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@nextjs</div>
        <div>Reactフレームワーク。@vercel が開発・保守を行っています。</div>
        <div className="mt-1 text-xs text-muted-foreground">
          2021年12月に参加
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
