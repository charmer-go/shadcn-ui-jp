import { Button } from "@/components/ui/aria/button"
import { Input } from "@/components/ui/aria/input"
import { Label } from "@/components/ui/aria/label"
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/aria/sheet"

export default function SheetDemo() {
  return (
    <SheetTrigger>
      <Button variant="outline">開く</Button>
      <Sheet>
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
          <SheetClose variant="outline">閉じる</SheetClose>
        </SheetFooter>
      </Sheet>
    </SheetTrigger>
  )
}
