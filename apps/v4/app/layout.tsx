import type { Metadata } from "next"
import { cn } from "cn"
import { NuqsAdapter } from "nuqs/adapters/next/app"

import { META_THEME_COLORS, siteConfig } from "@/lib/config"
import { DOCS_SIDEBAR_SCROLL_RESTORE_SCRIPT } from "@/lib/docs-sidebar-scroll"
import { fontVariables } from "@/lib/fonts"
import { ActiveThemeProvider } from "@/components/active-theme"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider as BaseTooltipProvider } from "@/components/ui/base/tooltip"
import { Toaster } from "@/components/ui/radix/sonner"
import { TooltipProvider as RadixTooltipProvider } from "@/components/ui/radix/tooltip"
import { Toaster as BaseToaster } from "@/components/ui/base/toast"

import "@/app/globals.css"
import "@/app/docs-typeset.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS", "Components", "shadcn", "日本語"],
  authors: [
    {
      name: "Charmers",
      url: "https://shadcn.com",
    },
  ],
  creator: "Charmers",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: "@charmers_run",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={cn(
        fontVariables,
        "[--header-height:calc(var(--spacing)*14)] lg:[--header-height:calc(var(--spacing)*16)]"
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: DOCS_SIDEBAR_SCROLL_RESTORE_SCRIPT,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={cn(
          "group/body overscroll-none antialiased [--footer-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]"
        )}
      >
        <ThemeProvider>
          <ActiveThemeProvider>
            <NuqsAdapter>
              <BaseTooltipProvider delay={0}>
                <RadixTooltipProvider delayDuration={0}>
                  {children}
                  <Toaster position="top-center" />
                  <BaseToaster />
                </RadixTooltipProvider>
              </BaseTooltipProvider>
            </NuqsAdapter>
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
