import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function BottomSheetPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">برگه پایین</h1>
        <p className="text-lg text-muted-foreground">پنل کشویی از پایین صفحه برای نمایش محتوای اضافی</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button>باز کردن</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>عنوان</SheetTitle>
      <SheetDescription>توضیحات</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button>باز کردن برگه پایین</Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[400px]">
                <SheetHeader>
                  <SheetTitle>تنظیمات سریع</SheetTitle>
                  <SheetDescription>تنظیمات خود را در اینجا پیکربندی کنید</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">نام</Label>
                    <Input id="name" placeholder="نام خود را وارد کنید" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">ایمیل</Label>
                    <Input id="email" type="email" placeholder="example@email.com" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">با محتوای پیچیده</h2>
          <ComponentPreview
            code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">فرم ارسال</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>فرم تماس</SheetTitle>
    </SheetHeader>
    {/* محتوای فرم */}
  </SheetContent>
</Sheet>`}
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">فرم تماس با ما</Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[500px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>تماس با ما</SheetTitle>
                  <SheetDescription>فرم زیر را پر کنید و پیام خود را ارسال نمایید</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="fullname">نام و نام خانوادگی</Label>
                    <Input id="fullname" placeholder="نام کامل" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-email">ایمیل</Label>
                    <Input id="contact-email" type="email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">پیام</Label>
                    <Input id="message" placeholder="پیام خود را بنویسید..." />
                  </div>
                  <Button className="mt-2">ارسال پیام</Button>
                </div>
              </SheetContent>
            </Sheet>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
