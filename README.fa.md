<!-- prettier-ignore -->
<div align="center">
  <img src="./public/android-chrome-512x512.png" alt="فارسی یو آی" height="88">

  <h1>فارسی یو آی</h1>
  <p><strong>کتابخانهٔ کامپوننت متن‌باز و RTL-first برای پروژه‌های فارسی با React.</strong></p>
  <p>کامپوننتی را که لازم دارید کپی کنید، در پروژه‌تان بگذارید و رابط کاربری فارسی و حرفه‌ای بسازید — بدون یک بار درگیر شدن با چیدمان راست‌به‌چپ.</p>

  <p>
    <a href="./README.fa.md">فارسی</a> ·
    <a href="./README.md">English</a>
  </p>

  <p>
    <a href="https://farsi.eindev.ir"><img alt="مستندات" src="https://img.shields.io/badge/docs-farsi.eindev.ir-6c5ce7?style=flat-square"></a>
    <a href="https://github.com/farsi-ui/ui"><img alt="گیت‌هاب" src="https://img.shields.io/badge/github-farsi--ui/ui-111318?style=flat-square&logo=github"></a>
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-111318?style=flat-square&logo=nextdotjs&logoColor=white">
    <img alt="React" src="https://img.shields.io/badge/React-19-111318?style=flat-square&logo=react&logoColor=61dafb">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-v4-111318?style=flat-square&logo=tailwindcss&logoColor=white">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-111318?style=flat-square&logo=typescript&logoColor=white">
    <img alt="پروانه" src="https://img.shields.io/badge/license-MIT-6c5ce7?style=flat-square">
  </p>

  <p>
    <a href="#why">چرا فارسی یو آی؟</a> ·
    <a href="#features">ویژگی‌ها</a> ·
    <a href="#quick-start">شروع سریع</a> ·
    <a href="#components">کامپوننت‌ها</a> ·
    <a href="#blocks">بلاک‌ها</a> ·
    <a href="#design-system">سیستم طراحی</a> ·
    <a href="#local-development">توسعه</a>
  </p>
</div>

RTL یک افزونه نیست که در پایان کار به پروژه اضافه شود؛ از همان ابتدا مشخص می‌کند چیدمان پایه، جهت آیکون‌ها، مقیاس فاصله‌ها و رفتار اعداد و نقطه‌گذاری چگونه باشد. فارسی یو آی از `dir="rtl"` شروع می‌کند و همه‌چیز را رو به جلو طراحی می‌کند.

