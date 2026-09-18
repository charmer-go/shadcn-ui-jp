"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/aria/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/aria/drawer"

export function DrawerNested() {
  const isMobile = useIsMobile()

  const swipeDirection = isMobile ? "down" : "right"

  return (
    <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
      <DrawerTrigger render={<Button variant="secondary" />}>
        ドロワーを開く
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ドロワー</DrawerTitle>
          <DrawerDescription>
            同じ方向から別のドロワーを開きます。
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <DrawerFooter>
          <Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
            <DrawerTrigger render={<Button variant="outline" />}>
              ネストされたドロワーを開く
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>ネストされたドロワー</DrawerTitle>
                <DrawerDescription>
                  親ドロワーはこの背後に表示されたままになります。
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex-1 p-4">
                <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
              </div>
              <DrawerFooter>
                <Drawer
                  showSwipeHandle={isMobile}
                  swipeDirection={swipeDirection}
                >
                  <DrawerTrigger render={<Button variant="outline" />}>
                    3番目のドロワーを開く
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>3番目のドロワー</DrawerTitle>
                      <DrawerDescription>
                        この背後に2つのドロワーが重なっています。
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="flex-1 p-4">
                      <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
                    </div>
                    <DrawerFooter>
                      <Drawer
                        showSwipeHandle={isMobile}
                        swipeDirection={swipeDirection}
                      >
                        <DrawerTrigger render={<Button variant="outline" />}>
                          4番目のドロワーを開く
                        </DrawerTrigger>
                        <DrawerContent>
                          <DrawerHeader>
                            <DrawerTitle>4番目のドロワー</DrawerTitle>
                            <DrawerDescription>
                              スタックの中で最前面にあるドロワーです。
                            </DrawerDescription>
                          </DrawerHeader>
                          <div className="flex-1 p-4">
                            <div className="bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:aspect-video group-data-[swipe-axis=y]/drawer-popup:w-full" />
                          </div>
                          <DrawerFooter>
                            <DrawerClose render={<Button variant="outline" />}>
                              閉じる
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                      <DrawerClose render={<Button variant="outline" />}>
                        閉じる
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
                <DrawerClose render={<Button variant="outline" />}>
                  閉じる
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <DrawerClose render={<Button variant="outline" />}>閉じる</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
