import { CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/radix/alert"

export default function AlertBasic() {
  return (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>アカウントを更新しました</AlertTitle>
      <AlertDescription>
        プロフィール情報が保存されました。変更内容はすぐに反映されます。
      </AlertDescription>
    </Alert>
  )
}
