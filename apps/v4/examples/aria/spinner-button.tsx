import { Button } from "@/components/ui/aria/button"
import { Spinner } from "@/components/ui/aria/spinner"

export function SpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button isDisabled size="sm">
        <Spinner data-icon="inline-start" />
        読み込み中...
      </Button>
      <Button variant="outline" isDisabled size="sm">
        <Spinner data-icon="inline-start" />
        お待ちください
      </Button>
      <Button variant="secondary" isDisabled size="sm">
        <Spinner data-icon="inline-start" />
        処理中
      </Button>
    </div>
  )
}
