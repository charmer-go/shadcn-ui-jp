import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/aria/native-select"

export default function NativeSelectDemo() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">ステータスを選択</NativeSelectOption>
      <NativeSelectOption value="todo">未着手</NativeSelectOption>
      <NativeSelectOption value="in-progress">進行中</NativeSelectOption>
      <NativeSelectOption value="done">完了</NativeSelectOption>
      <NativeSelectOption value="cancelled">キャンセル済み</NativeSelectOption>
    </NativeSelect>
  )
}
