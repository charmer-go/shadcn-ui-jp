"use client"

import * as React from "react"
import { getLocalTimeZone, type CalendarDate } from "@internationalized/date"

import { Button } from "@/components/ui/aria/button"
import { Calendar } from "@/components/ui/aria/calendar"
import { Field, FieldLabel } from "@/components/ui/aria/field"
import { Popover, PopoverTrigger } from "@/components/ui/aria/popover"

export function DatePickerSimple() {
  const [date, setDate] = React.useState<CalendarDate | null>(null)

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date-picker-simple">日付</FieldLabel>
      <PopoverTrigger>
        <Button
          variant="outline"
          id="date-picker-simple"
          className="justify-start font-normal"
        >
          {date ? (
            date
              .toDate(getLocalTimeZone())
              .toLocaleDateString(undefined, { dateStyle: "long" })
          ) : (
            <span>日付を選択</span>
          )}
        </Button>
        <Popover className="w-auto p-0" placement="bottom start">
          <Calendar value={date} onChange={setDate} />
        </Popover>
      </PopoverTrigger>
    </Field>
  )
}
