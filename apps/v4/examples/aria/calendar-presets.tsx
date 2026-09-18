"use client"

import * as React from "react"
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date"

import { Button } from "@/components/ui/aria/button"
import { Calendar } from "@/components/ui/aria/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/aria/card"

export function CalendarWithPresets() {
  const [date, setDate] = React.useState<CalendarDate | undefined>(
    new CalendarDate(new Date().getFullYear(), 2, 12)
  )
  const [currentMonth, setCurrentMonth] = React.useState<CalendarDate>(
    new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, 1)
  )

  return (
    <Card className="mx-auto w-fit max-w-[300px]" size="sm">
      <CardContent>
        <Calendar
          value={date}
          onChange={setDate}
          focusedValue={currentMonth}
          onFocusChange={setCurrentMonth}
          weeksInMonth={6}
          className="p-0 [--cell-size:--spacing(9.5)]"
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t">
        {[
          { label: "今日", value: 0 },
          { label: "明日", value: 1 },
          { label: "3日後", value: 3 },
          { label: "1週間後", value: 7 },
          { label: "2週間後", value: 14 },
        ].map((preset) => (
          <Button
            key={preset.value}
            variant="outline"
            size="sm"
            className="flex-1"
            onPress={() => {
              const newDate = today(getLocalTimeZone()).add({
                days: preset.value,
              })
              setDate(newDate)
              setCurrentMonth(newDate)
            }}
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}
