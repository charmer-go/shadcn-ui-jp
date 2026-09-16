"use client"

import * as React from "react"

import { Progress } from "@/components/ui/aria/progress"
import { Slider } from "@/components/ui/aria/slider"

export function ProgressControlled() {
  const [value, setValue] = React.useState(50)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress aria-label="読み込み中" value={value} className="w-full" />
      <Slider
        aria-label="進行状況"
        value={value}
        onChange={(value) => setValue(value as number)}
        minValue={0}
        maxValue={100}
        step={1}
      />
    </div>
  )
}
