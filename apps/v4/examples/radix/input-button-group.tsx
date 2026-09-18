import { Button } from "@/components/ui/radix/button"
import { ButtonGroup } from "@/components/ui/radix/button-group"
import { Field, FieldLabel } from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"

export function InputButtonGroup() {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">検索</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="検索キーワードを入力..." />
        <Button variant="outline">検索</Button>
      </ButtonGroup>
    </Field>
  )
}
