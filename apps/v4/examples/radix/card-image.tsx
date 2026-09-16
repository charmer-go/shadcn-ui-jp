import { Badge } from "@/components/ui/radix/badge"
import { Button } from "@/components/ui/radix/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/radix/card"

export function CardImage() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="イベントのカバー画像"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">注目</Badge>
        </CardAction>
        <CardTitle>デザインシステム勉強会</CardTitle>
        <CardDescription>
          コンポーネントAPI、アクセシビリティ、開発スピードの向上について実践的にお話しします。
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">イベントを見る</Button>
      </CardFooter>
    </Card>
  )
}
