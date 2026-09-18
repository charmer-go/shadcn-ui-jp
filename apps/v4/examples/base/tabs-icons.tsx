import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/base/tabs"

export function TabsIcons() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon />
          プレビュー
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          コード
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
