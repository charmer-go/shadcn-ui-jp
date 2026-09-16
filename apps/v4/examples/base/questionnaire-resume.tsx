"use client"

import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/base/button"
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
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/base/questionnaire"

const items = [
  { name: "change", required: true },
  { name: "verification", required: true },
  { name: "notes" },
] as const

export function QuestionnaireResume() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const answers = {
      change: formData.get("change"),
      verification: formData.getAll("verification"),
      notes: formData.get("notes"),
    }

    toast("下書きを更新しました", {
      description: `移行: ${answers.change ?? "なし"} ・ 検証: ${answers.verification.join("、") || "なし"} ・ メモ: ${answers.notes || "なし"}`,
    })
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="verification"
      items={items}
      onReset={() => toast("保存した回答を復元しました")}
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="change" required>
        <QuestionnaireTitle>どのような移行ですか？</QuestionnaireTitle>
        <QuestionnaireDescription>
          この回答は前回のセッションで保存されました。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="incremental" defaultChecked>
            段階的な移行
          </QuestionnaireChoice>
          <QuestionnaireChoice value="cutover">
            一括切り替え
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="verification" multiple required>
        <QuestionnaireTitle>
          移行はどのように検証しますか？
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          これらのチェックは前回のセッションで選択されました。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="tests" defaultChecked>
            移行テストを実行
          </QuestionnaireChoice>
          <QuestionnaireChoice value="typecheck" defaultChecked>
            型チェックを実行
          </QuestionnaireChoice>
          <QuestionnaireChoice value="manual">
            手動のスモークテストを実施
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="notes">
        <QuestionnaireTitle>
          エージェントが覚えておくべきことは他にありますか？
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          このメモは下書きと一緒に保存されました。
        </QuestionnaireDescription>
        <QuestionnaireInput
          aria-label="保存された移行メモ"
          defaultValue="既存の公開APIの安定性を保ってください。"
        />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <Button type="reset" variant="outline">
          変更をリセット
        </Button>
        <QuestionnairePrevious />
        <QuestionnaireNext>次へ</QuestionnaireNext>
        <QuestionnaireSubmit>下書きを更新</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
