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
import { Input } from "@/components/ui/aria/input"
import { Label } from "@/components/ui/aria/label"

export function DialogCloseButton() {
  return (
    <DialogTrigger>
      <Button variant="outline">共有</Button>
      <Dialog className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>リンクを共有</DialogTitle>
          <DialogDescription>
            このリンクを知っている人は誰でも閲覧できます。
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              リンク
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose type="button">閉じる</DialogClose>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
  )
}
