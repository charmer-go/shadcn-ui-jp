import { Marker, MarkerContent } from "@/components/ui/aria/marker"

export function MarkerShimmerDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker role="status">
        <MarkerContent className="shimmer">考え中...</MarkerContent>
      </Marker>
      <Marker variant="separator" role="status">
        <MarkerContent className="shimmer">ファイルを4件読み込み中</MarkerContent>
      </Marker>
    </div>
  )
}
