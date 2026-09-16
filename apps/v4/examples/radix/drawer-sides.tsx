import { Button } from "@/components/ui/radix/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/radix/drawer"

const DRAWER_SIDES = ["top", "right", "bottom", "left"] as const

export function DrawerWithSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {DRAWER_SIDES.map((side) => (
        <Drawer
          key={side}
          direction={
            side === "bottom" ? undefined : (side as "top" | "right" | "left")
          }
        >
          <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </DrawerTrigger>
          <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
            <DrawerHeader>
              <DrawerTitle>目標を変更</DrawerTitle>
              <DrawerDescription>
                1日の活動目標を設定してください。
              </DrawerDescription>
            </DrawerHeader>
            <div className="no-scrollbar overflow-y-auto px-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <p
                  key={index}
                  className="mb-4 leading-normal style-lyra:mb-2 style-lyra:leading-relaxed"
                >
                  これはサンプルのテキストです。ドロワーの内容が長くなった場合に、
                  スクロールがどのように機能するかを確認するためのダミーコンテンツです。
                  実際のアプリケーションでは、ここに本文やリスト、フォームなど
                  任意のコンテンツを配置できます。内容が画面の高さを超える場合、
                  このエリアだけが独立してスクロールします。
                </p>
              ))}
            </div>
            <DrawerFooter>
              <Button>送信</Button>
              <DrawerClose asChild>
                <Button variant="outline">キャンセル</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}
