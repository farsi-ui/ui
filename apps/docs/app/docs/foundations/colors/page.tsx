import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const lightColors = [
  { name: "Piccolo", nameEn: "piccolo", hex: "#4e46e5", description: "رنگ اولیه" },
  { name: "Heles", nameEn: "heles", hex: "#f3f4f6", description: "هاور ثانویه" },
  { name: "Hit", nameEn: "hit", hex: "#10b981", description: "رنگ ثانویه" },
  { name: "Hover", nameEn: "hover", hex: "#d1d5db", description: "هاور اولیه" },
  { name: "Beerus", nameEn: "beerus", hex: "#e5e7eb", description: "رنگ لبه‌ها" },
  { name: "Goku", nameEn: "goku", hex: "#ffffff", description: "رنگ پس‌زمینه" },
  { name: "Gohan", nameEn: "gohan", hex: "#f9fafb", description: "رنگ سطح" },
  { name: "Zeno", nameEn: "zeno", hex: "#6b7280", description: "متن ثانویه" },
  { name: "Bulma", nameEn: "bulma", hex: "#111827", description: "متن بدنه اولیه" },
  { name: "Trunks", nameEn: "trunks", hex: "#374151", description: "متن/آیکون بدنه ثانویه" },
];

const darkColors = [
  { name: "Piccolo", nameEn: "piccolo", hex: "#6366f1", description: "رنگ اولیه" },
  { name: "Heles", nameEn: "heles", hex: "#374151", description: "هاور ثانویه" },
  { name: "Hit", nameEn: "hit", hex: "#34d399", description: "رنگ ثانویه" },
  { name: "Hover", nameEn: "hover", hex: "#4b5563", description: "هاور اولیه" },
  { name: "Beerus", nameEn: "beerus", hex: "#374151", description: "رنگ لبه‌ها" },
  { name: "Goku", nameEn: "goku", hex: "#111827", description: "رنگ پس‌زمینه" },
  { name: "Gohan", nameEn: "gohan", hex: "#1f2937", description: "رنگ سطح" },
  { name: "Zeno", nameEn: "zeno", hex: "#9ca3af", description: "متن ثانویه" },
  { name: "Bulma", nameEn: "bulma", hex: "#f9fafb", description: "متن بدنه اولیه" },
  { name: "Trunks", nameEn: "trunks", hex: "#d1d5db", description: "متن/آیکون بدنه ثانویه" },
];

const semanticColors = [
  { name: "Krillin", nameEn: "krillin", hex: "#f59e0b", description: "هشدار" },
  { name: "Chi-Chi", nameEn: "chichi", hex: "#ec4899", description: "صورتی" },
  { name: "Roshi", nameEn: "roshi", hex: "#06b6d4", description: "اطلاعات" },
  { name: "Dodoria", nameEn: "dodoria", hex: "#f97316", description: "نارنجی" },
  { name: "Cell", nameEn: "cell", hex: "#22c55e", description: "موفقیت" },
  { name: "Raditz", nameEn: "raditz", hex: "#ef4444", description: "خطا" },
  { name: "Whis", nameEn: "whis", hex: "#8b5cf6", description: "بنفش" },
  { name: "Frieza", nameEn: "frieza", hex: "#a855f7", description: "ارغوانی" },
  { name: "Nappa", nameEn: "nappa", hex: "#78716c", description: "خاکستری" },
];

function ColorSwatch({ color }: { color: (typeof lightColors)[0] }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
      <div
        className="size-12 rounded-lg shadow-sm border border-border/50 shrink-0"
        style={{ backgroundColor: color.hex }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium">{color.name}</span>
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{color.nameEn}</code>
        </div>
        <p className="text-sm text-muted-foreground">{color.description}</p>
        <code className="text-xs text-muted-foreground">{color.hex}</code>
      </div>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">سیستم رنگی</h1>
        <p className="text-lg text-muted-foreground">
          در این بخش می‌توانید رنگ‌های پایه و معنایی استفاده شده در طراحی را مشاهده کنید.
        </p>
      </div>

      {/* Light Theme Colors */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">روشن / Light</h2>
          <p className="text-muted-foreground">رنگ‌های پایه تم روشن</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {lightColors.map((color) => (
            <ColorSwatch key={color.nameEn} color={color} />
          ))}
        </div>
      </section>

      {/* Dark Theme Colors */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">تیره / Dark</h2>
          <p className="text-muted-foreground">رنگ‌های پایه تم تیره</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {darkColors.map((color) => (
            <ColorSwatch key={color.nameEn} color={color} />
          ))}
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">سایر رنگ‌ها</h2>
          <p className="text-muted-foreground">رنگ‌های حمایتی و معنایی</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {semanticColors.map((color) => (
            <ColorSwatch key={color.nameEn} color={color} />
          ))}
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">نحوه استفاده</h2>
        <Card>
          <CardHeader>
            <CardTitle>CSS Variables</CardTitle>
            <CardDescription>استفاده از متغیرهای CSS در کد</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm" dir="ltr">
              <code>{`/* استفاده در CSS */
.my-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border-color: hsl(var(--border));
}

/* استفاده با Tailwind */
<div className="bg-primary text-primary-foreground border-border">
  محتوا
</div>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
