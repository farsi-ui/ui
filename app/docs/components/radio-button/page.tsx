import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function RadioButtonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">دکمه رادیویی</h1>
        <p className="text-lg text-muted-foreground">انتخاب یک گزینه از بین چند مورد</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">گزینه اول</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">گزینه دوم</Label>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">پیش‌فرض</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">راحت</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">فشرده</Label>
              </div>
            </RadioGroup>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">با توضیحات</h2>
          <ComponentPreview
            code={`<RadioGroup defaultValue="card">
  <div className="flex items-start gap-2">
    <RadioGroupItem value="card" id="card" className="mt-1" />
    <div className="grid gap-1">
      <Label htmlFor="card">کارت بانکی</Label>
      <p className="text-sm text-muted-foreground">
        پرداخت با کارت‌های بانکی
      </p>
    </div>
  </div>
</RadioGroup>`}
          >
            <RadioGroup defaultValue="card" className="gap-4">
              <div className="flex items-start gap-2">
                <RadioGroupItem value="card" id="pay-card" className="mt-1" />
                <div className="grid gap-1">
                  <Label htmlFor="pay-card">کارت بانکی</Label>
                  <p className="text-sm text-muted-foreground">پرداخت آنلاین با کارت‌های عضو شتاب</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <RadioGroupItem value="wallet" id="pay-wallet" className="mt-1" />
                <div className="grid gap-1">
                  <Label htmlFor="pay-wallet">کیف پول</Label>
                  <p className="text-sm text-muted-foreground">پرداخت از طریق کیف پول الکترونیکی</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <RadioGroupItem value="cash" id="pay-cash" className="mt-1" />
                <div className="grid gap-1">
                  <Label htmlFor="pay-cash">پرداخت در محل</Label>
                  <p className="text-sm text-muted-foreground">پرداخت نقدی هنگام تحویل</p>
                </div>
              </div>
            </RadioGroup>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
