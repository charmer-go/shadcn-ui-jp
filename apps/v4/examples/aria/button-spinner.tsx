import { Button } from "@/components/ui/aria/button"
import { Spinner } from "@/components/ui/aria/spinner"

export default function ButtonLoading() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" isDisabled>
        <Spinner data-icon="inline-start" />
        Generating
      </Button>
      <Button variant="secondary" isDisabled>
        Downloading
        <Spinner data-icon="inline-start" />
      </Button>
    </div>
  )
}
