"use client"

import * as React from "react"
import { format } from "date-fns"

import { Button } from "@/components/ui/base/button"
import { Calendar } from "@/components/ui/base/calendar"
import { Field, FieldLabel } from "@/components/ui/base/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/base/popover"

export function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date-picker-simple">日付</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date-picker-simple"
              className="justify-start font-normal"
            />
          }
        >
          {date ? format(date, "PPP") : <span>日付を選択</span>}
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
