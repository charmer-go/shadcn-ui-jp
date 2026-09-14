import { Button } from "@/components/ui/aria/button"
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/aria/dialog"
import { Field, FieldGroup } from "@/components/ui/aria/field"
import { Input } from "@/components/ui/aria/input"
import { Label } from "@/components/ui/aria/label"

export function DialogDemo() {
  return (
    <DialogTrigger>
      <form>
        <Button variant="outline">Open Dialog</Button>
        <Dialog className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose variant="outline">Cancel</DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </Dialog>
      </form>
    </DialogTrigger>
  )
}
