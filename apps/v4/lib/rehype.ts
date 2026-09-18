import fs from "fs"
import path from "path"
import { ExamplesIndex } from "@/examples/__index__"
import { u } from "unist-builder"
import { visit } from "unist-util-visit"

import { formatCode } from "@/lib/format-code"

export { formatCode } from "@/lib/format-code"

interface UnistNode {
  type: string
  name?: string
  properties?: Record<string, unknown>
  attributes?: { name: string; value: unknown; type?: string }[]
  children?: UnistNode[]
}

export interface UnistTree {
  type: string
  children: UnistNode[]
}

function getExamplePath(name: string, styleName: string) {
  const base = styleName.match(/^(base|radix|aria)-/)?.[1] ?? "base"
  return ExamplesIndex[base]?.[name]?.filePath
}

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    const nodes: Array<{
      node: UnistNode
      name: string
      styleName: string
      srcPath?: string
      hideCode?: boolean
    }> = []

    visit(tree, (node: UnistNode) => {
      if (node.name !== "ComponentSource" && node.name !== "ComponentPreview") {
        return
      }

      const getAttribute = (name: string) =>
        node.attributes?.find((attribute) => attribute.name === name)?.value

      const name = getAttribute("name") as string
      const srcPath = getAttribute("src") as string | undefined
      if (!name && !srcPath) return

      nodes.push({
        node,
        name,
        styleName: (getAttribute("styleName") as string) ?? "base-nova",
        srcPath,
        hideCode: getAttribute("hideCode") === true,
      })
    })

    await Promise.all(
      nodes.map(async ({ node, name, styleName, srcPath, hideCode }) => {
        if (hideCode) return
        if (srcPath?.startsWith("/registry/")) return

        try {
          const sourcePath = srcPath ?? getExamplePath(name, styleName)
          if (!sourcePath) return

          const raw = fs.readFileSync(path.join(process.cwd(), sourcePath), "utf8")
          const source = await formatCode(raw, styleName)

          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: { __src__: sourcePath },
              children: [
                u("element", {
                  tagName: "code",
                  properties: { className: ["language-tsx"] },
                  children: [{ type: "text", value: source }],
                }),
              ],
            })
          )
        } catch (error) {
          console.error(error)
        }
      })
    )
  }
}
