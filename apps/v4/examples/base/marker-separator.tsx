import { Marker, MarkerContent } from "@/components/ui/base/marker"

export function MarkerSeparatorDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker variant="separator">
        <MarkerContent>今日</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>42秒作業しました</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>会話を圧縮しました</MarkerContent>
      </Marker>
    </div>
  )
}
