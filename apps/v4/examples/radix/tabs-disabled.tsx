import { Tabs, TabsList, TabsTrigger } from "@/components/ui/radix/tabs"

export function TabsDisabled() {
  return (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">ホーム</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          無効
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
