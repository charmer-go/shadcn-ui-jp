import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/radix/button"

export default function ButtonSize() {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <Button size="xs" variant="outline">
          エクストラスモール
        </Button>
        <Button size="icon-xs" aria-label="送信" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">
          スモール
        </Button>
        <Button size="icon-sm" aria-label="送信" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline">デフォルト</Button>
        <Button size="icon" aria-label="送信" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline" size="lg">
          ラージ
        </Button>
        <Button size="icon-lg" aria-label="送信" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  )
}
