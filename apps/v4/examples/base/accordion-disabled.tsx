import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/base/accordion"

export default function AccordionDisabled() {
  return (
    <Accordion className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>アカウント履歴を確認できますか？</AccordionTrigger>
        <AccordionContent>
          はい、ダッシュボードの「アカウント履歴」セクションで、取引履歴、プラン変更、サポートチケットを含むすべてのアカウント履歴を確認できます。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>プレミアム機能の情報</AccordionTrigger>
        <AccordionContent>
          このセクションにはプレミアム機能に関する情報が含まれています。この内容を利用するにはプランをアップグレードしてください。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>メールアドレスを変更するにはどうすればよいですか？</AccordionTrigger>
        <AccordionContent>
          アカウント設定でメールアドレスを変更できます。変更を確認するため、新しいメールアドレス宛に確認メールが送信されます。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
