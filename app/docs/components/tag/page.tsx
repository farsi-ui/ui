import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function TagPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">برچسب</h1>
        <p className="text-lg text-muted-foreground">برچسب‌های دسته‌بندی و تگ‌گذاری محتوا</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">انواع برچسب</h2>
          <ComponentPreview
            code={`<Badge>پیش‌فرض</Badge>
<Badge variant="secondary">ثانویه</Badge>
<Badge variant="outline">خط‌دار</Badge>
<Badge variant="destructive">خطر</Badge>`}
          >
            <div className="flex flex-wrap gap-2">
              <Badge>جدید</Badge>
              <Badge variant="secondary">محبوب</Badge>
              <Badge variant="outline">پیشنهادی</Badge>
              <Badge variant="destructive">حذف شده</Badge>
              <Badge className="bg-hit text-white">فعال</Badge>
              <Badge className="bg-krillin text-white">در حال بررسی</Badge>
              <Badge className="bg-roshi text-white">تایید شده</Badge>
            </div>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">دسته‌بندی محتوا</h2>
          <ComponentPreview
            code={`<div className="space-y-2">
  <h3>مقاله نمونه</h3>
  <div className="flex gap-2">
    <Badge>طراحی</Badge>
    <Badge>توسعه</Badge>
    <Badge>UI/UX</Badge>
  </div>
</div>`}
          >
            <div className="space-y-6 max-w-md">
              <div className="space-y-2">
                <h3 className="font-semibold">طراحی سیستم‌های پیچیده</h3>
                <p className="text-sm text-muted-foreground">راهنمای جامع طراحی سیستم‌های مقیاس‌پذیر</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">معماری</Badge>
                  <Badge variant="secondary">مقیاس‌پذیری</Badge>
                  <Badge variant="secondary">پایگاه داده</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">آموزش React</h3>
                <p className="text-sm text-muted-foreground">یادگیری مفاهیم پایه و پیشرفته React</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-piccolo text-white">React</Badge>
                  <Badge className="bg-piccolo text-white">JavaScript</Badge>
                  <Badge className="bg-piccolo text-white">فرانت‌اند</Badge>
                </div>
              </div>
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
