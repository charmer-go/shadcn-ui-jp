"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/aria/field"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/aria/toggle-group"

export function ToggleGroupFontWeightSelector() {
  const [fontWeight, setFontWeight] = React.useState("normal")
  return (
    <Field>
      <FieldLabel>フォントの太さ</FieldLabel>
      <ToggleGroup
        selectedKeys={[fontWeight]}
        onSelectionChange={(value) => setFontWeight([...value][0] as string)}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ToggleGroupItem
          id="light"
          aria-label="ライト"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-light">Aa</span>
          <span className="text-xs text-muted-foreground">ライト</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          id="normal"
          aria-label="標準"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-normal">Aa</span>
          <span className="text-xs text-muted-foreground">標準</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          id="medium"
          aria-label="中太"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-medium">Aa</span>
          <span className="text-xs text-muted-foreground">中太</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          id="bold"
          aria-label="太字"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-bold">Aa</span>
          <span className="text-xs text-muted-foreground">太字</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <FieldDescription>
        フォントの太さを設定するには{" "}
        <code className="rounded-md bg-muted px-1 py-0.5 font-mono">
          font-{fontWeight}
        </code>{" "}
        を使用します。
      </FieldDescription>
    </Field>
  )
}
