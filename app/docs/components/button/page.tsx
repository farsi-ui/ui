import { Button } from "@/components/ui/button"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">دکمه</h1>
        <p className="text-base text-muted-foreground">دکمه‌های تعاملی با انواع مختلف و اندازه‌های متنوع</p>
      </div>

      <ComponentPreview
        code={`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>دکمه</Button>
}`}
      >
        <Button>دکمه</Button>
      </ComponentPreview>

      <div className="space-y-4">
        <h2 className="text-lg font-medium tracking-tight">انواع دکمه</h2>
        <ComponentPreview
          code={`<Button variant="default">پیش‌فرض</Button>
<Button variant="secondary">ثانویه</Button>
<Button variant="outline">خط‌دار</Button>
<Button variant="ghost">شبح</Button>
<Button variant="destructive">خطرناک</Button>
<Button variant="link">لینک</Button>`}
        >
          <div className="flex flex-wrap gap-3">
            <Button variant="default">پیش‌فرض</Button>
            <Button variant="secondary">ثانویه</Button>
            <Button variant="outline">خط‌دار</Button>
            <Button variant="ghost">شبح</Button>
            <Button variant="destructive">خطرناک</Button>
            <Button variant="link">لینک</Button>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium tracking-tight">اندازه‌ها</h2>
        <ComponentPreview
          code={`<Button size="sm">کوچک</Button>
<Button size="default">معمولی</Button>
<Button size="lg">بزرگ</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">کوچک</Button>
            <Button size="default">معمولی</Button>
            <Button size="lg">بزرگ</Button>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium tracking-tight">غیرفعال</h2>
        <ComponentPreview code={`<Button disabled>غیرفعال</Button>`}>
          <Button disabled>غیرفعال</Button>
        </ComponentPreview>
      </div>
    </div>
  )
}
