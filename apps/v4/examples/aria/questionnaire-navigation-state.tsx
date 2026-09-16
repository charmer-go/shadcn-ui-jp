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
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/aria/questionnaire"

const items = [
  { name: "permission", required: true },
  { name: "verification", required: true },
] as const

type ItemName = "permission" | "verification"

export function QuestionnaireNavigationState() {
  const [item, setItem] = React.useState<ItemName>("permission")
  const [statuses, setStatuses] = React.useState<
    Record<ItemName, QuestionnaireItemStatus>
  >({
    permission: "unanswered",
    verification: "unanswered",
  })
  const unanswered = statuses[item] === "unanswered"

  function setStatus(name: ItemName, status: QuestionnaireItemStatus) {
    setStatuses((current) => ({ ...current, [name]: status }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    toast("権限を保存しました", {
      description: `権限: ${formData.get("permission") ?? "なし"} ・ 検証: ${formData.get("tests") ?? "なし"}`,
    })
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      item={item}
      items={items}
      onItemChange={(nextItem) => setItem(nextItem as ItemName)}
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem
        name="permission"
        required
        onStatusChange={(status) => setStatus("permission", status)}
      >
        <QuestionnaireTitle>エージェントは何を変更できますか？</QuestionnaireTitle>
        <QuestionnaireDescription>
          回答が選択されるまで、次へボタンは意図的に無効化されています。
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="files">プロジェクトファイル</QuestionnaireChoice>
          <QuestionnaireChoice value="tests">
            プロジェクトファイルとテスト
          </QuestionnaireChoice>
          <QuestionnaireChoice value="config">
            ファイル、テスト、設定
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem
        name="verification"
        required
        onStatusChange={(status) => setStatus("verification", status)}
      >
        <QuestionnaireTitle>
          完了前に何をパスする必要がありますか？
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="tests">テスト</QuestionnaireChoice>
          <QuestionnaireChoice value="types">
            テストと型
          </QuestionnaireChoice>
          <QuestionnaireChoice value="all">
            テスト、型、ビジュアルQA
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext
          className="data-[status=unanswered]:opacity-50"
          disabled={unanswered}
          variant="secondary"
        >
          次へ
        </QuestionnaireNext>
        <QuestionnaireSubmit disabled={unanswered}>
          権限を保存
        </QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
