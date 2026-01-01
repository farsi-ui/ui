import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function SwitchPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">سوییچ</h1>
        <p className="text-lg text-muted-foreground">کلید روشن/خاموش برای تنظیمات دوحالته</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">حالت هواپیما</Label>
</div>`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Switch id="airplane" />
                <Label htmlFor="airplane">حالت هواپیما</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="bluetooth" defaultChecked />
                <Label htmlFor="bluetooth">بلوتوث</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="wifi" defaultChecked />
                <Label htmlFor="wifi">وای‌فای</Label>
              </div>
            </div>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">با توضیحات</h2>
          <ComponentPreview
            code={`<div className="flex items-start gap-2">
  <Switch id="notifications" />
  <div className="grid gap-1">
    <Label htmlFor="notifications">اعلان‌ها</Label>
    <p className="text-sm text-muted-foreground">
      دریافت اعلان برای بروزرسانی‌ها
    </p>
  </div>
</div>`}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-2">
                <Switch id="marketing" className="mt-1" />
                <div className="grid gap-1">
                  <Label htmlFor="marketing">ایمیل‌های تبلیغاتی</Label>
                  <p className="text-sm text-muted-foreground">دریافت ایمیل درباره محصولات جدید و پیشنهادهای ویژه</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Switch id="security" defaultChecked className="mt-1" />
                <div className="grid gap-1">
                  <Label htmlFor="security">اعلان‌های امنیتی</Label>
                  <p className="text-sm text-muted-foreground">هشدارهای مهم درباره امنیت حساب کاربری</p>
                </div>
              </div>
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
