import { AlertTriangleIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/radix/alert"

export default function AlertColors() {
  return (
    <Alert className="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
      <AlertTriangleIcon />
      <AlertTitle>サブスクリプションの有効期限が3日後に切れます。</AlertTitle>
      <AlertDescription>
        サービスの中断を避けるには今すぐ更新するか、有料プランにアップグレードして
        ご利用を継続してください。
      </AlertDescription>
    </Alert>
  )
}
