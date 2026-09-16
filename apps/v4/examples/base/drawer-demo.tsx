"use client"

import * as React from "react"
import { toast } from "sonner"

import { useIsMobile } from "@/hooks/use-mobile"
import { Badge } from "@/components/ui/base/badge"
import { Button } from "@/components/ui/base/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/base/drawer"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/base/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/base/radio-group"

const deliveryTimes = [
  {
    value: "asap",
    id: "delivery-asap",
    label: "標準配送",
    description: "25～35分・ドライバー手配済み",
    badge: "最速",
  },
  {
    value: "5-00",
    id: "delivery-5-00",
    label: "17:00～17:15",
    description: "16:45から準備開始",
  },
  {
    value: "5-30",
    id: "delivery-5-30",
    label: "17:30～17:45",
    description: "帰宅時におすすめ",
  },
  {
    value: "6-00",
    id: "delivery-6-00",
    label: "18:00～18:15",
    description: "人気・混雑時間帯",
  },
  {
    value: "6-30",
    id: "delivery-6-30",
    label: "18:30～18:45",
    description: "閉店前最終枠",
  },
]

export function DrawerDemo() {
  const [open, setOpen] = React.useState(false)
  const [deliveryTime, setDeliveryTime] = React.useState("asap")
  const isMobile = useIsMobile()

  function handleConfirm() {
    const selected = deliveryTimes.find((time) => time.value === deliveryTime)

    if (!selected) {
      return
    }

    setOpen(false)
    toast("配達時間が確定しました", {
      description: selected.label,
    })
  }

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}
    >
      <DrawerTrigger render={<Button variant="secondary" />}>
        ドロワーを開く
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>配達時間を選択</DrawerTitle>
          <DrawerDescription>
            ご注文はできるだけ早く準備いたします。
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 scroll-fade overflow-y-auto p-4">
          <RadioGroup
            value={deliveryTime}
            onValueChange={setDeliveryTime}
            className="gap-2"
          >
            {deliveryTimes.map((time) => (
              <FieldLabel key={time.value} htmlFor={time.id}>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle className="flex items-center gap-2">
                      {time.label}
                      {time.badge ? (
                        <Badge variant="secondary">{time.badge}</Badge>
                      ) : null}
                    </FieldTitle>
                    <FieldDescription>{time.description}</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value={time.value} id={time.id} />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </div>
        <DrawerFooter>
          <Button onClick={handleConfirm} className="h-[34px]">
            配達時間を確定
          </Button>
          <DrawerClose render={<Button variant="outline" />}>
            キャンセル
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
