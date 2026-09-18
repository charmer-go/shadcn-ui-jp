import Link from "next/link"
import { cn } from "cn"

import { source } from "@/lib/source"

const BASES = [
  { name: "base", title: "Base" },
  { name: "radix", title: "Radix" },
  { name: "aria", title: "React Aria" },
] as const

export function DocsBaseSwitcher({
  base,
  component,
  hrefPrefix = "/docs/components",
  className,
}: {
  base: string
  component: string
  hrefPrefix?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "not-typeset inline-flex w-full items-center gap-6",
        className
      )}
    >
      {BASES.filter((baseItem) =>
        source.getPage([`components/${baseItem.name}/${component}`])
      ).map((baseItem) => (
        <Link
          key={baseItem.name}
          href={`${hrefPrefix}/${baseItem.name}/${component}`}
          data-active={base === baseItem.name}
          className="relative inline-flex items-center justify-center gap-1 pt-1 pb-0.5 text-base font-medium text-muted-foreground transition-colors after:absolute after:inset-x-0 after:bottom-[-4px] after:h-0.5 after:bg-foreground after:opacity-0 after:transition-opacity hover:text-foreground data-[active=true]:text-foreground data-[active=true]:after:opacity-100"
        >
          {baseItem.title}
        </Link>
      ))}
    </div>
  )
}
