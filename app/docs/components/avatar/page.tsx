import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">آواتار</h1>
        <p className="text-lg text-muted-foreground">نمایش تصویر پروفایل کاربران با پشتیبانی از fallback</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`<Avatar>
  <AvatarImage src="/avatar.jpg" alt="نام کاربر" />
  <AvatarFallback>م.ا</AvatarFallback>
</Avatar>`}
          >
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="کاربر" />
                <AvatarFallback>م.ا</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>س.م</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-piccolo text-white">ع.ر</AvatarFallback>
              </Avatar>
            </div>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">اندازه‌های مختلف</h2>
          <ComponentPreview
            code={`<Avatar className="h-8 w-8">
  <AvatarFallback>کو</AvatarFallback>
</Avatar>
<Avatar className="h-12 w-12">
  <AvatarFallback>می</AvatarFallback>
</Avatar>
<Avatar className="h-16 w-16">
  <AvatarFallback>بز</AvatarFallback>
</Avatar>`}
          >
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">کو</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback>می</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">بز</AvatarFallback>
              </Avatar>
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-xl">خ.ب</AvatarFallback>
              </Avatar>
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
