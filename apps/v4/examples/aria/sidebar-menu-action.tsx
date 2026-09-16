"use client"

import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  MoreHorizontalIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/aria/sidebar"

const projects = [
  {
    name: "デザインエンジニアリング",
    url: "#",
    icon: FrameIcon,
  },
  {
    name: "セールス＆マーケティング",
    url: "#",
    icon: PieChartIcon,
  },
  {
    name: "旅行",
    url: "#",
    icon: MapIcon,
  },
  {
    name: "サポート",
    url: "#",
    icon: LifeBuoyIcon,
  },
  {
    name: "フィードバック",
    url: "#",
    icon: SendIcon,
  },
]

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>プロジェクト</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton
                      href={project.url}
                      className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                    >
                      <project.icon />
                      <span>{project.name}</span>
                    </SidebarMenuButton>
                    <DropdownMenuTrigger>
                      <SidebarMenuAction>
                        <MoreHorizontalIcon />
                        <span className="sr-only">その他</span>
                      </SidebarMenuAction>
                      <DropdownMenu placement="right top">
                        <DropdownMenuItem>
                          <span>プロジェクトを編集</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>プロジェクトを削除</span>
                        </DropdownMenuItem>
                      </DropdownMenu>
                    </DropdownMenuTrigger>
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
