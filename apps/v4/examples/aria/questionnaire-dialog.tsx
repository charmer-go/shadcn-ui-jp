"use client"

import * as React from "react"
import { toast } from "sonner"

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
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/aria/questionnaire"

const items = [
  { name: "scope", required: true },
  { name: "tests", required: true },
] as const

export function QuestionnaireDialog() {
  const [open, setOpen] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    setOpen(false)
    toast("確認事項を送信しました", {
      description: `スコープ: ${formData.get("scope") ?? "なし"} ・ 検証: ${formData.get("tests") ?? "なし"}`,
    })
  }

  return (
    <DialogTrigger isOpen={open} onOpenChange={setOpen}>
      <Button variant="outline">確認事項を開く</Button>
      <Dialog>
        <Questionnaire
          defaultItem="scope"
          items={items}
          onSubmit={handleSubmit}
        >
          <QuestionnaireItem name="scope" required>
            <DialogHeader>
              <QuestionnaireProgress />
              <QuestionnaireTitle render={<DialogTitle />}>
                どのファイルが対象範囲ですか？
              </QuestionnaireTitle>
              <QuestionnaireDescription render={<DialogDescription />}>
                エージェントがワークスペースを更新できる範囲を選択してください。
              </QuestionnaireDescription>
            </DialogHeader>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="component">
                コンポーネントのみ
              </QuestionnaireChoice>
              <QuestionnaireChoice value="feature">
                機能ディレクトリ全体
              </QuestionnaireChoice>
              <QuestionnaireChoice value="workspace">
                関連するワークスペースファイル全般
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>

          <QuestionnaireItem name="tests" required>
            <DialogHeader>
              <QuestionnaireProgress />
              <QuestionnaireTitle render={<DialogTitle />}>
                どの程度の検証が必要ですか？
              </QuestionnaireTitle>
              <QuestionnaireDescription render={<DialogDescription />}>
                引き渡し前にエージェントが実行すべきチェックを選択してください。
              </QuestionnaireDescription>
            </DialogHeader>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="targeted">
                対象を絞ったテスト
              </QuestionnaireChoice>
              <QuestionnaireChoice value="package">
                パッケージテスト
              </QuestionnaireChoice>
              <QuestionnaireChoice value="full">
                ワークスペース全体の検証
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>

          <DialogFooter>
            <DialogClose type="button" variant="outline">
              キャンセル
            </DialogClose>
            <QuestionnaireActions>
              <QuestionnairePrevious />
              <QuestionnaireNext>次へ</QuestionnaireNext>
              <QuestionnaireSubmit>回答を送信</QuestionnaireSubmit>
            </QuestionnaireActions>
          </DialogFooter>
        </Questionnaire>
      </Dialog>
    </DialogTrigger>
  )
}
