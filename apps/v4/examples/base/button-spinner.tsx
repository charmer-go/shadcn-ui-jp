import { Button } from "@/components/ui/base/button"
import { Spinner } from "@/components/ui/base/spinner"

export default function ButtonLoading() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        生成中
      </Button>
      <Button variant="secondary" disabled>
        ダウンロード中
        <Spinner data-icon="inline-start" />
      </Button>
    </div>
  )
}
