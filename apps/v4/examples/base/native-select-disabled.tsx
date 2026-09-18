import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/base/native-select"

export function NativeSelectDisabled() {
  return (
    <NativeSelect disabled>
      <NativeSelectOption value="">無効</NativeSelectOption>
      <NativeSelectOption value="apple">りんご</NativeSelectOption>
      <NativeSelectOption value="banana">バナナ</NativeSelectOption>
      <NativeSelectOption value="blueberry">ブルーベリー</NativeSelectOption>
    </NativeSelect>
  )
}
