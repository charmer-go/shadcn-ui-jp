import { getComponent } from "@/examples/__components__"
import { ExamplesIndex } from "@/examples/__index__"

import { readFileFromRoot } from "@/lib/read-file"

type Example = {
  name: string
  filePath: string
}

function getExampleBase(styleName: string) {
  const base = styleName.match(/^(base|radix|aria)-/)?.[1]
  return base ?? "base"
}

function getExample(name: string, styleName: string): Example | undefined {
  return ExamplesIndex[getExampleBase(styleName)]?.[name]
}

export function getExampleComponent(name: string, styleName: string) {
  return getComponent(getExampleBase(styleName), name)
}

export async function getExampleSource(name: string, styleName: string) {
  const example = getExample(name, styleName)
  if (!example) return null

  const content = await readFileFromRoot(example.filePath)
  if (!content) return null

  return {
    content,
  }
}
