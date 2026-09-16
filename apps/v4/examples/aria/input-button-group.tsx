import { Button } from "@/components/ui/aria/button"
import { ButtonGroup } from "@/components/ui/aria/button-group"
import { Field, FieldLabel } from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"

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
