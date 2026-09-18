import { IconGitBranch, IconGitFork } from "@tabler/icons-react"

import { Button } from "@/components/ui/base/button"

export default function ButtonWithIcon() {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <IconGitBranch data-icon="inline-start" /> 新しいブランチ
      </Button>
      <Button variant="outline">
        フォーク
        <IconGitFork data-icon="inline-end" />
      </Button>
    </div>
  )
}
