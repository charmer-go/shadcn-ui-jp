import * as React from "react"
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
  SidebarMenuSkeleton,
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

// ダミーの fetch 関数です。
async function fetchProjects() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return projects
}

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>プロジェクト</SidebarGroupLabel>
            <SidebarGroupContent>
              <React.Suspense fallback={<NavProjectsSkeleton />}>
                <NavProjects />
              </React.Suspense>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

async function NavProjects() {
  const projects = await fetchProjects()

  return (
    <SidebarMenu>
      {projects.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
