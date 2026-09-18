"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/radix/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "アラートダイアログ",
    href: "/docs/primitives/alert-dialog",
    description:
      "重要な内容を表示してユーザーの操作を促すモーダルダイアログです。",
  },
  {
    title: "ホバーカード",
    href: "/docs/primitives/hover-card",
    description:
      "リンク先のコンテンツを視覚的に確認するためのカードです。",
  },
  {
    title: "プログレス",
    href: "/docs/primitives/progress",
    description:
      "タスクの完了状況を示すインジケーターを表示します。通常は進捗バーとして表示されます。",
  },
  {
    title: "スクロールエリア",
    href: "/docs/primitives/scroll-area",
    description: "コンテンツを視覚的または意味的に分離します。",
  },
  {
    title: "タブ",
    href: "/docs/primitives/tabs",
    description:
      "タブパネルと呼ばれるコンテンツの層を、一度に1つずつ表示するセットです。",
  },
  {
    title: "ツールチップ",
    href: "/docs/primitives/tooltip",
    description:
      "キーボードフォーカスまたはマウスホバー時に、要素に関連する情報を表示するポップアップです。",
  },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>はじめに</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs" title="概要">
                Tailwind CSSで構築された再利用可能なコンポーネント。
              </ListItem>
              <ListItem href="/docs/installation" title="インストール">
                依存関係をインストールしてアプリを構成する方法を説明します。
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="タイポグラフィ">
                見出し、段落、リストなどのスタイルです。
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>コンポーネント</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">ドキュメント</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
