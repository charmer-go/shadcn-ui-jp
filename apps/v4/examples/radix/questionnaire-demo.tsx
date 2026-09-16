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
} from "@/components/ui/radix/questionnaire"

const items = [
  {
    choices: [
      { value: "tool-calls" },
      { value: "approvals" },
      { value: "handoffs" },
    ],
    name: "direction",
    required: true,
  },
  {
    choices: [
      { value: "progress" },
      { value: "decisions" },
      { value: "risks" },
      { value: "next-step" },
    ],
    name: "signals",
  },
  {
    choices: [{ value: "now" }, { value: "next-cycle" }, { value: "backlog" }],
    name: "timing",
    required: true,
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
      items={items}
      shortcuts="letters"
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="direction" required>
        <QuestionnaireTitle>
          エージェントが次に取り組むべきことは何ですか？
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          方向性を選択するか、別のタスクを記述してください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="tool-calls">
            <span className="font-medium">ツール呼び出しのタイムライン</span>
            <span className="text-muted-foreground">
              エージェントが実行した内容と返ってきた結果を表示します。
            </span>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="approvals">
            <span className="font-medium">承認チェックポイント</span>
            <span className="text-muted-foreground">
              機密性の高い操作や破壊的な操作の前に確認を求めます。
            </span>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="handoffs">
            <span className="font-medium">サブエージェントへの引き渡し</span>
            <span className="text-muted-foreground">
              委任された作業と結果を追いやすくします。
            </span>
          </QuestionnaireChoice>
          <QuestionnaireInput
            aria-label="その他のエージェント機能"
            placeholder="別の機能を記述してください…"
          />
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="signals" multiple>
        <QuestionnaireTitle>
          進捗更新には何を含めるべきですか？
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          該当するものをすべて選択するか、この質問をスキップしてください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="progress">進捗</QuestionnaireChoice>
          <QuestionnaireChoice value="decisions">決定事項</QuestionnaireChoice>
          <QuestionnaireChoice value="risks">リスク</QuestionnaireChoice>
          <QuestionnaireChoice value="next-step">次のステップ</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="timing" required>
        <QuestionnaireTitle>作業はいつ開始すべきですか？</QuestionnaireTitle>
        <QuestionnaireDescription>
          エージェントが作業を開始するタイミングを選択してください。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="now">今すぐ開始</QuestionnaireChoice>
          <QuestionnaireChoice value="next-cycle">
            次の開発サイクル
          </QuestionnaireChoice>
          <QuestionnaireChoice value="backlog">
            バックログに追加
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext>次へ</QuestionnaireNext>
        <QuestionnaireSubmit>プランを保存</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
