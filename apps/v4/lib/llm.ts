import { PAGES_NEW } from "@/lib/docs"
import { getPagesFromFolder, type PageTreeFolder } from "@/lib/page-tree"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"

function getComponentsList(variant: "all" | "new") {
  const componentsFolder = source.pageTree.children.find(
    (page) => page.$id === "components"
  )

  if (componentsFolder?.type !== "folder") return ""

  return getPagesFromFolder(componentsFolder as PageTreeFolder, "base")
    .filter(
      (component) => variant === "all" || PAGES_NEW.includes(component.url)
    )
    .map((component) => {
      const description = source
        .getPage(component.url.replace(/^\/docs\//, "").split("/"))
        ?.data.description?.trim()
      const url = absoluteUrl(component.url.replace("/base/", "/"))
      return `- [${component.name}](${url})${
        description ? `: ${description}` : ""
      }`
    })
    .join("\n")
}

export function replaceComponentsList(content: string) {
  return content
    .replace(
      /<ComponentsList\s+variant=["']new["']\s*\/>/g,
      getComponentsList("new")
    )
    .replace(/<ComponentsList\s*\/>/g, getComponentsList("all"))
}
