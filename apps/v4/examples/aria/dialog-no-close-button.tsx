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

export function DialogNoCloseButton() {
  return (
    <DialogTrigger>
      <Button variant="outline">閉じるボタンなし</Button>
      <Dialog showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>閉じるボタンなし</DialogTitle>
          <DialogDescription>
            このダイアログには右上に閉じるボタンがありません。
          </DialogDescription>
        </DialogHeader>
      </Dialog>
    </DialogTrigger>
  )
}
