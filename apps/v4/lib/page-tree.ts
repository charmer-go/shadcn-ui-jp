import type { source } from "@/lib/source"

export type PageTreeNode = (typeof source.pageTree)["children"][number]
export type PageTreeFolder = Extract<PageTreeNode, { type: "folder" }>
export type PageTreePage = Extract<PageTreeNode, { type: "page" }>

const ENGLISH_PAGE_NAMES: Record<string, string> = {
  docs: "はじめに",
  "ai-sdk": "AI SDK",
  accordion: "Accordion",
  alert: "Alert",
  "alert-dialog": "Alert Dialog",
  "aspect-ratio": "Aspect Ratio",
  attachment: "Attachment",
  avatar: "Avatar",
  badge: "Badge",
  breadcrumb: "Breadcrumb",
  bubble: "Bubble",
  button: "Button",
  "button-group": "Button Group",
  calendar: "Calendar",
  card: "Card",
  carousel: "Carousel",
  chart: "Chart",
  checkbox: "Checkbox",
  collapsible: "Collapsible",
  combobox: "Combobox",
  command: "Command",
  "context-menu": "Context Menu",
  "data-table": "Data Table",
  "date-picker": "Date Picker",
  dialog: "Dialog",
  direction: "Direction",
  drawer: "Drawer",
  "dropdown-menu": "Dropdown Menu",
  empty: "Empty",
  field: "Field",
  form: "Form",
  formisch: "Formisch",
  "hover-card": "Hover Card",
  input: "Input",
  "input-group": "Input Group",
  "input-otp": "Input OTP",
  item: "Item",
  kbd: "Kbd",
  label: "Label",
  installation: "インストール",
  manual: "手動インストール",
  marker: "Marker",
  menubar: "Menubar",
  message: "Message",
  "message-scroller": "Message Scroller",
  "native-select": "Native Select",
  "navigation-menu": "Navigation Menu",
  pagination: "Pagination",
  popover: "Popover",
  progress: "Progress",
  questionnaire: "Questionnaire",
  "radio-group": "Radio Group",
  react: "React",
  "react-hook-form": "React Hook Form",
  resizable: "Resizable",
  "scroll-area": "Scroll Area",
  "scroll-fade": "Scroll Fade",
  select: "Select",
  separator: "Separator",
  sheet: "Sheet",
  shimmer: "Shimmer",
  sidebar: "Sidebar",
  skeleton: "Skeleton",
  slider: "Slider",
  sonner: "Sonner",
  spinner: "Spinner",
  switch: "Switch",
  table: "Table",
  tabs: "Tabs",
  "tanstack-ai": "TanStack AI",
  "tanstack-form": "TanStack Form",
  textarea: "Textarea",
  toast: "Toast",
  toggle: "Toggle",
  "toggle-group": "Toggle Group",
  tooltip: "Tooltip",
  typography: "Typography",
  typeset: "Typeset",
  "dark-mode": "ダークモード",
  cli: "CLI",
  "components-json": "components.json",
  "package-imports": "パッケージインポート",
  figma: "Figma",
  javascript: "JavaScript",
  monorepo: "Monorepo",
  blocks: "Blocks",
  legacy: "Legacy",
  "llms.txt": "llms.txt",
  new: "New",
  official: "Official",
  registry: "Registry",
  rtl: "RTL",
  skills: "Skills",
  theming: "テーマ",
}

export function getPageDisplayName(page: { url?: string; name: unknown }) {
  const slug = page.url?.split("/").filter(Boolean).at(-1)
  return (
    (slug && ENGLISH_PAGE_NAMES[slug]) ||
    (typeof page.name === "string" ? page.name : String(page.name ?? ""))
  )
}

// Recursively find all pages in a folder tree.
export function getAllPagesFromFolder(folder: PageTreeFolder): PageTreePage[] {
  const pages: PageTreePage[] = []

  for (const child of folder.children) {
    if (child.type === "page") {
      pages.push(child)
    } else if (child.type === "folder") {
      pages.push(...getAllPagesFromFolder(child))
    }
  }

  return pages
}

// Get the pages from a folder, handling nested base folders (radix/base).
export function getPagesFromFolder(
  folder: PageTreeFolder,
  currentBase: string
): PageTreePage[] {
  // For the components folder, find the base subfolder.
  if (folder.$id === "components" || folder.name === "Components") {
    for (const child of folder.children) {
      if (child.type === "folder") {
        // Match by $id or by name.
        const isRadix = child.$id === "radix" || child.name === "Radix UI"
        const isBase = child.$id === "base" || child.name === "Base UI"
        const isReactAria = child.$id === "aria" || child.name === "React Aria"

        if (
          (currentBase === "radix" && isRadix) ||
          (currentBase === "base" && isBase) ||
          (currentBase === "aria" && isReactAria)
        ) {
          return child.children.filter(
            (c): c is PageTreePage => c.type === "page"
          )
        }
      }
    }

    // Fallback: return all pages from nested folders.
    return getAllPagesFromFolder(folder).filter(
      (page) => !page.url.endsWith("/components")
    )
  }

  // For other folders, return direct page children.
  return folder.children.filter(
    (child): child is PageTreePage => child.type === "page"
  )
}

// Get current base (radix, base, or aria) from pathname.
export function getCurrentBase(pathname: string): string {
  const baseMatch = pathname.match(/\/docs\/components\/(radix|base|aria)\//)
  return baseMatch ? baseMatch[1] : "base" // Default to base.
}
