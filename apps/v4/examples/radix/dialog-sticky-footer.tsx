import { Button } from "@/components/ui/radix/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/radix/dialog"

export function DialogStickyFooter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">固定フッター</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>固定フッター</DialogTitle>
          <DialogDescription>
            このダイアログには、コンテンツをスクロールしても表示され続ける固定フッターがあります。
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
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">閉じる</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
