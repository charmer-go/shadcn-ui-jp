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
} from "@/components/ui/base/questionnaire"

const items = [
  { name: "scope", required: true },
  { name: "checks", required: true },
  { name: "output", required: true },
] as const

const itemLabels: Record<string, string> = {
  scope: "変更範囲",
  checks: "検証",
  output: "最終出力",
}

export function QuestionnaireControlled() {
  const [item, setItem] = React.useState("scope")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("エージェントワークフローを設定しました", {
      description: `範囲: ${formData.get("scope") ?? "なし"} ・ 検証: ${formData.get("checks") ?? "なし"} ・ 出力: ${formData.get("output") ?? "なし"}`,
    })
  }

  return (
    <div className="relative mx-auto flex h-full w-full max-w-md flex-col">
      <p
        className="absolute end-0 top-0 text-sm text-muted-foreground"
        role="status"
      >
        現在のチェックポイント: {itemLabels[item]}
      </p>

      <Questionnaire
        className="mt-auto"
        item={item}
        items={items}
        onItemChange={setItem}
        onSubmit={handleSubmit}
      >
        <QuestionnaireProgress />

        <QuestionnaireItem name="scope" required>
          <QuestionnaireTitle>エージェントは何を変更してよいですか？</QuestionnaireTitle>
          <QuestionnaireDescription>
            Questionnaireがナビゲートする間、ホストがアクティブなチェックポイントを保持します。
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="component">
              対象のコンポーネントのみ
            </QuestionnaireChoice>
            <QuestionnaireChoice value="tests">
              コンポーネントと関連テスト
            </QuestionnaireChoice>
            <QuestionnaireChoice value="feature">
              機能領域全体
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem name="checks" required>
          <QuestionnaireTitle>
            どの検証レベルを使用すべきですか？
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="targeted">
              対象を絞ったテスト
            </QuestionnaireChoice>
            <QuestionnaireChoice value="package">
              パッケージテストと型チェック
            </QuestionnaireChoice>
            <QuestionnaireChoice value="full">
              ワークスペース全体の検証
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireItem name="output" required>
          <QuestionnaireTitle>
            エージェントは完了時に何を返すべきですか？
          </QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="summary">
              簡潔な要約
            </QuestionnaireChoice>
            <QuestionnaireChoice value="diff">
              変更ファイル付きの要約
            </QuestionnaireChoice>
            <QuestionnaireChoice value="handoff">
              詳細な実装引き渡し
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
    </div>
  )
}
