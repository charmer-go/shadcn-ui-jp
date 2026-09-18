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
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/base/questionnaire"

const items = [
  {
    choices: [
      { value: "source" },
      { value: "tests" },
      { value: "docs" },
      { value: "history" },
    ],
    name: "context",
    required: true,
  },
] as const

export function QuestionnaireMultiple() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const context = new FormData(event.currentTarget).getAll("context")

    toast("コンテキストを選択しました", {
      description: `コンテキスト: ${context.join(", ") || "なし"}`,
    })
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      items={items}
      shortcuts="letters"
      onSubmit={handleSubmit}
    >
      <QuestionnaireItem name="context" multiple required>
        <QuestionnaireTitle>
          エージェントはどのコンテキストを確認すべきですか？
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          実装に影響する可能性のあるソースをすべて選択してください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="source">
            関連するソースファイル
          </QuestionnaireChoice>
          <QuestionnaireChoice value="tests">
            既存のテスト
          </QuestionnaireChoice>
          <QuestionnaireChoice value="docs">
            アーキテクチャドキュメント
          </QuestionnaireChoice>
          <QuestionnaireChoice value="history">
            最近のコミット履歴
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnaireSubmit>コンテキストを共有</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
