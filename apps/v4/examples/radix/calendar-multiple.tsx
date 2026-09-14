import { Calendar } from "@/components/ui/radix/calendar"
import { Card, CardContent } from "@/components/ui/radix/card"

export function CalendarMultiple() {
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar mode="multiple" />
      </CardContent>
    </Card>
  )
}
