"use client"

import { GitBranchIcon, RotateCcwIcon } from "lucide-react"
import { toast } from "sonner"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/aria/marker"

export function MarkerLinkButtonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker render={(props) => <a href="#links-and-buttons" {...props} />}>
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>プルリクエストを表示</MarkerContent>
      </Marker>
      <Marker
        className="transition-colors hover:text-foreground"
        render={(props) => (
          <button
            {...props}
            type="button"
            onClick={() => toast("元に戻すボタンがクリックされました")}
          />
        )}
      >
        <MarkerIcon>
          <RotateCcwIcon />
        </MarkerIcon>
        <MarkerContent>この変更を元に戻す</MarkerContent>
      </Marker>
    </div>
  )
}
