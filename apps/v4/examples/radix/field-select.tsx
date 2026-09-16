import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/radix/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/radix/select"

export default function FieldSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>部門</FieldLabel>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="部門を選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="engineering">エンジニアリング</SelectItem>
            <SelectItem value="design">デザイン</SelectItem>
            <SelectItem value="marketing">マーケティング</SelectItem>
            <SelectItem value="sales">営業</SelectItem>
            <SelectItem value="support">カスタマーサポート</SelectItem>
            <SelectItem value="hr">人事</SelectItem>
            <SelectItem value="finance">財務</SelectItem>
            <SelectItem value="operations">オペレーション</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>
        所属部門または業務領域を選択してください。
      </FieldDescription>
    </Field>
  )
}
