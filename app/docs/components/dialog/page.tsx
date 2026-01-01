import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function DialogPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">دیالوگ</h1>
        <p className="text-base text-muted-foreground">پنجره مودال برای تعاملات و نمایش محتوا</p>
      </div>

      <ComponentPreview
        code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>باز کردن دیالوگ</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>عنوان دیالوگ</DialogTitle>
          <DialogDescription>
            توضیحات دیالوگ در اینجا قرار می‌گیرد.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button>باز کردن دیالوگ</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>عنوان دیالوگ</DialogTitle>
              <DialogDescription>توضیحات دیالوگ در اینجا قرار می‌گیرد.</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <div className="space-y-4">
        <h2 className="text-lg font-medium tracking-tight">دیالوگ با فرم</h2>
        <ComponentPreview
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button>ویرایش پروفایل</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>ویرایش پروفایل</DialogTitle>
      <DialogDescription>
        اطلاعات پروفایل خود را ویرایش کنید.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">نام</Label>
        <Input id="name" placeholder="نام خود را وارد کنید" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">نام کاربری</Label>
        <Input id="username" placeholder="@username" />
      </div>
    </div>
    <DialogFooter>
      <Button variant="outline">انصراف</Button>
      <Button>ذخیره تغییرات</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button>ویرایش پروفایل</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>ویرایش پروفایل</DialogTitle>
                <DialogDescription>اطلاعات پروفایل خود را ویرایش کنید.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="dialog-name">نام</Label>
                  <Input id="dialog-name" placeholder="نام خود را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dialog-username">نام کاربری</Label>
                  <Input id="dialog-username" placeholder="@username" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">انصراف</Button>
                <Button>ذخیره تغییرات</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </div>
    </div>
  )
}
