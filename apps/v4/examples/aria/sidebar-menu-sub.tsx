"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/aria/sidebar"

const items = [
  {
    title: "はじめに",
    url: "#",
    items: [
      {
        title: "インストール",
        url: "#",
      },
      {
        title: "プロジェクト構成",
        url: "#",
      },
    ],
  },
  {
    title: "アプリケーションの構築",
    url: "#",
    items: [
      {
        title: "ルーティング",
        url: "#",
      },
      {
        title: "データフェッチ",
        url: "#",
        isActive: true,
      },
      {
        title: "レンダリング",
        url: "#",
      },
      {
        title: "キャッシュ",
        url: "#",
      },
      {
        title: "スタイリング",
        url: "#",
      },
      {
        title: "最適化",
        url: "#",
      },
      {
        title: "設定",
        url: "#",
      },
      {
        title: "テスト",
        url: "#",
      },
      {
        title: "認証",
        url: "#",
      },
      {
        title: "デプロイ",
        url: "#",
      },
      {
        title: "アップグレード",
        url: "#",
      },
      {
        title: "サンプル",
        url: "#",
      },
    ],
  },
  {
    title: "APIリファレンス",
    url: "#",
    items: [
      {
        title: "コンポーネント",
        url: "#",
      },
      {
        title: "ファイル規約",
        url: "#",
      },
      {
        title: "関数",
        url: "#",
      },
      {
        title: "next.config.js のオプション",
        url: "#",
      },
      {
        title: "CLI",
        url: "#",
      },
      {
        title: "エッジランタイム",
        url: "#",
      },
    ],
  },
  {
    title: "アーキテクチャ",
    url: "#",
    items: [
      {
        title: "アクセシビリティ",
        url: "#",
      },
      {
        title: "ファストリフレッシュ",
        url: "#",
      },
      {
        title: "Next.js コンパイラ",
        url: "#",
      },
      {
        title: "対応ブラウザ",
        url: "#",
      },
      {
        title: "Turbopack",
        url: "#",
      },
    ],
  },
]

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton href={item.url}>
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      {item.items.map((subItem, subIndex) => (
                        <SidebarMenuSubItem key={subIndex}>
                          <SidebarMenuSubButton href={subItem.url}>
                            <span>{subItem.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
