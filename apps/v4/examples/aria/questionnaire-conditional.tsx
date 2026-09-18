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

export function QuestionnaireConditional() {
  const [runtime, setRuntime] = React.useState("local")
  const items = React.useMemo(
    () => [
      { name: "runtime", required: true },
      {
        disabled: runtime !== "cloud",
        name: "environment",
        required: true,
      },
      { name: "approval", required: true },
    ],
    [runtime]
  )

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("実行プランを保存しました", {
      description: `実行場所: ${formData.get("runtime") ?? "なし"} ・ 環境: ${formData.get("environment") ?? "該当なし"} ・ 承認: ${formData.get("approval") ?? "なし"}`,
    })
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="runtime"
      items={items}
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="runtime" required>
        <QuestionnaireTitle>エージェントはどこで実行すべきですか？</QuestionnaireTitle>
        <QuestionnaireDescription>
          クラウド実行を選択すると、このフローに環境の質問が追加されます。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice
            checked={runtime === "local"}
            value="local"
            onChange={() => setRuntime("local")}
          >
            ローカルワークスペース
          </QuestionnaireChoice>
          <QuestionnaireChoice
            checked={runtime === "cloud"}
            value="cloud"
            onChange={() => setRuntime("cloud")}
          >
            クラウドワークスペース
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem
        disabled={runtime !== "cloud"}
        name="environment"
        required
      >
        <QuestionnaireTitle>
          どのクラウド環境を使用すべきですか？
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="preview">プレビュー</QuestionnaireChoice>
          <QuestionnaireChoice value="staging">ステージング</QuestionnaireChoice>
          <QuestionnaireChoice value="isolated">
            分離されたサンドボックス
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="approval" required>
        <QuestionnaireTitle>
          エージェントはいつ承認を求めるべきですか？
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="writes">
            ファイルを書き込む前
          </QuestionnaireChoice>
          <QuestionnaireChoice value="commands">
            コマンドを実行する前
          </QuestionnaireChoice>
          <QuestionnaireChoice value="sensitive">
            機密性の高い操作のみ
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext>次へ</QuestionnaireNext>
        <QuestionnaireSubmit>実行プランを保存</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
