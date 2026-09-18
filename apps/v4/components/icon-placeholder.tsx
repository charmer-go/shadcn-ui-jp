import * as React from "react"
import * as LucideIcons from "lucide-react"

type IconPlaceholderProps = React.ComponentProps<"svg"> & {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}

export function IconPlaceholder({
  lucide,
  tabler: _tabler,
  hugeicons: _hugeicons,
  phosphor: _phosphor,
  remixicon: _remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon =
    (lucide &&
      (LucideIcons as unknown as Record<
        string,
        React.ComponentType<React.ComponentProps<"svg">>
      >)[lucide]) || LucideIcons.SquareIcon

  return <Icon {...props} />
}
