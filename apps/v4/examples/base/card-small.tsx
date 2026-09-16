import { ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/base/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/base/card"

export function CardSmall() {
  const featureName = "スケジュールレポート"

  return (
    <Card size="sm" className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>{featureName}</CardTitle>
        <CardDescription>
          週次スナップショット。手動でのエクスポートはもう不要です。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 py-2 text-sm">
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>スケジュールを選択（毎日または毎週）。</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>チャンネルや特定のチームメンバーに送信。</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>グラフ、表、主要な指標を含める。</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button size="sm" className="w-full">
          スケジュールレポートを設定
        </Button>
        <Button variant="outline" size="sm" className="w-full">
          新機能を見る
        </Button>
      </CardFooter>
    </Card>
  )
}
