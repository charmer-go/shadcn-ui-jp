import { Tabs, TabsList, TabsTrigger } from "@/components/ui/aria/tabs"

export function TabsDisabled() {
  return (
    <Tabs defaultSelectedKey="home">
      <TabsList>
        <TabsTrigger id="home">ホーム</TabsTrigger>
        <TabsTrigger id="settings" isDisabled>
          無効
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
