import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/aria/alert-dialog"
import { Button } from "@/components/ui/aria/button"

export default function AlertDialogDemo() {
  return (
    <AlertDialogTrigger>
      <Button variant="outline">ダイアログを表示</Button>
      <AlertDialog>
        <AlertDialogHeader>
          <AlertDialogTitle>本当によろしいですか?</AlertDialogTitle>
          <AlertDialogDescription>
            この操作は取り消せません。アカウントがサーバーから完全に削除されます。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction>続行</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialog>
    </AlertDialogTrigger>
  )
}
