import { Button } from "@/components/ui/base/button"
import { ButtonGroup } from "@/components/ui/base/button-group"
import { Field, FieldLabel } from "@/components/ui/base/field"
import { Input } from "@/components/ui/base/input"

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
