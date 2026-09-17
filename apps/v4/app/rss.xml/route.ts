import { NextResponse } from "next/server"

const rssUrl = "https://ui.shadcn.com/rss.xml"

export function GET() {
  return NextResponse.redirect(rssUrl, 308)
}
