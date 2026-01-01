import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function ChipsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">چیپس</h1>
        <p className="text-lg text-muted-foreground">برچسب‌های کوچک و فشرده برای نمایش اطلاعات یا فیلترها</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">انواع چیپس</h2>
          <ComponentPreview
            code={`<Badge>پیش‌فرض</Badge>
<Badge variant="secondary">ثانویه</Badge>
<Badge variant="outline">خط‌دار</Badge>
<Badge variant="destructive">حذف</Badge>`}
          >
            <div className="flex flex-wrap gap-2">
              <Badge>برچسب اول</Badge>
              <Badge variant="secondary">دسته‌بندی</Badge>
              <Badge variant="outline">فیلتر</Badge>
              <Badge variant="destructive">حذف شده</Badge>
              <Badge className="bg-hit text-white">فعال</Badge>
              <Badge className="bg-piccolo text-white">جدید</Badge>
            </div>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">چیپس قابل حذف</h2>
          <ComponentPreview
            code={`<Badge className="gap-1">
  برچسب
  <button className="hover:bg-white/20 rounded-full p-0.5">
    <X className="h-3 w-3" />
  </button>
</Badge>`}
          >
            <div className="flex flex-wrap gap-2">
              <Badge className="gap-1 pl-1">
                طراحی
                <button className="hover:bg-white/20 rounded-full p-0.5 transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
              <Badge variant="secondary" className="gap-1 pl-1">
                برنامه‌نویسی
                <button className="hover:bg-black/10 rounded-full p-0.5 transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
              <Badge variant="outline" className="gap-1 pl-1">
                توسعه
                <button className="hover:bg-black/10 rounded-full p-0.5 transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
              <Badge className="gap-1 pl-1 bg-hit text-white">
                فعال
                <button className="hover:bg-white/20 rounded-full p-0.5 transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
