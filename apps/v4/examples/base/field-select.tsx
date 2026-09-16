import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/base/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/base/select"

const items = [
  { label: "部門を選択", value: null },
  { label: "エンジニアリング", value: "engineering" },
  { label: "デザイン", value: "design" },
  { label: "マーケティング", value: "marketing" },
  { label: "営業", value: "sales" },
  { label: "カスタマーサポート", value: "support" },
  { label: "人事", value: "hr" },
  { label: "財務", value: "finance" },
  { label: "オペレーション", value: "operations" },
]

export default function FieldSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>部門</FieldLabel>
      <Select items={items}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>
        所属部門または業務領域を選択してください。
      </FieldDescription>
    </Field>
  )
}
