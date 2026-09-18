import { Button } from "@/components/ui/base/button"
import { Input } from "@/components/ui/base/input"
import { Label } from "@/components/ui/base/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/base/sheet"

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>開く</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>プロフィールを編集</SheetTitle>
          <SheetDescription>
            ここでプロフィールを変更できます。完了したら保存をクリックしてください。
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">名前</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">ユーザー名</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">変更を保存</Button>
          <SheetClose render={<Button variant="outline" />}>閉じる</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
