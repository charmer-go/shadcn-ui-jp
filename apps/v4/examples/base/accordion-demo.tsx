import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/base/accordion"

export default function AccordionDemo() {
  return (
    <Accordion defaultValue={["shipping"]} className="max-w-lg">
      <AccordionItem value="shipping">
        <AccordionTrigger>配送方法には何がありますか？</AccordionTrigger>
        <AccordionContent>
          通常配送（5～7日）、速達配送（2～3日）、翌日配送をご用意しています。海外へのご注文は送料無料です。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>返品ポリシーを教えてください。</AccordionTrigger>
        <AccordionContent>
          返品は30日以内であれば承ります。商品は未使用で、元の梱包のままである必要があります。返金は5～7営業日以内に処理されます。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>カスタマーサポートにはどう連絡できますか？</AccordionTrigger>
        <AccordionContent>
          メール、ライブチャット、電話でご連絡いただけます。営業日は24時間以内に返信いたします。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
