"use client"

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

const SNAP_POINTS = ["31rem", 1]

export function DrawerSnapPoints() {
  return (
    <Drawer snapPoints={SNAP_POINTS} showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        スナップドロワーを開く
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>スナップポイント</DrawerTitle>
          <DrawerDescription>
            ドロワーをドラッグすると、コンパクト表示とほぼ全画面表示の間でスナップします。
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>閉じる</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
