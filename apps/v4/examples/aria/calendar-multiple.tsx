import { Calendar } from "@/components/ui/aria/calendar"
import { Card, CardContent } from "@/components/ui/aria/card"

export function CalendarMultiple() {
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar selectionMode="multiple" />
      </CardContent>
    </Card>
  )
}
