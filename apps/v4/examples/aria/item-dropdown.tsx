"use client"

import { ChevronDownIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/aria/avatar"
import { Button } from "@/components/ui/aria/button"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/aria/dropdown-menu"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/aria/item"

const people = [
  {
    username: "alex",
    avatar: "/avatars/01.png",
    email: "alex@example.com",
  },
  {
    username: "jamie",
    avatar: "/avatars/02.png",
    email: "jamie@example.com",
  },
  {
    username: "taylor",
    avatar: "/avatars/03.png",
    email: "taylor@example.com",
  },
]

export function ItemDropdown() {
  return (
    <DropdownMenuTrigger>
      <Button variant="outline">
        選択 <ChevronDownIcon />
      </Button>
      <DropdownMenu className="w-48" placement="bottom end">
        <DropdownMenuGroup>
          {people.map((person) => (
            <DropdownMenuItem key={person.username}>
              <Item size="xs" className="w-full p-2">
                <ItemMedia>
                  <Avatar className="size-(--avatar-size) [--avatar-size:--spacing(6.5)]">
                    <AvatarImage src={person.avatar} className="grayscale" />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription className="leading-none">
                    {person.email}
                  </ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}
