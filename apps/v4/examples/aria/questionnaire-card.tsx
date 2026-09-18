"use client"

import * as React from "react"
import { toast } from "sonner"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/aria/card"
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
  {
    choices: [{ value: "fix" }, { value: "refactor" }, { value: "docs" }],
    name: "task",
    required: true,
  },
  {
    choices: [{ value: "summary" }, { value: "files" }, { value: "review" }],
    name: "output",
    required: true,
  },
] as const

export function QuestionnaireCard() {
  const taskTitleId = React.useId()
  const outputTitleId = React.useId()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("エージェントタスクを作成しました", {
      description: `タスク: ${formData.get("task") ?? "なし"} ・ 引き渡し: ${formData.get("output") ?? "なし"}`,
    })
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="task"
      items={items}
      shortcuts="numbers"
      onSubmit={handleSubmit}
    >
      <Card>
        <QuestionnaireItem aria-labelledby={taskTitleId} name="task" required>
          <CardHeader>
            <QuestionnaireTitle id={taskTitleId} render={<CardTitle />}>
              エージェントは何に取り組むべきですか？
            </QuestionnaireTitle>
            <QuestionnaireDescription render={<CardDescription />}>
              次に処理すべきタスクを選択してください。
            </QuestionnaireDescription>
            <CardAction>
              <QuestionnaireProgress />
            </CardAction>
          </CardHeader>
          <CardContent>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="fix">
                失敗しているテストを修正する
              </QuestionnaireChoice>
              <QuestionnaireChoice value="refactor">
                データレイヤーをリファクタリングする
              </QuestionnaireChoice>
              <QuestionnaireChoice value="docs">
                インテグレーションガイドを更新する
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </CardContent>
        </QuestionnaireItem>

        <QuestionnaireItem
          aria-labelledby={outputTitleId}
          name="output"
          required
        >
          <CardHeader>
            <QuestionnaireTitle id={outputTitleId} render={<CardTitle />}>
              最終的な引き渡しには何を含めるべきですか？
            </QuestionnaireTitle>
            <QuestionnaireDescription render={<CardDescription />}>
              レビューに必要な詳細のレベルを選択してください。
            </QuestionnaireDescription>
            <CardAction>
              <QuestionnaireProgress />
            </CardAction>
          </CardHeader>
          <CardContent>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="summary">
                要約のみ
              </QuestionnaireChoice>
              <QuestionnaireChoice value="files">
                要約と変更ファイル
              </QuestionnaireChoice>
              <QuestionnaireChoice value="review">
                完全なレビュー引き渡し
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </CardContent>
        </QuestionnaireItem>

        <CardFooter>
          <QuestionnaireActions className="w-full">
            <QuestionnairePrevious />
            <QuestionnaireNext>次へ</QuestionnaireNext>
            <QuestionnaireSubmit>タスクを作成</QuestionnaireSubmit>
          </QuestionnaireActions>
        </CardFooter>
      </Card>
    </Questionnaire>
  )
}
