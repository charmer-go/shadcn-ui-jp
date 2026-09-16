import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/aria/marker"
import { Spinner } from "@/components/ui/aria/spinner"

export function MarkerStatusDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>会話を圧縮中</MarkerContent>
      </Marker>
      <Marker variant="separator" role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>テストを実行中</MarkerContent>
      </Marker>
    </div>
  )
}
