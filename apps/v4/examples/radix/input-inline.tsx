import { Button } from "@/components/ui/radix/button"
import { Field } from "@/components/ui/radix/field"
import { Input } from "@/components/ui/radix/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="検索..." />
      <Button>検索</Button>
    </Field>
  )
}
