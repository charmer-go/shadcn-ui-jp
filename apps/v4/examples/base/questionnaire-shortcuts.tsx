"use client"

import * as React from "react"
import { toast } from "sonner"

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/base/native-select"
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
    choices: [{ value: "inspect" }, { value: "tests" }, { value: "patch" }],
    name: "action",
    required: true,
  },
] as const

type ShortcutMode = React.ComponentProps<typeof Questionnaire>["shortcuts"]

export function QuestionnaireShortcuts() {
  const [shortcuts, setShortcuts] = React.useState<ShortcutMode>("letters")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const action = new FormData(event.currentTarget).get("action")

    toast("次のアクションを選択しました", {
      description: `アクション: ${action ?? "なし"} ・ ショートカット: ${shortcuts ?? "none"}`,
    })
  }

  return (
    <div className="relative mx-auto flex h-full w-full max-w-md flex-col">
      <NativeSelect
        aria-label="ショートカットスタイル"
        className="absolute end-0 top-0"
        value={shortcuts ?? "none"}
        onChange={(event) => {
          const value = event.target.value
          setShortcuts(
            value === "letters" || value === "numbers" ? value : undefined
          )
        }}
      >
        <NativeSelectOption value="none">ショートカットなし</NativeSelectOption>
        <NativeSelectOption value="letters">文字</NativeSelectOption>
        <NativeSelectOption value="numbers">数字</NativeSelectOption>
      </NativeSelect>

      <Questionnaire
        className="mt-auto"
        items={items}
        shortcuts={shortcuts}
        onSubmit={handleSubmit}
      >
        <QuestionnaireItem name="action" required>
          <QuestionnaireTitle>
            エージェントは次に何をすべきですか？
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            表示されたショートカットを使うか、キーボードで操作してください。
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="inspect">
              実装を確認する
            </QuestionnaireChoice>
            <QuestionnaireChoice value="tests">
              関連するテストを実行する
            </QuestionnaireChoice>
            <QuestionnaireChoice value="patch">
              パッチを準備する
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <QuestionnaireSubmit>アクションを確定</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
