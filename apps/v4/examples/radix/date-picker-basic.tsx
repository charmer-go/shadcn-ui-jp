"use client"

import * as React from "react"
import { format } from "date-fns"

import { Button } from "@/components/ui/radix/button"
import { Calendar } from "@/components/ui/radix/calendar"
import { Field, FieldLabel } from "@/components/ui/radix/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/radix/popover"

export function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date-picker-simple">日付</FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-simple"
            className="justify-start font-normal"
          >
            {date ? format(date, "PPP") : <span>日付を選択</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
