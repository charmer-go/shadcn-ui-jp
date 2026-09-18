import { buttonVariants } from "@/components/ui/base/button"

export default function ButtonRender() {
  return (
    <a
      href="#"
      className={buttonVariants({ variant: "secondary", size: "sm" })}
    >
      ログイン
    </a>
  )
}
