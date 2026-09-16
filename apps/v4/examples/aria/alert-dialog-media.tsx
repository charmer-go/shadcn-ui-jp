import { CircleFadingPlusIcon } from "lucide-react"

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

export function AlertDialogWithMedia() {
  return (
    <AlertDialogTrigger>
      <Button variant="outline">プロジェクトを共有</Button>
      <AlertDialog>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <CircleFadingPlusIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>このプロジェクトを共有しますか?</AlertDialogTitle>
          <AlertDialogDescription>
            このリンクを知っている人は誰でも、このプロジェクトを閲覧・編集できます。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction>共有</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialog>
    </AlertDialogTrigger>
  )
}
