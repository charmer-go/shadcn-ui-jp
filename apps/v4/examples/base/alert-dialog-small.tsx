import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/base/alert-dialog"
import { Button } from "@/components/ui/base/button"

export function AlertDialogSmall() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">ダイアログを表示</Button>}
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>アクセサリの接続を許可しますか?</AlertDialogTitle>
          <AlertDialogDescription>
            このデバイスへのUSBアクセサリの接続を許可しますか?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>許可しない</AlertDialogCancel>
          <AlertDialogAction>許可</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
