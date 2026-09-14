import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/aria/button"
import { Card, CardContent } from "@/components/ui/aria/card"
import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/aria/collapsible"

export function CollapsibleBasic() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible className="rounded-md data-open:bg-muted">
          <Button slot="trigger" variant="ghost" className="w-full">
            Product details
            <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
          </Button>
          <CollapsibleContent>
            <div className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
              <div>
                This panel can be expanded or collapsed to reveal additional
                content.
              </div>
              <Button size="xs">Learn More</Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
