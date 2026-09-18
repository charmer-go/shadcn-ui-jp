import { createFromSource } from "fumadocs-core/search/server"

import { source } from "@/lib/source"

const search = createFromSource(source)

export const dynamic = "force-static"

// Static export cannot run a query API at request time. Export the index once
// during the build and let the browser search it locally.
export const GET = search.staticGET
