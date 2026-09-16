import { Slider } from "@/components/ui/aria/slider"

export function SliderDemo() {
  return (
    <Slider
      aria-label="スライダー"
      defaultValue={[75]}
      maxValue={100}
      step={1}
      className="mx-auto w-full max-w-xs"
    />
  )
}
