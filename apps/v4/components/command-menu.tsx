"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { IconArrowRight } from "@tabler/icons-react"
import { cn } from "cn"
import { useDocsSearch } from "fumadocs-core/search/client"
import { CornerDownLeftIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { showMcpDocs } from "@/lib/flags"
import {
  getCurrentBase,
  getPageDisplayName,
  getPagesFromFolder,
} from "@/lib/page-tree"
import { type source } from "@/lib/source"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"

export function CommandMenu({
  tree,
  navItems,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  tree: typeof source.pageTree
  navItems?: { href: string; label: string }[]
}) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const pathname =
    typeof window === "undefined" ? "/docs" : window.location.pathname
  const currentBase = getCurrentBase(pathname)
  const { search, setSearch, query } = useDocsSearch({ type: "fetch" })

  const pageGroups = React.useMemo(
    () =>
      tree.children.map((group) => {
        if (group.type !== "folder") return null

        const pages = getPagesFromFolder(group, currentBase).filter(
          (item) => showMcpDocs || !item.url.includes("/mcp")
        )

        if (pages.length === 0) return null

        return (
          <CommandGroup key={group.$id} heading={group.name}>
            {pages.map((item) => {
              const isComponent = item.url.includes("/components/")
              return (
                <CommandItem
                  key={item.url}
                  value={`${group.name} ${getPageDisplayName(item)}`}
                  onSelect={() => {
                    router.push(item.url)
                    setOpen(false)
                  }}
                >
                  {isComponent ? (
                    <div className="aspect-square size-4 rounded-full border border-dashed border-muted-foreground" />
                  ) : (
                    <IconArrowRight />
                  )}
                  {getPageDisplayName(item)}
                </CommandItem>
              )
            })}
          </CommandGroup>
        )
      }),
    [currentBase, router, tree.children]
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "relative h-8 w-full justify-start rounded-lg border-none bg-muted pl-3 text-foreground shadow-none transition-colors hover:bg-muted/50 md:w-48 lg:w-40 xl:w-64 dark:bg-card"
          )}
          {...props}
        >
          <span className="hidden xl:inline-flex">ドキュメントを検索…</span>
          <span className="inline-flex xl:hidden">検索…</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800">
        <DialogHeader className="sr-only">
          <DialogTitle>ドキュメントを検索…</DialogTitle>
          <DialogDescription>ドキュメントを検索します。</DialogDescription>
        </DialogHeader>
        <Command>
          <div className="relative">
            <CommandInput
              placeholder="ドキュメントを検索…"
              value={search}
              onValueChange={setSearch}
            />
            {query.isLoading && (
              <div className="pointer-events-none absolute top-1/2 right-3 z-10 flex -translate-y-1/2 items-center justify-center">
                <Spinner className="size-4 text-muted-foreground" />
              </div>
            )}
          </div>
          <CommandList className="no-scrollbar min-h-80 scroll-py-2">
            <CommandEmpty className="py-12 text-center text-sm text-muted-foreground">
              {query.isLoading ? "検索中…" : "結果が見つかりません。"}
            </CommandEmpty>
            {navItems && navItems.length > 0 && (
              <CommandGroup heading="ページ">
                {navItems.map((item) => (
                  <CommandItem
                    key={item.href}
                    value={`Navigation ${item.label}`}
                    onSelect={() => {
                      router.push(item.href)
                      setOpen(false)
                    }}
                  >
                    <IconArrowRight />
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {pageGroups}
            <SearchResults query={query} setOpen={setOpen} />
          </CommandList>
        </Command>
        <div className="absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t border-t-neutral-100 bg-neutral-50 px-4 text-xs font-medium text-muted-foreground dark:border-t-neutral-700 dark:bg-neutral-800">
          <CommandMenuKbd>
            <CornerDownLeftIcon />
          </CommandMenuKbd>
          ページへ移動
        </div>
      </DialogContent>
    </Dialog>
  )
}

function SearchResults({
  query,
  setOpen,
}: {
  query: ReturnType<typeof useDocsSearch>["query"]
  setOpen: (open: boolean) => void
}) {
  const router = useRouter()
  if (!query.data || query.data === "empty") return null

  const results = query.data.filter(
    (item, index, items) =>
      index === items.findIndex((other) => other.id === item.id)
  )

  return (
    <CommandGroup heading="検索結果">
      {results.map((item) => (
        <CommandItem
          key={item.id}
          value={`${item.content} ${item.type}`}
          onSelect={() => {
            router.push(item.url)
            setOpen(false)
          }}
        >
          <div className="line-clamp-1 text-sm">{item.content}</div>
        </CommandItem>
      ))}
    </CommandGroup>
  )
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 items-center justify-center gap-1 rounded border bg-background px-1 font-sans text-[0.7rem] font-medium text-muted-foreground select-none [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogPrimitive.Content
        className={cn(
          "fixed top-[15%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg outline-none sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}
