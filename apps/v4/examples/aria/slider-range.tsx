import { Slider } from "@/components/ui/aria/slider"

export function SliderRange() {
  return (
    <Slider
      aria-label="範囲"
      defaultValue={[25, 50]}
      maxValue={100}
      step={5}
      className="mx-auto w-full max-w-xs"
    />
  )
}
