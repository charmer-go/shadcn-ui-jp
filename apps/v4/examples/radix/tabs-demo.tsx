import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/radix/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/radix/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">概要</TabsTrigger>
        <TabsTrigger value="analytics">分析</TabsTrigger>
        <TabsTrigger value="reports">レポート</TabsTrigger>
        <TabsTrigger value="settings">設定</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>概要</CardTitle>
            <CardDescription>
              主要な指標と最近のプロジェクトの活動状況を確認できます。進行中のすべてのプロジェクトの進捗を追跡します。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            進行中のプロジェクトが12件、保留中のタスクが3件あります。
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>分析</CardTitle>
            <CardDescription>
              パフォーマンスとユーザーエンゲージメントの指標を追跡します。トレンドを監視し、成長の機会を見つけます。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            ページビューは前月比25%増加しています。
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>レポート</CardTitle>
            <CardDescription>
              詳細なレポートを生成してダウンロードできます。分析用に複数の形式でデータをエクスポートします。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            エクスポート可能なレポートが5件用意されています。
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>設定</CardTitle>
            <CardDescription>
              アカウントの環境設定とオプションを管理します。ニーズに合わせて使用体験をカスタマイズします。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            通知、セキュリティ、テーマを設定します。
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
