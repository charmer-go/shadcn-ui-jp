import { Markdown } from "@/components/markdown"
import { Bubble, BubbleContent } from "@/components/ui/base/bubble"
import { Message, MessageContent } from "@/components/ui/base/message"

const response = `メッセージ内でMarkdownをレンダリングする方法は次のとおりです:

1. アシスタントのテキストは **Markdown** を通してレンダリングします。
2. ユーザーのメッセージはプレーンテキストのままにします。
3. レスポンスを枠なしにするには \`ghost\` バブルを使用します。
`

export function MessageMarkdownDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              メッセージ内でMarkdownをレンダリングするには？
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="ghost">
            <BubbleContent>
              <Markdown>{response}</Markdown>
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}
