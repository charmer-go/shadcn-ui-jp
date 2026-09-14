import { Slider } from "@/components/ui/aria/slider"

export function SliderDisabled() {
  return (
    <Slider
      aria-label="Disabled slider"
      defaultValue={[50]}
      maxValue={100}
      step={1}
      isDisabled
      className="mx-auto w-full max-w-xs"
    />
  )
}
