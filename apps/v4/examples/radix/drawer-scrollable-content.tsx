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

export function DrawerScrollableContent() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">スクロール可能なコンテンツ</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>目標を変更</DrawerTitle>
          <DrawerDescription>1日の活動目標を設定してください。</DrawerDescription>
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
  )
}
