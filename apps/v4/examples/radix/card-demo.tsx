import { Button } from "@/components/ui/radix/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/radix/card"
import { Input } from "@/components/ui/radix/input"
import { Label } from "@/components/ui/radix/label"

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>アカウントにログイン</CardTitle>
        <CardDescription>
          アカウントにログインするには、以下にメールアドレスを入力してください
        </CardDescription>
        <CardAction>
          <Button variant="link">新規登録</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">パスワード</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  パスワードをお忘れですか？
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          ログイン
        </Button>
        <Button variant="outline" className="w-full">
          Googleでログイン
        </Button>
      </CardFooter>
    </Card>
  )
}
