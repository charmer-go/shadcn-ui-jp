import { Button } from "@/components/ui/radix/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/radix/card"

export function CardSmall() {
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>小さいカード</CardTitle>
        <CardDescription>
          このカードは小さいサイズのバリアントを使用しています。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          カードコンポーネントはsizeプロパティに対応しており、
          &quot;sm&quot;を指定するとよりコンパクトな見た目になります。
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          アクション
        </Button>
      </CardFooter>
    </Card>
  )
}
