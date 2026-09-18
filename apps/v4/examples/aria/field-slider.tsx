"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/components/ui/aria/field"
import { Slider } from "@/components/ui/aria/slider"

export default function FieldSlider() {
  const [value, setValue] = React.useState([200, 800])

  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>価格帯</FieldTitle>
      <FieldDescription>
        予算の範囲を設定してください（$
        <span className="font-medium tabular-nums">{value[0]}</span> ～{" "}
        <span className="font-medium tabular-nums">{value[1]}</span>）。
      </FieldDescription>
      <Slider
        value={value}
        onChange={(value) => setValue(value as [number, number])}
        maxValue={1000}
        minValue={0}
        step={10}
        className="mt-2 w-full"
        aria-label="価格帯"
      />
    </Field>
  )
}
