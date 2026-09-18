import { Button } from "@/components/ui/radix/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/radix/dialog"

export function DialogScrollableContent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">スクロール可能なコンテンツ</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>スクロール可能なコンテンツ</DialogTitle>
          <DialogDescription>
            スクロール可能なコンテンツを持つダイアログです。
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              これはサンプルのテキストです。ダイアログの内容が長くなった場合に、
              スクロールがどのように機能するかを確認するためのダミーコンテンツです。
              実際のアプリケーションでは、ここに本文やリスト、フォームなど
              任意のコンテンツを配置できます。内容が画面の高さを超える場合、
              このエリアだけが独立してスクロールします。
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
