import { Slider } from "@/components/ui/aria/slider"

export function SliderDisabled() {
  return (
    <Slider
      aria-label="無効なスライダー"
      defaultValue={[50]}
      maxValue={100}
      step={1}
      isDisabled
      className="mx-auto w-full max-w-xs"
    />
  )
}
