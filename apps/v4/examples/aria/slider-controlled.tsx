"use client"

import * as React from "react"

import { Label } from "@/components/ui/aria/label"
import { Slider } from "@/components/ui/aria/slider"

export function SliderControlled() {
  const [value, setValue] = React.useState([0.3, 0.7])

  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">温度</Label>
        <span className="text-sm text-muted-foreground">
          {value.join(", ")}
        </span>
      </div>
      <Slider
        aria-label="温度"
        id="slider-demo-temperature"
        value={value}
        onChange={(value) => setValue(value as number[])}
        minValue={0}
        maxValue={1}
        step={0.1}
      />
    </div>
  )
}
