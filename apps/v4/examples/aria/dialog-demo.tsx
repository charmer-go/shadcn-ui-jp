import { Button } from "@/components/ui/aria/button"
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/aria/dialog"
import { Field, FieldGroup } from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"
import { Label } from "@/components/ui/aria/label"

export function DialogDemo() {
  return (
    <DialogTrigger>
      <form>
        <Button variant="outline">ダイアログを開く</Button>
        <Dialog className="sm:max-w-sm">
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
            <DialogClose variant="outline">キャンセル</DialogClose>
            <Button type="submit">変更を保存</Button>
          </DialogFooter>
        </Dialog>
      </form>
    </DialogTrigger>
  )
}
