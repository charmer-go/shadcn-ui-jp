import { GitBranchIcon, SearchIcon } from "lucide-react"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/aria/marker"
import { Spinner } from "@/components/ui/aria/spinner"

export function MarkerDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>新しいブランチに切り替えました</MarkerContent>
      </Marker>
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent className="shimmer">考え中...</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>会話を圧縮しました</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>ファイルを4件調査しました</MarkerContent>
      </Marker>
    </div>
  )
}
