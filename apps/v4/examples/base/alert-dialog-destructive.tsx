import { Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/base/alert-dialog"
import { Button } from "@/components/ui/base/button"

export function AlertDialogDestructive() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="destructive">チャットを削除</Button>}
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>チャットを削除しますか?</AlertDialogTitle>
          <AlertDialogDescription>
            このチャットの会話は完全に削除されます。保存された記憶を削除するには{" "}
            <a href="#">設定</a>をご確認ください。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">キャンセル</AlertDialogCancel>
          <AlertDialogAction variant="destructive">削除</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
