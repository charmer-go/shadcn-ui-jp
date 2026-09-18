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

export function AlertDialogBasic() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">ダイアログを表示</Button>}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>本当によろしいですか?</AlertDialogTitle>
          <AlertDialogDescription>
            この操作は取り消せません。アカウントが完全に削除され、サーバーからデータが削除されます。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction>続行</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
