import { Tabs, TabsList, TabsTrigger } from "@/components/ui/aria/tabs"

export function TabsVertical() {
  return (
    <Tabs defaultSelectedKey="account" orientation="vertical">
      <TabsList>
        <TabsTrigger id="account">アカウント</TabsTrigger>
        <TabsTrigger id="password">パスワード</TabsTrigger>
        <TabsTrigger id="notifications">通知</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
