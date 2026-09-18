import { Button } from "@/components/ui/base/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/base/dialog"

export function DialogNoCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        閉じるボタンなし
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>閉じるボタンなし</DialogTitle>
          <DialogDescription>
            このダイアログには右上に閉じるボタンがありません。
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
