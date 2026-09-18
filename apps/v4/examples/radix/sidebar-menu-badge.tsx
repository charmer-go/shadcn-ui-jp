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
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/radix/sidebar"

const projects = [
  {
    name: "デザインエンジニアリング",
    url: "#",
    icon: FrameIcon,
    badge: "24",
  },
  {
    name: "セールス＆マーケティング",
    url: "#",
    icon: PieChartIcon,
    badge: "12",
  },
  {
    name: "旅行",
    url: "#",
    icon: MapIcon,
    badge: "3",
  },
  {
    name: "サポート",
    url: "#",
    icon: LifeBuoyIcon,
    badge: "21",
  },
  {
    name: "フィードバック",
    url: "#",
    icon: SendIcon,
    badge: "8",
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
                      asChild
                      className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                    >
                      <a href={project.url}>
                        <project.icon />
                        <span>{project.name}</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{project.badge}</SidebarMenuBadge>
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
