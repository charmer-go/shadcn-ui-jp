import path from "path"
import { createMDX } from "fumadocs-mdx/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
    ],
  },
  turbopack: {
    root: path.resolve(import.meta.dirname, "../.."),
  },
  redirects() {
    return [
      // Form redirects to /docs/forms.
      {
        source: "/docs/components/form",
        destination: "/docs/forms",
        permanent: true,
      },
      {
        source: "/docs/components/radix/form",
        destination: "/docs/forms",
        permanent: true,
      },
      {
        source: "/docs/components/base/form",
        destination: "/docs/forms",
        permanent: true,
      },
      {
        source: "/docs/components/aria/form",
        destination: "/docs/forms",
        permanent: true,
      },
      // Base UI Sonner redirects to Toast.
      {
        source: "/docs/components/base/sonner",
        destination: "/docs/components/base/toast",
        permanent: true,
      },
      {
        source: "/docs/components/base/sonner.md",
        destination: "/docs/components/base/toast.md",
        permanent: true,
      },
      // Component redirects (default to base).
      {
        source: "/docs/components/:name((?!radix|base|aria|form)[^/]+)",
        destination: "/docs/components/base/:name",
        permanent: false,
      },
      {
        source: "/docs/components/:name((?!radix|base|aria|form)[^/]+).md",
        destination: "/docs/components/base/:name.md",
        permanent: false,
      },
      // Other redirects.
      {
        source: "/components",
        destination: "/docs/components",
        permanent: true,
      },
      {
        source: "/official",
        destination: "/docs/official",
        permanent: true,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/figma",
        destination: "/docs/figma",
        permanent: true,
      },
      {
        source: "/sidebar",
        destination: "/docs/components/sidebar",
        permanent: true,
      },
      {
        source: "/react-19",
        destination: "/docs/react-19",
        permanent: true,
      },
      {
        source: "/docs/:path*.mdx",
        destination: "/docs/:path*.md",
        permanent: true,
      },
      {
        source: "/mcp",
        destination: "/docs/mcp",
        permanent: false,
      },
      {
        source: "/skills",
        destination: "/docs/skills",
        permanent: true,
      },
      {
        source: "/cli",
        destination: "/docs/cli",
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
