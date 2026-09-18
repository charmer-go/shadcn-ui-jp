import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/aria/accordion"

const items = [
  {
    value: "item-1",
    trigger: "パスワードをリセットするにはどうすればよいですか？",
    content:
      "ログインページで「パスワードをお忘れですか？」をクリックし、メールアドレスを入力してください。パスワードをリセットするためのリンクをお送りします。リンクの有効期限は24時間です。",
  },
  {
    value: "item-2",
    trigger: "サブスクリプションプランを変更できますか？",
    content:
      "はい、アカウント設定からいつでもプランのアップグレードやダウングレードができます。変更内容は次回の請求サイクルに反映されます。",
  },
  {
    value: "item-3",
    trigger: "どのお支払い方法に対応していますか？",
    content:
      "主要なクレジットカード、PayPal、銀行振込に対応しています。すべてのお支払いは決済パートナーを通じて安全に処理されます。",
  },
]

export function AccordionBasic() {
  return (
    <Accordion defaultExpandedKeys={["item-1"]} className="max-w-lg">
      {items.map((item) => (
        <AccordionItem key={item.value} id={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