> [!TIP]
> این مخزن هم‌زمان سورس کامپوننت‌ها و سایت مستندات را در بر دارد. مستندات زنده را در **[farsi.eindev.ir](https://farsi.eindev.ir)** ببینید — صفحهٔ هر کامپوننت یک پیش‌نمایش زنده و دکمهٔ کپی دارد.

<a id="why"></a>

## چرا

بیشتر کتابخانه‌های رابط کاربری React فرض می‌کنند چیدمان از چپ به راست است. این فرض در فاصله‌ها (`ml-4` به‌جای `ms-4`)، فلش‌ها، جهت اسلایدر و کاروسل، محل نمایش خطای فرم و حتی شتاب حرکت انیمیشن‌ها خودش را نشان می‌دهد. فارسی یو آی دقیقاً برعکس ساخته شده است:

- **RTL-first، نه وصلهٔ RTL.** چیدمان‌ها بر پایهٔ ویژگی‌های منطقی CSS نوشته شده‌اند، پس یک مارک‌آپ برای هر دو جهت کار می‌کند.
- **تایپوگرافی فارسی جدی گرفته شده.** فونت وزیر به‌صورت محلی سرو می‌شود، وزیرمتن در راهنماها تنظیم شده و تیترها به ویژگی‌های `rlig` و `calt` که متن فارسی به آن‌ها نیاز دارد مجهز شده‌اند.
- **دسترس‌پذیری از روز اول.** هر کامپوننت تعاملی روی primitiveهای Radix UI ساخته شده، بنابراین مدیریت فوکوس، پشتیبانی از صفحه‌کلید و اتصال‌های ARIA را رایگان به ارث می‌برید.
- **مالکیت کامل کد شما.** بدون وابستگی زمان اجرا، بدون پکیج تم، بدون جعبهٔ سیاه. فقط فایل‌های TypeScript ساده‌ای که می‌توانید ویرایششان کنید.

<a id="features"></a>

## ویژگی‌ها

- **۳۶ کامپوننت مستندشده** در شش دستهٔ ورودی، نمایشی، بازخورد، ناوبری، چیدمان و روکش — و کامپوننت‌های بیشتری در دست ساخت.
- **نصب با کپی و پیست.** بدون سنگینی `node_modules`: فایل را کپی کنید و کد را مال خودتان کنید.
- **بلاک‌های آماده** برای احراز هویت، داشبورد و فرم‌ها، ساخته‌شده از همان کامپوننت‌های پایه.
- **توکن‌های طراحی مون** به‌همراه لایهٔ **Material System** الهام‌گرفته از راهنمای انسانی اپل و شیشهٔ SwiftUI، بر پایهٔ OKLCH.
- **تم روشن و تاریک** با پشتیبانی از تنظیم سیستم و تغییر بدون پرش و انیمیشن.
- **آگاهی کامل از RTL** — ویژگی‌های منطقی، یوتیلیتی `rtl-flip`، تابع `useIsRTL()` و یک `DirectionProvider` از Radix.
- **جزئیات مناسب موبایل** — هدف لمسی ۴۴ پیکسل، کمک‌کننده‌های safe-area، و bottom sheet و drawer متناسب با صفحه‌های کوچک.
- **انیمیشن سازگار با `prefers-reduced-motion`** که با خواستهٔ کاربر خاموش می‌شود.
- **مستندات مناسب سئو و هوش مصنوعی** — متادیتای جداگانه برای هر صفحه، داده‌های ساخت‌یافته JSON-LD، نقشهٔ سایت، `robots.txt` و خروجی `/llms.txt`.

<a id="quick-start"></a>

## شروع سریع

### پیش‌نیازها

- Node.js نسخهٔ ۱۸ یا جدیدتر
- یک پروژهٔ Next.js با App Router (یا هر پروژهٔ React با Tailwind CSS v4)

### ۱. نصب وابستگی‌ها

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

### ۲. تنظیم جهت سند و فونت

فایل layout ریشه باید `lang="fa"` و `dir="rtl"` را داشته باشد:

```tsx
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
```

### ۳. افزودن تابع `cn`

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### ۴. کپی کردن کامپوننت

هر صفحهٔ کامپوننت را باز کنید، **Copy** را بزنید و فایل را داخل `components/ui/` بگذارید. کل فرایند نصب همین است.

```tsx
import { Button } from "@/components/ui/button";

export default function App() {
  return <Button variant="primary">شروع کنید</Button>;
}
```

> [!NOTE]
> صفحهٔ اصلی سایت یک راه میان‌بر مبتنی بر رجیستری هم نشان می‌دهد — `npx shadcn@latest add @einui/react` — برای تیم‌هایی که CLI را ترجیح می‌دهند. روش کپی و پیست، روش اصلی و رسمی است و با هر پروژه‌ای، حتی پروژه‌هایی که با shadcn راه‌اندازی نشده‌اند، کار می‌کند.

آموزش کامل: **[farsi.eindev.ir/docs/installation](https://farsi.eindev.ir/docs/installation)**.

<a id="components"></a>

## کامپوننت‌ها

شش دسته و ۳۶ کامپوننت مستندشده. صفحهٔ هر کامپوننت شامل پیش‌نمایش زنده، حالت‌های مختلف، سورس کامل و وابستگی‌های دقیق آن است.

| دسته | کامپوننت‌ها |
| --- | --- |
| **ورودی‌ها** | دکمه · ورودی متن · ورودی چندخطی · چک‌باکس · دکمه رادیویی · سوییچ · لیست انتخاب · اسلایدر · جست‌وجو · انتخاب چندگانه · فیلد |
| **نمایشی** | آواتار · برچسب · چیپ · کارت · جدول · تولتیپ |
| **بازخورد** | نوار پیشرفت · لودینگ · اسنک‌بار · اسکلتون · بنر · وضعیت خالی |
| **ناوبری** | تب · مسیر راهنما · صفحه‌بندی · ناوبری پایین · آیتم منو |
| **چیدمان** | آکاردئون · کاروسل |
| **روکش** | منوی کشویی · دراور · دیالوگ · دیالوگ تأیید · پاپ‌اوور · شیت پایین |

پوشهٔ سورس بیش از کامپوننت‌های مستندشده دارد: در مجموع ۵۶ primitive شامل سایدبار، چارت، تقویم، پالت فرمان، ورودی OTP، پنل‌های قابل تغییر اندازه و توست. فهرست کامل را در [`components/ui`](./components/ui) ببینید.

<a id="blocks"></a>

## بلاک‌ها

بلاک‌ها بخش‌های آماده و کاربردی هستند. یکی را کپی کنید و به‌جای صفحهٔ خالی، یک فرم ورود یا پنل داشبورد آماده دارید.

| دسته | بلاک‌ها |
| --- | --- |
| **احراز هویت** | فرم ورود ساده · فرم ورود با شبکه‌های اجتماعی · فرم ثبت‌نام |
| **داشبورد** | کارت‌های آماری · فروش‌های اخیر |
| **فرم‌ها** | فرم تماس |

سورس در [`components/blocks`](./components/blocks) قرار دارد و در [`lib/blocks-data.tsx`](./lib/blocks-data.tsx) فهرست شده است.

<a id="design-system"></a>

## سیستم طراحی

فارسی یو آی دو لایهٔ توکن دارد که هر دو با OKLCH نوشته شده‌اند تا تم روشن و تاریک از نظر بصری هماهنگ بمانند.

**توکن‌های مون** — پالت پایه که برای به‌خاطر سپردن، نام قهرمانان دراگون‌بال را گرفته است: `piccolo` (رنگ اصلی)، `hit`، `frieza`، `roshi`، `krillin`، `whis`، `chichi`، `dodoria` و خنثی‌هایی مانند `trunks`، `beerus`، `gohan` و `goku`.

```css
--piccolo: 250 90% 62%; /* رنگ اصلی */
--hit: 174 60% 50%; /* رنگ مکمل */
--beerus: 240 6% 92%; /* مرزها و سطوح */
```

**توکن‌های متریال** — لایه‌ای تازه‌تر بر پایهٔ راهنمای انسانی اپل و متریال‌های شیشه‌ای SwiftUI (`regular`، `clear`، `tint`، `interactive`) که با `backdrop-filter` و `color-mix()` و پشتیبانی از `color-scheme` ساخته شده است.

```css
--material-glass-fallback-regular: rgb(255 255 255 / 0.68);
```

یوتیلیتی‌های RTL هم بخشی از سیستم‌اند، نه یک الحاقه در آخر کار:

- `rtl-flip` — آیکون را فقط در چیدمان راست‌به‌چپ برمی‌گرداند.
- `useIsRTL()` — صفت `dir` زندهٔ سند را می‌خواند تا منطق شرطی بنویسید.
- `touch-target` و `safe-area-*` — حداقل ۴۴ پیکسل و فاصلهٔ امن از ناچ و حاشیهٔ گوشی.
- `prefers-reduced-motion` — یوتیلیتی‌های انیمیشن خودشان را خاموش می‌کنند.

> [!IMPORTANT]
> کامپوننت‌های شیشه‌ای (Material System) **در حال توسعه** هستند. primitiveها و توکن‌هایشان در همین مخزن موجود است و صفحهٔ پیش‌نمایش در [/glass-components](https://farsi.eindev.ir/glass-components) قرار دارد.

<a id="local-development"></a>

## توسعهٔ محلی

سایت مستندات همان محیط توسعهٔ کتابخانه است، یعنی می‌توانید یک کامپوننت را تغییر دهید و نتیجه را زنده ببینید.

```bash
git clone https://github.com/farsi-ui/ui.git
cd ui
pnpm install

pnpm dev     # اجرای سایت مستندات روی http://localhost:3000
pnpm lint    # ESLint
pnpm build   # بیلد پروداکشن
pnpm start   # اجرای بیلد پروداکشن
```

| اسکریپت | کاری که انجام می‌دهد |
| --- | --- |
| `pnpm dev` | اجرای سرور توسعهٔ Next.js با بارگذاری مجدد زنده |
| `pnpm lint` | اجرای ESLint روی کل مخزن |
| `pnpm build` | بیلد پروداکشن |
| `pnpm start` | اجرای بیلد پروداکشن |

### متغیرهای محیطی

| متغیر | مقدار پیش‌فرض | کاربرد |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://farsi.eindev.ir/` | آدرس اصلی سایت برای متادیتا، نقشهٔ سایت و `robots.txt` |
| `GOOGLE_SITE_VERIFICATION` | — | توکن گوگل سرچ کنسول |

برای توسعهٔ محلی، فایل `.env.local.example` را به `.env.local` کپی کنید.

### ساختار پروژه

```
app/                  مسیرها: صفحهٔ اصلی، /docs، /glass-components، /llms.txt، نقشهٔ سایت، robots
  docs/               مستندات: شروع کار، مبانی، کامپوننت‌ها، بلاک‌ها
components/
  ui/                 ۵۶ primitive رابط کاربری (سبک shadcn، بر پایهٔ Radix)
  blocks/             بخش‌های آماده: احراز هویت، داشبورد، فرم‌ها
  glass/              کامپوننت‌های شیشه‌ای / Material System (در حال توسعه)
  docs/               پوستهٔ مستندات: سایدبار، هدر، پیش‌نمایش‌ها، بلوک نصب
lib/                  فهرست کامپوننت‌ها و بلاک‌ها، هایلایتر Shiki، تابع cn()
hooks/                use-rtl، use-mobile، use-toast
styles/               globals.css به‌همراه لایه‌های توکن مون و متریال
public/fonts/         فونت وزیر (۴۰۰ و ۷۰۰) سرو‌شده به‌صورت محلی
```

افزودن یک کامپوننت یعنی ساخت فایل و سپس ثبت آن در [`lib/components-data.tsx`](./lib/components-data.tsx) همراه با دسته، نمونه‌ها، وابستگی‌ها و مسیر سورس. صفحهٔ مستندات، سایدبار، نقشهٔ سایت و خروجی `/llms.txt` همگی از همین فهرست ساخته می‌شوند.

## استقرار

فایل [`Dockerfile`](./Dockerfile) چندمرحله‌ای روی `node:20-alpine` با pnpm بیلد می‌شود، فقط وابستگی‌های پروداکشن را منتقل می‌کند و `next start` را پشت یک بررسی سلامت روی پورت ۳۰۰۰ اجرا می‌کند.

```bash
docker build -t farsi-ui .
docker run -p 3000:3000 farsi-ui
```

انتشار یک نسخهٔ جدید در گیت‌هاب، جریان کاری [`deploy`](./.github/workflows/deploy.yml) را فعال می‌کند که ایمیج را روی سرور مقصد بیلد و استک Compose را دوباره راه‌اندازی می‌کند. یک [خط لولهٔ GitLab](./.gitlab-ci.yml) هم با مراحل نصب، لینت، تست و بیلد در نظر گرفته شده است.

## پروژهٔ خودتان را نشان دهید

چیزی با فارسی یو آی ساخته‌اید؟ یک گفتگو باز کنید تا در صفحهٔ اصلی سایت معرفی شود:

**[github.com/orgs/einlab/discussions](https://github.com/orgs/einlab/discussions)**

پرسش‌ها، باگ‌ها و گزارش‌های مربوط به دسترسی‌پذیری همگی در [بخش مسائل](https://github.com/farsi-ui/ui/issues) ثبت می‌شوند؛ قالب‌های اختصاصی برای باگ، قابلیت، مستندات و دسترسی‌پذیری آماده است.

---

<div align="center">
  <p>با عشق برای توسعه‌دهندگان فارسی‌زبان ساخته شده است · <a href="https://eindev.ir">Ein</a></p>
</div>
