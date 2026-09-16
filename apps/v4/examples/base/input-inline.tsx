import { Button } from "@/components/ui/base/button"
import { Field } from "@/components/ui/base/field"
import { Input } from "@/components/ui/base/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="検索..." />
      <Button>検索</Button>
    </Field>
  )
}
