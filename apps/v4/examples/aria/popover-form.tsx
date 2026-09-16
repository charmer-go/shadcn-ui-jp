import { Button } from "@/components/ui/aria/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"
import {
  Popover,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/aria/popover"

export function PopoverForm() {
  return (
    <>
      <PopoverTrigger>
        <Button variant="outline">ポップオーバーを開く</Button>
        <Popover className="w-64" placement="bottom start">
          <PopoverHeader>
            <PopoverTitle>寸法</PopoverTitle>
            <PopoverDescription>
              レイヤーの寸法を設定します。
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="width" className="w-1/2">
                幅
              </FieldLabel>
              <Input id="width" defaultValue="100%" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="height" className="w-1/2">
                高さ
              </FieldLabel>
              <Input id="height" defaultValue="25px" />
            </Field>
          </FieldGroup>
        </Popover>
      </PopoverTrigger>
    </>
  )
}
