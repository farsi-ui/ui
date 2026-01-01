import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const fontSizes = [
  { name: "text-xs", size: "12px", lineHeight: "16px", sample: "متن نمونه فارسی" },
  { name: "text-sm", size: "14px", lineHeight: "20px", sample: "متن نمونه فارسی" },
  { name: "text-base", size: "16px", lineHeight: "24px", sample: "متن نمونه فارسی" },
  { name: "text-lg", size: "18px", lineHeight: "28px", sample: "متن نمونه فارسی" },
  { name: "text-xl", size: "20px", lineHeight: "28px", sample: "متن نمونه فارسی" },
  { name: "text-2xl", size: "24px", lineHeight: "32px", sample: "متن نمونه فارسی" },
  { name: "text-3xl", size: "30px", lineHeight: "36px", sample: "متن نمونه فارسی" },
  { name: "text-4xl", size: "36px", lineHeight: "40px", sample: "متن نمونه فارسی" },
];

const fontWeights = [
  { name: "font-normal", weight: "400", sample: "وزن معمولی متن" },
  { name: "font-medium", weight: "500", sample: "وزن متوسط متن" },
  { name: "font-semibold", weight: "600", sample: "وزن نیمه‌ضخیم متن" },
  { name: "font-bold", weight: "700", sample: "وزن ضخیم متن" },
];

export default function TypographyPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">تایپوگرافی</h1>
        <p className="text-lg text-muted-foreground">
          سیستم تایپوگرافی Moon UI با پشتیبانی کامل از فونت فارسی وزیرمتن
        </p>
      </div>

      {/* Font Family */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">فونت اصلی</h2>
        <Card>
          <CardHeader>
            <CardTitle>Vazirmatn</CardTitle>
            <CardDescription>فونت پیش‌فرض برای متون فارسی</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-4xl font-bold">وزیرمتن - Vazirmatn</div>
            <p className="text-muted-foreground">
              فونت وزیرمتن یک فونت فارسی با کیفیت بالا است که برای استفاده در وب بهینه‌سازی شده است.
              این فونت شامل وزن‌های مختلف از 100 تا 900 می‌باشد.
            </p>
            <div className="grid gap-2 text-2xl">
              <span className="font-light">ابجد هوز حطی (Light)</span>
              <span className="font-normal">ابجد هوز حطی (Regular)</span>
              <span className="font-medium">ابجد هوز حطی (Medium)</span>
              <span className="font-bold">ابجد هوز حطی (Bold)</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Font Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">اندازه‌های فونت</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {fontSizes.map((item) => (
                <div key={item.name} className="flex items-center gap-4 p-4">
                  <code className="text-sm bg-muted px-2 py-1 rounded min-w-25">
                    {item.name}
                  </code>
                  <span className="text-sm text-muted-foreground min-w-20">{item.size}</span>
                  <span className={item.name}>{item.sample}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Font Weights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">وزن‌های فونت</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {fontWeights.map((item) => (
                <div key={item.name} className="flex items-center gap-4 p-4">
                  <code className="text-sm bg-muted px-2 py-1 rounded min-w-35">
                    {item.name}
                  </code>
                  <span className="text-sm text-muted-foreground min-w-12.5">{item.weight}</span>
                  <span className={`text-xl ${item.name}`}>{item.sample}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Headings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">سرتیترها</h2>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-1">
              <code className="text-xs bg-muted px-2 py-0.5 rounded">h1 - text-4xl font-bold</code>
              <h1 className="text-4xl font-bold">سرتیتر اول</h1>
            </div>
            <div className="space-y-1">
              <code className="text-xs bg-muted px-2 py-0.5 rounded">
                h2 - text-3xl font-semibold
              </code>
              <h2 className="text-3xl font-semibold">سرتیتر دوم</h2>
            </div>
            <div className="space-y-1">
              <code className="text-xs bg-muted px-2 py-0.5 rounded">
                h3 - text-2xl font-semibold
              </code>
              <h3 className="text-2xl font-semibold">سرتیتر سوم</h3>
            </div>
            <div className="space-y-1">
              <code className="text-xs bg-muted px-2 py-0.5 rounded">h4 - text-xl font-medium</code>
              <h4 className="text-xl font-medium">سرتیتر چهارم</h4>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Line Height */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">ارتفاع خط</h2>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <code className="text-xs bg-muted px-2 py-0.5 rounded">leading-tight (1.25)</code>
              <p className="leading-tight max-w-xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است.
              </p>
            </div>
            <div className="space-y-2">
              <code className="text-xs bg-muted px-2 py-0.5 rounded">leading-normal (1.5)</code>
              <p className="leading-normal max-w-xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است.
              </p>
            </div>
            <div className="space-y-2">
              <code className="text-xs bg-muted px-2 py-0.5 rounded">leading-relaxed (1.625)</code>
              <p className="leading-relaxed max-w-xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
