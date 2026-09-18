"use client"

import * as React from "react"
import { cn } from "cn"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/aria/button"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/aria/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/aria/drawer"
import { Input } from "@/components/ui/aria/input"
import { Label } from "@/components/ui/aria/label"

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <DialogTrigger isOpen={open} onOpenChange={setOpen}>
        <Button variant="outline">プロフィールを編集</Button>
        <Dialog className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>プロフィールを編集</DialogTitle>
            <DialogDescription>
              プロフィールを編集します。完了したら保存をクリックしてください。
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </Dialog>
      </DialogTrigger>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant="outline" />}>
        プロフィールを編集
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>プロフィールを編集</DrawerTitle>
          <DrawerDescription>
            プロフィールを編集します。完了したら保存をクリックしてください。
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose render={<Button variant="outline" />}>
            キャンセル
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">メールアドレス</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">ユーザー名</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">変更を保存</Button>
    </form>
  )
}
