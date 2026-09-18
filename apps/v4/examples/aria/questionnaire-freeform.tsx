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
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/aria/questionnaire"

const items = [
  {
    choices: [
      { value: "incremental" },
      { value: "module" },
      { value: "rewrite" },
    ],
    name: "approach",
    required: true,
  },
] as const

export function QuestionnaireFreeform() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const approach = new FormData(event.currentTarget).get("approach")

    toast("アプローチを選択しました", {
      description: `アプローチ: ${approach ?? "なし"}`,
    })
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      items={items}
      shortcuts="letters"
      onSubmit={handleSubmit}
    >
      <QuestionnaireItem name="approach" required>
        <QuestionnaireTitle>
          エージェントはこのリファクタリングにどのようにアプローチすべきですか？
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          戦略を選択するか、より具体的な指示を記述してください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="incremental">
            最小限の安全な変更を行う
          </QuestionnaireChoice>
          <QuestionnaireChoice value="module">
            モジュールを1つずつリファクタリングする
          </QuestionnaireChoice>
          <QuestionnaireChoice value="rewrite">
            実装を完全に置き換える
          </QuestionnaireChoice>
          <QuestionnaireInput
            aria-label="その他のリファクタリング方法"
            placeholder="別のアプローチを記述してください…"
          />
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnaireSubmit>このアプローチを使用</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
