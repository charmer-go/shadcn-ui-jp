import { Marker, MarkerContent } from "@/components/ui/base/marker"

export function MarkerVariantsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker>
        <MarkerContent>インラインメモ用のデフォルトマーカーです。</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>セパレーターマーカー</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>行の境界を示すボーダーマーカーです。</MarkerContent>
      </Marker>
    </div>
  )
}
