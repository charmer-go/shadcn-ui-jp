import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/radix/native-select"

export default function NativeSelectGroups() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">部署を選択</NativeSelectOption>
      <NativeSelectOptGroup label="エンジニアリング">
        <NativeSelectOption value="frontend">フロントエンド</NativeSelectOption>
        <NativeSelectOption value="backend">バックエンド</NativeSelectOption>
        <NativeSelectOption value="devops">DevOps</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="営業">
        <NativeSelectOption value="sales-rep">営業担当</NativeSelectOption>
        <NativeSelectOption value="account-manager">
          アカウントマネージャー
        </NativeSelectOption>
        <NativeSelectOption value="sales-director">
          営業部長
        </NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="運用">
        <NativeSelectOption value="support">
          カスタマーサポート
        </NativeSelectOption>
        <NativeSelectOption value="product-manager">
          プロダクトマネージャー
        </NativeSelectOption>
        <NativeSelectOption value="ops-manager">
          運用マネージャー
        </NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}
