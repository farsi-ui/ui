import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">ورودی</h1>
        <p className="text-base text-muted-foreground">فیلد ورودی متن با پشتیبانی RTL</p>
      </div>

      <ComponentPreview
        code={`import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input placeholder="متن خود را وارد کنید" />
}`}
      >
        <Input placeholder="متن خود را وارد کنید" className="max-w-sm" />
      </ComponentPreview>

      <div className="space-y-4">
        <h2 className="text-lg font-medium tracking-tight">با برچسب</h2>
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label htmlFor="email">ایمیل</Label>
  <Input id="email" type="email" placeholder="example@email.com" />
</div>`}
        >
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="email">ایمیل</Label>
            <Input id="email" type="email" placeholder="example@email.com" />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium tracking-tight">ورودی LTR</h2>
        <p className="text-sm text-muted-foreground">
          برای ورودی‌هایی مانند ایمیل یا شماره تلفن، می‌توانید جهت را به LTR تغییر دهید.
        </p>
        <ComponentPreview
          code={`<Input 
  type="email" 
  placeholder="example@email.com" 
  dir="ltr" 
  className="text-left" 
/>`}
        >
          <Input type="email" placeholder="example@email.com" dir="ltr" className="max-w-sm text-left" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium tracking-tight">غیرفعال</h2>
        <ComponentPreview code={`<Input disabled placeholder="غیرفعال" />`}>
          <Input disabled placeholder="غیرفعال" className="max-w-sm" />
        </ComponentPreview>
      </div>
    </div>
  )
}
