import { allComponents } from "@/lib/components-data";

export const dynamic = "force-static";
export const revalidate = 3600;

const siteSections = [
  {
    path: "/docs",
    title: "معرفی فارسی یو آی",
    description: "مرکز اصلی مستندات، ویژگی‌های کلیدی و مسیر شروع کار با کتابخانه.",
  },
  {
    path: "/docs/installation",
    title: "نصب و راه‌اندازی",
    description: "راهنمای نصب، پیکربندی و راه‌اندازی پروژه با فارسی یو آی.",
  },
  {
    path: "/docs/components",
    title: "کامپوننت‌ها",
    description: "فهرست کامپوننت‌های آماده و نمونه‌های کاربردی برای استفاده در پروژه‌ها.",
  },
  {
    path: "/docs/blocks",
    title: "بلوک‌ها",
    description: "الگوهای آماده و بخش‌های قابل استفاده برای ساخت سریع interface‌های حرفه‌ای.",
  },
  {
    path: "/docs/foundations",
    title: "مبانی طراحی",
    description: "راهنمای رنگ، تایپوگرافی، فاصله و اصول طراحی RTL-first.",
  },
  {
    path: "/docs/configuration",
    title: "پیکربندی",
    description: "تنظیمات و راهنمای استفاده از ابزارها و فایل‌های پیکربندی پروژه.",
  },
] as const;

export async function GET() {
  const componentList = allComponents
    .map(
      (component) =>
        `- [${component.name} (${component.nameEn})](/docs/components/${component.slug}): ${component.description}`,
    )
    .join("\n");

  const body = `# Farsi UI

> Farsi UI is an open-source, RTL-first UI component library for Persian applications, built with React, Next.js, TypeScript, and Tailwind CSS.

## Overview
Farsi UI provides a copy-and-own foundation for building accessible, modern, Persian-friendly interfaces with a strong RTL-first mindset. The project focuses on clarity, local ownership, and production-ready components that are easy to customize.

## Key sections
${siteSections
  .map((section) => `- [${section.title}](${section.path}): ${section.description}`)
  .join("\n")}

## Components
${componentList}

## Project notes
- The library is designed for Persian users and RTL layouts by default.
- Components are intended to be copied into products and adapted as needed.
- The docs site is the main place to explore usage patterns, examples, and installation guidance.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
