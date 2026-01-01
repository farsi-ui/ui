import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function DrawerPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">کشو</h1>
        <p className="text-lg text-muted-foreground">پنل کشویی از کنار صفحه برای منو یا محتوای جانبی</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">کشوی راست</h2>
          <ComponentPreview
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button>باز کردن کشو</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>عنوان کشو</SheetTitle>
      <SheetDescription>توضیحات</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button>باز کردن کشوی راست</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>تنظیمات پروفایل</SheetTitle>
                  <SheetDescription>اطلاعات پروفایل خود را ویرایش کنید</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">نام</Label>
                    <Input id="name" placeholder="نام خود را وارد کنید" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="username">نام کاربری</Label>
                    <Input id="username" placeholder="@username" />
                  </div>
                  <Button className="mt-4">ذخیره تغییرات</Button>
                </div>
              </SheetContent>
            </Sheet>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">کشوی چپ</h2>
          <ComponentPreview
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">منوی کناری</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>منوی ناوبری</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">باز کردن منو</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>منوی ناوبری</SheetTitle>
                  <SheetDescription>به بخش‌های مختلف دسترسی داشته باشید</SheetDescription>
                </SheetHeader>
                <div className="grid gap-2 py-4">
                  <Button variant="ghost" className="justify-start">
                    خانه
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    درباره ما
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    خدمات
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    تماس با ما
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
