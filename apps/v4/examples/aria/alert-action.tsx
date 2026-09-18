import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/aria/alert"
import { Button } from "@/components/ui/aria/button"

export default function AlertActionExample() {
  return (
    <Alert className="max-w-md">
      <AlertTitle>ダークモードを利用できます</AlertTitle>
      <AlertDescription>
        プロフィール設定から有効にしてご利用いただけます。
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="default">
          有効にする
        </Button>
      </AlertAction>
    </Alert>
  )
}
