import { Button } from "@/components/ui/radix/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/radix/dialog"
import { Field, FieldGroup } from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"
import { Label } from "@/components/ui/radix/label"

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">ダイアログを開く</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>プロフィールを編集</DialogTitle>
            <DialogDescription>
              プロフィールを編集します。完了したら保存をクリックしてください。
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">名前</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">ユーザー名</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">キャンセル</Button>
            </DialogClose>
            <Button type="submit">変更を保存</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
