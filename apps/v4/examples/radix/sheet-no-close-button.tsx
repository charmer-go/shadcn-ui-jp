import { Button } from "@/components/ui/radix/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/radix/sheet"

export default function SheetNoCloseButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">シートを開く</Button>
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
