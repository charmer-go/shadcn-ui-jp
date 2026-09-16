"use client"

import * as React from "react"
import { toast } from "sonner"

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
  { name: "task", required: true },
  { name: "review", required: true },
  { name: "delivery", required: true },
] as const

const itemClassName =
  "data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-bottom-2 data-active:duration-300 motion-reduce:animate-none"

export function QuestionnaireAnimated() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("エージェントワークフローを保存しました", {
      description: `タスク: ${formData.get("task") ?? "なし"} ・ レビュー: ${formData.get("review") ?? "なし"} ・ 納品: ${formData.get("delivery") ?? "なし"}`,
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

      <QuestionnaireItem className={itemClassName} name="task" required>
        <QuestionnaireTitle>エージェントは何をすべきですか？</QuestionnaireTitle>
        <QuestionnaireDescription>
          この実行のタスクを選択してください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="implement">
            依頼された変更を実装する
          </QuestionnaireChoice>
          <QuestionnaireChoice value="debug">
            現在の動作をデバッグする
          </QuestionnaireChoice>
          <QuestionnaireChoice value="review">
            実装をレビューする
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem className={itemClassName} name="review" required>
        <QuestionnaireTitle>
          作業はどのようにレビューされるべきですか？
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          検証の深さを選択してください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="targeted">
            対象を絞ったチェック
          </QuestionnaireChoice>
          <QuestionnaireChoice value="complete">
            テストスイート全体
          </QuestionnaireChoice>
          <QuestionnaireChoice value="manual">
            テストと手動QA
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem className={itemClassName} name="delivery" required>
        <QuestionnaireTitle>
          結果はどのように納品されるべきですか？
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          最終的な引き渡し形式を選択してください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="summary">
            簡潔な要約
          </QuestionnaireChoice>
          <QuestionnaireChoice value="diff">
            要約と変更ファイル
          </QuestionnaireChoice>
          <QuestionnaireChoice value="handoff">
            詳細なレビュー引き渡し
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext>次へ</QuestionnaireNext>
        <QuestionnaireSubmit>ワークフローを保存</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
