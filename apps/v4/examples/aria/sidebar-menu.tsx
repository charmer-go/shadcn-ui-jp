"use client"

import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
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
                    <SidebarMenuButton href={project.url}>
                      <project.icon />
                      <span>{project.name}</span>
                    </SidebarMenuButton>
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
