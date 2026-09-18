"use client"

import * as React from "react"
import { toast } from "sonner"

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
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
  { name: "strategy", required: true },
  { name: "tests", required: true },
  { name: "delivery", required: true },
] as const

export function QuestionnaireProgressExample() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("プルリクエストプランの準備ができました", {
      description: `範囲: ${formData.get("scope") ?? "なし"} ・ コミット: ${formData.get("strategy") ?? "なし"} ・ テスト: ${formData.get("tests") ?? "なし"} ・ 納品: ${formData.get("delivery") ?? "なし"}`,
    })
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="scope"
      items={items}
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress
        className="w-full"
        render={(props, state) => (
          <div {...props}>
            <div className="mb-2 flex gap-1.5" aria-hidden="true">
              {Array.from({ length: state.total }, (_, index) => (
                <span
                  key={index}
                  className={
                    index < state.current
                      ? "h-1.5 flex-1 rounded-full bg-primary"
                      : "h-1.5 flex-1 rounded-full bg-muted"
                  }
                />
              ))}
            </div>
            <span>
              チェックポイント {state.current} / {state.total}
            </span>
          </div>
        )}
      />

      <QuestionnaireItem name="scope" required>
        <QuestionnaireTitle>変更の規模はどのくらいですか？</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="small">小さなパッチ</QuestionnaireChoice>
          <QuestionnaireChoice value="medium">
            機能規模の変更
          </QuestionnaireChoice>
          <QuestionnaireChoice value="large">
            パッケージ横断の変更
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="strategy" required>
        <QuestionnaireTitle>
          コミットはどのように整理しますか？
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="single">
            単一のコミット
          </QuestionnaireChoice>
          <QuestionnaireChoice value="logical">
            論理的なコミット
          </QuestionnaireChoice>
          <QuestionnaireChoice value="squash">
            レビュー前にスカッシュ
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="tests" required>
        <QuestionnaireTitle>どのテストを実行しますか？</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="targeted">
            対象を絞ったテスト
          </QuestionnaireChoice>
          <QuestionnaireChoice value="package">
            パッケージ単位のテスト
          </QuestionnaireChoice>
          <QuestionnaireChoice value="workspace">
            ワークスペース全体
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="delivery" required>
        <QuestionnaireTitle>
          作業をどのように納品しますか？
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="patch">パッチのみ</QuestionnaireChoice>
          <QuestionnaireChoice value="commit">
            ローカルでコミット
          </QuestionnaireChoice>
          <QuestionnaireChoice value="branch">
            レビュー用ブランチをプッシュ
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext>次へ</QuestionnaireNext>
        <QuestionnaireSubmit>プランを完了</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
