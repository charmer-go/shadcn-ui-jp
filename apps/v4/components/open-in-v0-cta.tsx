import { cn } from "cn"

import { Button } from "@/components/ui/base/button"

export function OpenInV0Cta({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-2 rounded-2xl bg-surface p-6 text-sm text-surface-foreground",
        className
      )}
    >
      <div className="text-base leading-tight font-semibold text-balance group-hover:underline">
        shadcn/uiアプリをVercelにデプロイ
      </div>
      <div className="text-muted-foreground">
        OpenAI、Sonos、Adobeなどに採用されています。
      </div>
      <div className="text-muted-foreground">
        Vercelは、アプリや機能を大規模にデプロイするためのツールと
        インフラを提供します。
      </div>
      <Button variant="outline" size="sm" className="mt-2 w-fit">
        今すぐデプロイ
      </Button>
      <a
        href="https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0"
      >
        <span className="sr-only">Vercelにデプロイ</span>
      </a>
    </div>
  )
}
