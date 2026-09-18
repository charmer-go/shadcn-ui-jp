import { promises as fs } from "fs"
import path from "path"

export async function readFileFromRoot(relativePath: string) {
  if (!/^examples[\\/]/.test(relativePath)) {
    return null
  }

  const examplePath = relativePath.replace(/^examples[\\/]/, "")
  const absolutePath = path.join(process.cwd(), "examples", examplePath)

  try {
    return await fs.readFile(absolutePath, "utf-8")
  } catch {
    return null
  }
}
