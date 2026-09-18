import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/radix/accordion"

const items = [
  {
    value: "billing",
    trigger: "請求はどのように行われますか？",
    content:
      "月額プランと年額プランをご用意しています。請求は各サイクルの開始時に行われ、いつでも解約できます。すべてのプランに自動バックアップ、24時間365日のサポート、チームメンバー数無制限が含まれます。",
  },
  {
    value: "security",
    trigger: "データは安全に保護されていますか？",
    content:
      "はい。エンドツーエンド暗号化、SOC 2 Type IIへの準拠、定期的な第三者によるセキュリティ監査を実施しています。すべてのデータは業界標準のプロトコルを使用し、保存時および通信時に暗号化されます。",
  },
  {
    value: "integration",
    trigger: "どのような連携に対応していますか？",
    content:
      "Slack、Zapier、Salesforce、HubSpotなど、500以上の人気ツールと連携しています。REST APIとWebhookを使用して、独自の連携を構築することもできます。",
  },
]

export default function AccordionBorders() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-lg rounded-lg border"
      defaultValue="billing"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b px-4 last:border-b-0"
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
