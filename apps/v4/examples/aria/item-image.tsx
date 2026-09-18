import Image from "next/image"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/aria/item"

const music = [
  {
    title: "真夜中の街の灯り",
    artist: "ネオン・ドリームス",
    album: "エレクトリック・ナイツ",
    duration: "3:45",
  },
  {
    title: "カフェでの会話",
    artist: "モーニング・ブリュー",
    album: "アーバン・ストーリーズ",
    duration: "4:05",
  },
  {
    title: "デジタルレイン",
    artist: "サイバー・シンフォニー",
    album: "バイナリー・ビーツ",
    duration: "3:30",
  },
]

export function ItemImage() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item href="#" key={song.title} variant="outline" role="listitem">
            <ItemMedia variant="image">
              <Image
                src={`https://avatar.vercel.sh/${song.title}`}
                alt={song.title}
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-1">
                {song.title} -{" "}
                <span className="text-muted-foreground">{song.album}</span>
              </ItemTitle>
              <ItemDescription>{song.artist}</ItemDescription>
            </ItemContent>
            <ItemContent className="flex-none text-center">
              <ItemDescription>{song.duration}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
