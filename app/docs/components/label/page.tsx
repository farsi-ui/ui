import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function LabelPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">برچسب</h1>
        <p className="text-lg text-muted-foreground mt-2">برچسب برای فرم‌ها و ورودی‌ها</p>
      </div>

      <ComponentPreview
        code={`import { Label } from "@/components/ui/label"

export function LabelDemo() {
  return <Label htmlFor="name">نام</Label>
}`}
      >
        <Label htmlFor="name">نام</Label>
      </ComponentPreview>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">با ورودی</h2>
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label htmlFor="username">نام کاربری</Label>
  <Input id="username" placeholder="نام کاربری" />
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <Label htmlFor="username">نام کاربری</Label>
            <Input id="username" placeholder="نام کاربری" />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">با چک‌باکس</h2>
        <ComponentPreview
          code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">قوانین را می‌پذیرم</Label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">قوانین را می‌پذیرم</Label>
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
