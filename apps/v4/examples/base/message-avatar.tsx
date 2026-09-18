import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/base/avatar"
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
} from "@/components/ui/base/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/base/message"

export function MessageAvatarDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-12">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/03.png" alt="@avatar" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              依存関係のインストール中にビルドが失敗しました。
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/10.png" alt="@avatar" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>正確なエラーを共有してもらえますか？</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/03.png" alt="@avatar" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>ログからのエラーです</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>
                ビルドで問題が発生しました。ライブラリが正しくインストールされていません。もう一度ビルドを実行してみてください。
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
    </div>
  )
}
