import { AlertCircleIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/radix/alert"

export default function AlertDestructive() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>支払いに失敗しました</AlertTitle>
      <AlertDescription>
        お支払いを処理できませんでした。お支払い方法をご確認の上、もう一度お試しください。
      </AlertDescription>
    </Alert>
  )
}
