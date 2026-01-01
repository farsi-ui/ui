import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function PopoverPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">پاپ‌اوور</h1>
        <p className="text-lg text-muted-foreground">نمایش محتوای شناور در کنار عنصر محرک</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">باز کردن</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">عنوان</h4>
      <p className="text-sm">محتوای پاپ‌اوور</p>
    </div>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">باز کردن پاپ‌اوور</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">ابعاد</h4>
                  <p className="text-sm text-muted-foreground">ابعاد محتوا را تنظیم کنید</p>
                  <div className="grid gap-2 pt-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">عرض</Label>
                      <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">ارتفاع</Label>
                      <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">با فرم</h2>
          <ComponentPreview
            code={`<Popover>
  <PopoverTrigger asChild>
    <Button>تنظیمات</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <Label htmlFor="email">ایمیل</Label>
      <Input id="email" type="email" />
      <Button size="sm">ذخیره</Button>
    </div>
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button>تنظیمات سریع</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">پروفایل</h4>
                    <p className="text-sm text-muted-foreground">اطلاعات خود را وارد کنید</p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid gap-1">
                      <Label htmlFor="name">نام</Label>
                      <Input id="name" placeholder="نام شما" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="email">ایمیل</Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                  <Button size="sm">ذخیره تغییرات</Button>
                </div>
              </PopoverContent>
            </Popover>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
