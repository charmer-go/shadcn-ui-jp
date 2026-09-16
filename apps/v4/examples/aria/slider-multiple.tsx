import { Slider } from "@/components/ui/aria/slider"

export function SliderMultiple() {
  return (
    <Slider
      aria-label="複数スライダー"
      defaultValue={[10, 20, 70]}
      maxValue={100}
      step={10}
      className="mx-auto w-full max-w-xs"
    />
  )
}
