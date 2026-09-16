import { CopyIcon, FileSearchIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/aria/attachment"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/aria/dialog"

export function AttachmentTriggerDemo() {
  return (
    <div className="mx-auto w-full max-w-sm py-12">
      <DialogTrigger>
        <Attachment className="w-full">
          <AttachmentMedia>
            <FileSearchIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>research-summary.pdf</AttachmentTitle>
            <AttachmentDescription>プレビューダイアログを開く</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="リンクをコピー">
              <CopyIcon />
            </AttachmentAction>
            <AttachmentAction aria-label="research-summary.pdfを削除">
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
          <DialogTrigger>
            <AttachmentTrigger aria-label="research-summary.pdfをプレビュー" />
          </DialogTrigger>
        </Attachment>
        <Dialog className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>research-summary.pdf</DialogTitle>
            <DialogDescription>
              添付ファイルのトリガーはカード全体を占め、ダイアログを開きます。
              一方でアクションボタンはその上に独立してクリックできる状態のままです。
            </DialogDescription>
          </DialogHeader>
        </Dialog>
      </DialogTrigger>
    </div>
  )
}
