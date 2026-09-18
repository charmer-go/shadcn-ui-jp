import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"

export function InputFile() {
  return (
    <Field>
      <FieldLabel htmlFor="picture">写真</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>アップロードする写真を選択してください。</FieldDescription>
    </Field>
  )
}
