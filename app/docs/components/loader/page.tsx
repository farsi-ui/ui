import { Spinner } from "@/components/ui/spinner"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function LoaderPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">بارگذاری</h1>
        <p className="text-lg text-muted-foreground">نمایش وضعیت بارگذاری با انیمیشن‌های مختلف</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">اندازه‌های مختلف</h2>
          <ComponentPreview
            code={`<Spinner size="sm" />
<Spinner size="default" />
<Spinner size="lg" />`}
          >
            <div className="flex items-center gap-8">
              <Spinner size="sm" />
              <Spinner size="default" />
              <Spinner size="lg" />
            </div>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">با متن</h2>
          <ComponentPreview
            code={`<div className="flex items-center gap-2">
  <Spinner size="sm" />
  <span>در حال بارگذاری...</span>
</div>`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Spinner size="sm" />
                <span className="text-sm">در حال بارگذاری...</span>
              </div>
              <div className="flex items-center gap-2">
                <Spinner />
                <span>لطفاً صبر کنید</span>
              </div>
              <div className="flex items-center gap-3">
                <Spinner size="lg" />
                <span className="text-lg">در حال پردازش درخواست</span>
              </div>
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
