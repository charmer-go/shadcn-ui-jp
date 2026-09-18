import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/base/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/base/card"

const items = [
  {
    value: "plans",
    trigger: "どのようなサブスクリプションプランがありますか？",
    content:
      "スターター（月額9ドル）、プロフェッショナル（月額29ドル）、エンタープライズ（月額99ドル）の3つのプランをご用意しています。各プランではストレージ容量が増え、APIアクセス、優先サポート、チームコラボレーション機能をご利用いただけます。",
  },
  {
    value: "billing",
    trigger: "請求はどのように行われますか？",
    content:
      "請求は各サイクルの開始時に自動的に行われます。主要なクレジットカードとPayPalに対応しており、エンタープライズのお客様にはACH送金もご利用いただけます。お支払いごとにメールで請求書をお送りします。",
  },
  {
    value: "cancel",
    trigger: "サブスクリプションを解約するにはどうすればよいですか？",
    content:
      "アカウント設定からいつでもサブスクリプションを解約できます。解約手数料やペナルティは一切かかりません。現在の請求期間の終了まで引き続きご利用いただけます。",
  },
]

export default function AccordionCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>サブスクリプションと請求</CardTitle>
        <CardDescription>
          アカウント、プラン、お支払い、解約に関するよくある質問です。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["plans"]}>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
