import { Button } from "@/components/ui/radix/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/radix/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link">ホバーしてみてください</Button>
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
