import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"

export function InputFile() {
  return (
    <Field>
      <FieldLabel htmlFor="picture">写真</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>アップロードする写真を選択してください。</FieldDescription>
    </Field>
  )
}
