"use client"

import * as React from "react"

import { Button } from "@/components/ui/aria/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/aria/card"
import { Input } from "@/components/ui/aria/input"
import { Label } from "@/components/ui/aria/label"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/aria/toggle-group"

const spacingOptions = [
  {
    className: "[--card-spacing:--spacing(4)]",
    label: "16px",
    value: "4",
  },
  {
    className: "[--card-spacing:--spacing(5)]",
    label: "20px",
    value: "5",
  },
  {
    className: "[--card-spacing:--spacing(6)]",
    label: "24px",
    value: "6",
  },
  {
    className: "[--card-spacing:--spacing(8)]",
    label: "32px",
    value: "8",
  },
]

export function CardSpacing() {
  const [spacing, setSpacing] = React.useState("4")
  const selectedSpacing = spacingOptions.find(
    (option) => option.value === spacing
  )

  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <ToggleGroup
        selectedKeys={[spacing]}
        onSelectionChange={(keys) => {
          const key = Array.from(keys)[0]
          if (key) {
            setSpacing(String(key))
          }
        }}
        variant="outline"
        size="sm"
        className="justify-center"
      >
        {spacingOptions.map((option) => (
          <ToggleGroupItem key={option.value} id={option.value}>
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Card className={selectedSpacing?.className}>
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
                <Label htmlFor="email-spacing">メールアドレス</Label>
                <Input
                  id="email-spacing"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password-spacing">パスワード</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    パスワードをお忘れですか？
                  </a>
                </div>
                <Input id="password-spacing" type="password" required />
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
    </div>
  )
}
