import { Button } from "@/components/ui/aria/button"
import { Field } from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="検索..." />
      <Button>検索</Button>
    </Field>
  )
}
