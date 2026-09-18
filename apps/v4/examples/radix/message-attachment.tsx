"use client"

import { DownloadIcon, FileTextIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/radix/attachment"
import { Bubble, BubbleContent } from "@/components/ui/radix/bubble"
import { Message, MessageContent } from "@/components/ui/radix/message"

export function MessageAttachmentDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message align="end">
        <MessageContent>
          <Attachment orientation="vertical">
            <AttachmentMedia variant="image">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80"
                alt="ワークスペース"
              />
            </AttachmentMedia>
          </Attachment>
          <Bubble>
            <BubbleContent>
              画像です。PDFに追加してもらえますか？表紙に使ってください。
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              完了しました。画像を表紙に追加したPDFです。
            </BubbleContent>
          </Bubble>
          <Attachment>
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
              <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction
                type="button"
                title="ダウンロード"
                aria-label="ダウンロード"
                size="icon-sm"
                variant="secondary"
              >
                <DownloadIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>ありがとう。いい感じです。</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}
