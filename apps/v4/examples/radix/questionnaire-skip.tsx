"use client"

import * as React from "react"
import type { QuestionnaireItemStatus } from "@shadcn/react/questionnaire"
import { toast } from "sonner"

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/radix/questionnaire"

const items = [
  { name: "task", required: true },
  { name: "constraints" },
  { name: "review", required: true },
] as const

export function QuestionnaireSkipExample() {
  const [constraintStatus, setConstraintStatus] =
    React.useState<QuestionnaireItemStatus>("unanswered")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const answers = {
      task: formData.get("task"),
      constraints: formData.get("constraints"),
      constraintStatus,
      review: formData.get("review"),
    }

    toast("エージェントブリーフを送信しました", {
      description: `タスク: ${answers.task ?? "なし"} ・ 制約: ${
        answers.constraintStatus === "skipped"
          ? "スキップ"
          : (answers.constraints ?? "なし")
      } ・ レビュー: ${answers.review ?? "なし"}`,
    })
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="task"
      items={items}
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="task" required>
        <QuestionnaireTitle>どのような変更ですか？</QuestionnaireTitle>
        <QuestionnaireDescription>
          作業内容を最もよく表すカテゴリーを選択してください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="feature">新機能</QuestionnaireChoice>
          <QuestionnaireChoice value="fix">バグ修正</QuestionnaireChoice>
          <QuestionnaireChoice value="refactor">
            リファクタリング
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem
        name="constraints"
        onStatusChange={setConstraintStatus}
      >
        <QuestionnaireTitle>実装上の制約はありますか？</QuestionnaireTitle>
        <QuestionnaireDescription>
          必要であれば回答するか、意図的にこの質問をスキップしてください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="no-dependencies">
            依存関係を追加しない
          </QuestionnaireChoice>
          <QuestionnaireChoice value="no-migrations">
            データベースを変更しない
          </QuestionnaireChoice>
          <QuestionnaireChoice value="preserve-api">
            公開APIを維持する
          </QuestionnaireChoice>
          <QuestionnaireInput
            aria-label="その他の実装上の制約"
            placeholder="その他の制約を記述してください…"
          />
        </QuestionnaireChoices>
      </QuestionnaireItem>

      <QuestionnaireItem name="review" required>
        <QuestionnaireTitle>
          作業はどのようにレビューされるべきですか？
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          エージェントが引き渡し前に完了すべきチェックを選択してください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="tests">
            テストスイートを実行する
          </QuestionnaireChoice>
          <QuestionnaireChoice value="diff">
            最終的な差分をレビューする
          </QuestionnaireChoice>
          <QuestionnaireChoice value="both">
            テストと差分レビューの両方
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext>次へ</QuestionnaireNext>
        <QuestionnaireSubmit>ブリーフを送信</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
