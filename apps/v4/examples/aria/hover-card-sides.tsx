"use client"

import { Button } from "@/components/ui/aria/button"
import { HoverCard, HoverCardTrigger } from "@/components/ui/aria/hover-card"

const HOVER_CARD_PLACEMENTS = ["left", "top", "bottom", "right"] as const

export function HoverCardSides() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {HOVER_CARD_PLACEMENTS.map((placement) => (
        <HoverCardTrigger key={placement} delay={100} closeDelay={100}>
          <Button variant="outline" className="capitalize">
            {placement}
          </Button>
          <HoverCard placement={placement}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">ホバーカード</h4>
              <p>
                このホバーカードはトリガーの{placement}側に表示されます。
              </p>
            </div>
          </HoverCard>
        </HoverCardTrigger>
      ))}
    </div>
  )
}
