import { Button } from "@/components/ui/aria/button"
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/aria/dialog"

export function DialogStickyFooter() {
  return (
    <DialogTrigger>
      <Button variant="outline">固定フッター</Button>
      <Dialog>
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
          <DialogClose variant="outline">閉じる</DialogClose>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
  )
}
