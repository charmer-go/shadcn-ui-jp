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
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/base/questionnaire"

const questionnaireItems = [
  {
    choices: [
      {
        description: "エージェントが実行した内容と返ってきた結果を表示します。",
        label: "ツール呼び出しのタイムライン",
        value: "tool-calls",
      },
      {
        description: "機密性の高い操作や破壊的な操作の前に確認を求めます。",
        label: "承認チェックポイント",
        value: "approvals",
      },
      {
        description: "委任された作業と結果を追いやすくします。",
        label: "サブエージェントへの引き渡し",
        value: "handoffs",
      },
    ],
    description: "方向性を選択するか、別のタスクを記述してください。",
    input: {
      label: "その他のエージェント機能",
      placeholder: "別の機能を記述してください…",
    },
    name: "direction",
    required: true,
    title: "エージェントが次に取り組むべきことは何ですか？",
  },
  {
    choices: [
      { label: "進捗", value: "progress" },
      { label: "決定事項", value: "decisions" },
      { label: "リスク", value: "risks" },
      { label: "次のステップ", value: "next-step" },
    ],
    description: "該当するものをすべて選択するか、この質問をスキップしてください。",
    multiple: true,
    name: "signals",
    required: false,
    title: "進捗更新には何を含めるべきですか？",
  },
  {
    choices: [
      { label: "今すぐ開始", value: "now" },
      { label: "次の開発サイクル", value: "next-cycle" },
      { label: "バックログに追加", value: "backlog" },
    ],
    description: "エージェントが作業を開始するタイミングを選択してください。",
    name: "timing",
    required: true,
    title: "作業はいつ開始すべきですか？",
  },
] as const

export function QuestionnaireDemo() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const answers = {
      direction: formData.get("direction"),
      signals: formData.getAll("signals"),
      timing: formData.get("timing"),
    }

    toast("エージェントプランを保存しました", {
      description: `方向性: ${answers.direction ?? "なし"} ・ 進捗シグナル: ${answers.signals.join(", ") || "なし"} ・ タイミング: ${answers.timing ?? "なし"}`,
    })
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="direction"
      items={questionnaireItems}
      shortcuts="letters"
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress />
      {questionnaireItems.map((question) => (
        <QuestionnaireItem
          key={question.name}
          multiple={"multiple" in question && question.multiple}
          name={question.name}
          required={question.required}
        >
          <QuestionnaireTitle>{question.title}</QuestionnaireTitle>
          <QuestionnaireDescription>
            {question.description}
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            {question.choices.map((choice) => (
              <QuestionnaireChoice key={choice.value} value={choice.value}>
                <span className="font-medium">{choice.label}</span>
                {"description" in choice ? (
                  <span className="text-muted-foreground">
                    {choice.description}
                  </span>
                ) : null}
              </QuestionnaireChoice>
            ))}
            {"input" in question ? (
              <QuestionnaireInput
                aria-label={question.input.label}
                placeholder={question.input.placeholder}
              />
            ) : null}
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
      ))}
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext>次へ</QuestionnaireNext>
        <QuestionnaireSubmit>プランを保存</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
