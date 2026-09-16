import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/radix/native-select"

export function NativeSelectInvalid() {
  return (
    <NativeSelect aria-invalid="true">
      <NativeSelectOption value="">エラー状態</NativeSelectOption>
      <NativeSelectOption value="apple">りんご</NativeSelectOption>
      <NativeSelectOption value="banana">バナナ</NativeSelectOption>
      <NativeSelectOption value="blueberry">ブルーベリー</NativeSelectOption>
    </NativeSelect>
  )
}
