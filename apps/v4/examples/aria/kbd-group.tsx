import { Kbd, KbdGroup } from "@/components/ui/aria/kbd"

export default function KbdGroupExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        コマンドパレットを開くには{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        を使用します
      </p>
    </div>
  )
}
