import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/aria/progress"

export function ProgressWithLabel() {
  return (
    <Progress value={56} className="w-full max-w-sm">
      <ProgressLabel>アップロードの進行状況</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}
