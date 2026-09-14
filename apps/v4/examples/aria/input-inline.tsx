import { Button } from "@/components/ui/aria/button"
import { Field } from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}
