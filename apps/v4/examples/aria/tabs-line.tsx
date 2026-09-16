import { Tabs, TabsList, TabsTrigger } from "@/components/ui/aria/tabs"

export function TabsLine() {
  return (
    <Tabs defaultSelectedKey="overview">
      <TabsList variant="line">
        <TabsTrigger id="overview">概要</TabsTrigger>
        <TabsTrigger id="analytics">分析</TabsTrigger>
        <TabsTrigger id="reports">レポート</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
