import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/components/ui/aria/button"

export default function ButtonRounded() {
  return (
    <div className="flex gap-2">
      <Button className="rounded-full">はじめに</Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
