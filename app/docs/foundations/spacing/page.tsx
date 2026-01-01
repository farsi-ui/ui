import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const spacingScale = [
  { name: "0", value: "0px", rem: "0rem" },
  { name: "0.5", value: "2px", rem: "0.125rem" },
  { name: "1", value: "4px", rem: "0.25rem" },
  { name: "1.5", value: "6px", rem: "0.375rem" },
  { name: "2", value: "8px", rem: "0.5rem" },
  { name: "2.5", value: "10px", rem: "0.625rem" },
  { name: "3", value: "12px", rem: "0.75rem" },
  { name: "3.5", value: "14px", rem: "0.875rem" },
  { name: "4", value: "16px", rem: "1rem" },
  { name: "5", value: "20px", rem: "1.25rem" },
  { name: "6", value: "24px", rem: "1.5rem" },
  { name: "7", value: "28px", rem: "1.75rem" },
  { name: "8", value: "32px", rem: "2rem" },
  { name: "9", value: "36px", rem: "2.25rem" },
  { name: "10", value: "40px", rem: "2.5rem" },
  { name: "12", value: "48px", rem: "3rem" },
  { name: "16", value: "64px", rem: "4rem" },
];

const rtlUtilities = [
  { standard: "ml-*", rtl: "ms-*", description: "مارجین از ابتدا (راست در RTL)" },
  { standard: "mr-*", rtl: "me-*", description: "مارجین از انتها (چپ در RTL)" },
  { standard: "pl-*", rtl: "ps-*", description: "پدینگ از ابتدا (راست در RTL)" },
  { standard: "pr-*", rtl: "pe-*", description: "پدینگ از انتها (چپ در RTL)" },
  { standard: "left-*", rtl: "start-*", description: "موقعیت ابتدا" },
  { standard: "right-*", rtl: "end-*", description: "موقعیت انتها" },
  { standard: "text-left", rtl: "text-start", description: "تراز متن به ابتدا" },
  { standard: "text-right", rtl: "text-end", description: "تراز متن به انتها" },
  { standard: "border-l-*", rtl: "border-s-*", description: "بردر ابتدا" },
  { standard: "border-r-*", rtl: "border-e-*", description: "بردر انتها" },
];

export default function SpacingPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">فاصله‌گذاری</h1>
        <p className="text-lg text-muted-foreground">
          سیستم فاصله‌گذاری Moon UI بر اساس مقیاس 4px با پشتیبانی کامل RTL
        </p>
      </div>

      {/* Spacing Scale */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">مقیاس فاصله</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {spacingScale.map((item) => (
                <div key={item.name} className="flex items-center gap-4 p-4">
                  <code className="text-sm bg-muted px-2 py-1 rounded min-w-[60px] text-center">
                    {item.name}
                  </code>
                  <span className="text-sm text-muted-foreground min-w-[60px]">{item.value}</span>
                  <span className="text-sm text-muted-foreground min-w-[80px]">{item.rem}</span>
                  <div className="flex-1">
                    <div className="h-4 bg-primary rounded" style={{ width: item.value }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* RTL Utilities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">کلاس‌های RTL</h2>
        <p className="text-muted-foreground">
          برای پشتیبانی صحیح از RTL، از کلاس‌های منطقی (logical) به جای کلاس‌های جهت‌دار استفاده
          کنید.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>جدول تبدیل کلاس‌ها</CardTitle>
            <CardDescription>کلاس‌های استاندارد و معادل RTL آنها</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 font-medium text-sm">
                <span>استاندارد</span>
                <span>RTL-friendly</span>
                <span>توضیحات</span>
              </div>
              {rtlUtilities.map((item) => (
                <div key={item.standard} className="grid grid-cols-3 gap-4 p-4 text-sm">
                  <code className="bg-muted px-2 py-0.5 rounded w-fit">{item.standard}</code>
                  <code className="bg-primary/10 text-primary px-2 py-0.5 rounded w-fit">
                    {item.rtl}
                  </code>
                  <span className="text-muted-foreground">{item.description}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Grid System */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">سیستم گرید</h2>
        <Card>
          <CardHeader>
            <CardTitle>Moon Grid System</CardTitle>
            <CardDescription>سیستم گرید 12 ستونه با گاتر 16px</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mobile */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">موبایل</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">320px - 780px</code>
              </div>
              <p className="text-sm text-muted-foreground">
                2-4-6 ستون | مارجین: 16px | گاتر: 16px
              </p>
              <div className="grid grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 bg-primary/20 rounded border-2 border-primary/40" />
                ))}
              </div>
            </div>

            {/* Desktop */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">دسکتاپ</span>
                <code className="text-xs bg-muted px-2 py-0.5 rounded">1728px+</code>
              </div>
              <p className="text-sm text-muted-foreground">
                12-6-4-2 ستون | حداقل عرض: 104px | گاتر: 16px
              </p>
              <div className="grid grid-cols-12 gap-4 p-4 bg-muted/30 rounded-lg">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                  <div key={i} className="h-12 bg-primary/20 rounded border-2 border-primary/40" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">مثال کاربردی</h2>
        <Card>
          <CardHeader>
            <CardTitle>استفاده از فاصله‌گذاری RTL</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm" dir="ltr">
              <code>{`{/* ❌ اشتباه - جهت‌دار */}
<div className="ml-4 pr-6 text-left border-r-2">

{/* ✅ درست - منطقی (RTL-friendly) */}
<div className="ms-4 pe-6 text-start border-e-2">

{/* مثال کامل */}
<Card className="p-6">
  <div className="flex items-center gap-4">
    <Avatar className="size-12" />
    <div className="flex-1 space-y-1">
      <h3 className="font-semibold">نام کاربر</h3>
      <p className="text-sm text-muted-foreground">توضیحات</p>
    </div>
    <Button variant="ghost" size="icon" className="ms-auto">
      <MoreIcon />
    </Button>
  </div>
</Card>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
