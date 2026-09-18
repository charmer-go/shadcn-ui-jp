"use client"

import { Button } from "@/components/ui/aria/button"
import { HoverCard, HoverCardTrigger } from "@/components/ui/aria/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCardTrigger delay={10} closeDelay={100}>
      <Button variant="link">ホバーしてみてください</Button>
      <HoverCard className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@nextjs</div>
        <div>Reactフレームワーク。@vercel が開発・保守を行っています。</div>
        <div className="mt-1 text-xs text-muted-foreground">
          2021年12月に参加
        </div>
      </HoverCard>
    </HoverCardTrigger>
  )
}
