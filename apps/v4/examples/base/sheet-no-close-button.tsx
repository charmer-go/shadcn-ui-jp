import { Button } from "@/components/ui/base/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/base/sheet"

export default function SheetNoCloseButton() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        シートを開く
      </SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>閉じるボタンなし</SheetTitle>
          <SheetDescription>
            このシートには右上に閉じるボタンがありません。
            外側をクリックして閉じてください。
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
