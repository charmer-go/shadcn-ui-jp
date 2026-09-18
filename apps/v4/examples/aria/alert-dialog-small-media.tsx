import { BluetoothIcon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/aria/alert-dialog"
import { Button } from "@/components/ui/aria/button"

export function AlertDialogSmallWithMedia() {
  return (
    <AlertDialogTrigger>
      <Button variant="outline">ダイアログを表示</Button>
      <AlertDialog size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <BluetoothIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>アクセサリの接続を許可しますか?</AlertDialogTitle>
          <AlertDialogDescription>
            このデバイスへのUSBアクセサリの接続を許可しますか?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>許可しない</AlertDialogCancel>
          <AlertDialogAction>許可</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialog>
    </AlertDialogTrigger>
  )
}
