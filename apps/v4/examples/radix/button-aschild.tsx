import Link from "next/link"

import { Button } from "@/components/ui/radix/button"

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">ログイン</Link>
    </Button>
  )
}
