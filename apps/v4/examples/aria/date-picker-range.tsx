"use client"

import * as React from "react"
import { CalendarDate, getLocalTimeZone } from "@internationalized/date"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-aria-components"

import { Button } from "@/components/ui/aria/button"
import { RangeCalendar } from "@/components/ui/aria/calendar"
import { Field, FieldLabel } from "@/components/ui/aria/field"
import { Popover, PopoverTrigger } from "@/components/ui/aria/popover"

export function DatePickerWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    start: new CalendarDate(new Date().getFullYear(), 1, 20),
    end: new CalendarDate(new Date().getFullYear(), 1, 20).add({ days: 20 }),
  })

  return (
    <Field className="mx-auto w-60">
      <FieldLabel htmlFor="date-picker-range">日付範囲ピッカー</FieldLabel>
      <PopoverTrigger>
        <Button
          variant="outline"
          id="date-picker-range"
          className="justify-start px-2.5 font-normal"
        >
          <CalendarIcon data-icon="inline-start" />
          {date?.start && date.end ? (
            new Intl.DateTimeFormat(undefined, {
              dateStyle: "long",
            }).formatRange(
              date.start.toDate(getLocalTimeZone()),
              date.end.toDate(getLocalTimeZone())
            )
          ) : (
            <span>日付を選択</span>
          )}
        </Button>
        <Popover className="w-auto p-0" placement="bottom start">
          <RangeCalendar value={date} onChange={setDate} numberOfMonths={2} />
        </Popover>
      </PopoverTrigger>
    </Field>
  )
}
