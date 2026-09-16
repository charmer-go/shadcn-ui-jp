import { Button } from "@/components/ui/aria/button"
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/aria/sheet"

export default function SheetNoCloseButton() {
  return (
    <SheetTrigger>
      <Button variant="outline">シートを開く</Button>
      <Sheet showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>閉じるボタンなし</SheetTitle>
          <SheetDescription>
            このシートには右上に閉じるボタンがありません。
            外側をクリックして閉じてください。
          </SheetDescription>
        </SheetHeader>
      </Sheet>
    </SheetTrigger>
  )
}
