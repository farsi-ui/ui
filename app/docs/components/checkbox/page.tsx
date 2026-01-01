import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function CheckboxPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">چک‌باکس</h1>
        <p className="text-lg text-muted-foreground mt-2">گزینه‌های انتخابی با پشتیبانی RTL</p>
      </div>

      <ComponentPreview
        code={`import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return <Checkbox />
}`}
      >
        <Checkbox />
      </ComponentPreview>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">با برچسب</h2>
        <ComponentPreview
          code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">قوانین و مقررات را می‌پذیرم</Label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">قوانین و مقررات را می‌پذیرم</Label>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">چند گزینه</h2>
        <ComponentPreview
          code={`<div className="space-y-2">
  <div className="flex items-center gap-2">
    <Checkbox id="option1" />
    <Label htmlFor="option1">گزینه اول</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="option2" />
    <Label htmlFor="option2">گزینه دوم</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="option3" />
    <Label htmlFor="option3">گزینه سوم</Label>
  </div>
</div>`}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox id="option1" />
              <Label htmlFor="option1">گزینه اول</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="option2" />
              <Label htmlFor="option2">گزینه دوم</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="option3" />
              <Label htmlFor="option3">گزینه سوم</Label>
            </div>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">غیرفعال</h2>
        <ComponentPreview
          code={`<div className="flex items-center gap-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled">غیرفعال</Label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">غیرفعال</Label>
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
