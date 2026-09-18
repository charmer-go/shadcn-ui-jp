import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/aria/tabs"

export function TabsIcons() {
  return (
    <Tabs defaultSelectedKey="preview">
      <TabsList>
        <TabsTrigger id="preview">
          <AppWindowIcon />
          プレビュー
        </TabsTrigger>
        <TabsTrigger id="code">
          <CodeIcon />
          コード
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
