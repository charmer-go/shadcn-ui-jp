import { CheckCircle2Icon, InfoIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/aria/alert"

export default function AlertDemo() {
  return (
    <div className="grid w-full max-w-md items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>支払いが完了しました</AlertTitle>
        <AlertDescription>
          $29.99のお支払いが処理されました。領収書がメールアドレスに送信されました。
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>新機能を利用できます</AlertTitle>
        <AlertDescription>
          ダークモードのサポートを追加しました。アカウント設定から有効にできます。
        </AlertDescription>
      </Alert>
    </div>
  )
}
