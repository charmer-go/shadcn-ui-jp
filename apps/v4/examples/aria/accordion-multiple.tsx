import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/aria/accordion"

const items = [
  {
    value: "notifications",
    trigger: "通知設定",
    content:
      "通知の受け取り方法を管理します。更新情報のメール通知や、モバイル端末へのプッシュ通知を有効にできます。",
  },
  {
    value: "privacy",
    trigger: "プライバシーとセキュリティ",
    content:
      "プライバシー設定とセキュリティの環境設定を管理します。二段階認証の有効化、接続済みデバイスの管理、アクティブなセッションの確認、データ共有設定の変更が行えます。また、データのダウンロードやアカウントの削除も可能です。",
  },
  {
    value: "billing",
    trigger: "請求とサブスクリプション",
    content:
      "現在のプラン、お支払い履歴、今後の請求書を確認できます。お支払い方法の更新、プランの変更、サブスクリプションの解約が行えます。",
  },
]

export function AccordionMultiple() {
  return (
    <Accordion
      allowsMultipleExpanded
      className="max-w-lg"
      defaultExpandedKeys={["notifications"]}
    >
      {items.map((item) => (
        <AccordionItem key={item.value} id={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
