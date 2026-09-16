import { Button } from "@/components/ui/radix/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/radix/card"

export function CardEdgeToEdge() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>利用規約</CardTitle>
        <CardDescription>
          同意する前に、規約の内容をご確認ください。
        </CardDescription>
      </CardHeader>
      <CardContent className="-mb-(--card-spacing)">
        <div className="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
          <p>
            本規約は、共有ドキュメント、プロジェクトファイル、共同作業ツールへのアクセスを含む、ワークスペースのご利用に適用されます。
          </p>
          <p>
            アップロードするコンテンツについてはご自身に責任があり、チームメンバーがそれを閲覧・編集するための適切な権限を持っていることを確認する責任も負います。
          </p>
          <p>
            サービスの発展に伴い、機能や利用制限を更新することがあります。それらの変更がワークフローに重大な影響を与える場合は、ワークスペースの管理者へ通知します。
          </p>
          <p>
            継続してご利用いただくことで、アカウントの認証情報を安全に管理し、所属組織の利用規約を遵守することに同意したものとみなされます。
          </p>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">拒否</Button>
        <Button>同意する</Button>
      </CardFooter>
    </Card>
  )
}
