import type { ReactNode } from "react";
import {
  LoginForm01,
  LoginForm02,
  SignupForm01,
  StatsCards01,
  RecentSales01,
  ContactForm01,
} from "@/components/blocks";

export interface BlockExample {
  id: string;
  title: string;
  description?: string;
  preview: ReactNode;
  code: string;
}

export interface BlockData {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  category: "authentication" | "dashboard" | "marketing" | "ecommerce" | "forms";
  examples: BlockExample[];
  isNew?: boolean;
}

export const blockCategories = {
  authentication: "احراز هویت",
  dashboard: "داشبورد",
  marketing: "بازاریابی",
  ecommerce: "فروشگاه",
  forms: "فرم‌ها",
};

// Helper function to get block by slug
export function getBlockBySlug(slug: string): BlockData | undefined {
  return allBlocks.find((b) => b.slug === slug);
}

// Helper function to get blocks by category
export function getBlocksByCategory(category: string): BlockData[] {
  return allBlocks.filter((b) => b.category === category);
}

// All blocks definitions
export const allBlocks: BlockData[] = [
  // ===== AUTHENTICATION =====
  {
    slug: "login-01",
    name: "فرم ورود ساده",
    nameEn: "Simple Login Form",
    description: "فرم ورود کلاسیک با فیلدهای ایمیل و رمز عبور، گزینه به خاطر سپردن و لینک‌های مرتبط",
    category: "authentication",
    isNew: true,
    examples: [
      {
        id: "default",
        title: "پیش‌نمایش",
        description: "فرم ورود استاندارد با پشتیبانی کامل RTL",
        preview: <LoginForm01 />,
        code: `"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function LoginForm01() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl">ورود به حساب کاربری</CardTitle>
        <CardDescription>
          برای ورود، ایمیل و رمز عبور خود را وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">ایمیل</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              dir="ltr"
              className="text-start"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">رمز عبور</Label>
              <Link
                href="#"
                className="text-xs text-primary underline-offset-4 hover:underline"
              >
                فراموشی رمز عبور؟
              </Link>
            </div>
            <Input id="password" type="password" required dir="ltr" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
              مرا به خاطر بسپار
            </Label>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button type="submit" className="w-full">
          ورود
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          حساب کاربری ندارید؟{" "}
          <Link href="#" className="text-primary underline-offset-4 hover:underline">
            ثبت‌نام کنید
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}`,
      },
    ],
  },
  {
    slug: "login-02",
    name: "فرم ورود با شبکه‌های اجتماعی",
    nameEn: "Social Login Form",
    description: "فرم ورود با گزینه‌های ورود از طریق گوگل و گیت‌هاب و همچنین فرم ایمیل",
    category: "authentication",
    isNew: true,
    examples: [
      {
        id: "default",
        title: "پیش‌نمایش",
        description: "فرم ورود با دکمه‌های شبکه‌های اجتماعی",
        preview: <LoginForm02 />,
        code: `"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function LoginForm02() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">خوش آمدید</CardTitle>
        <CardDescription>
          برای ورود، یکی از روش‌های زیر را انتخاب کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full">
            <svg className="me-2 h-4 w-4" viewBox="0 0 24 24">
              {/* Google Icon */}
            </svg>
            گوگل
          </Button>
          <Button variant="outline" className="w-full">
            <svg className="me-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              {/* GitHub Icon */}
            </svg>
            گیت‌هاب
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">یا با ایمیل</span>
          </div>
        </div>

        {/* Email Login Form */}
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">ایمیل</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              dir="ltr"
              className="text-start"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">رمز عبور</Label>
            <Input id="password" type="password" required dir="ltr" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button type="submit" className="w-full">
          ورود به حساب
        </Button>
        <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
          <Link href="#" className="hover:text-primary hover:underline underline-offset-4">
            فراموشی رمز عبور
          </Link>
          <Link href="#" className="hover:text-primary hover:underline underline-offset-4">
            ثبت‌نام
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}`,
      },
    ],
  },
  {
    slug: "signup-01",
    name: "فرم ثبت‌نام",
    nameEn: "Signup Form",
    description: "فرم ثبت‌نام کامل با فیلدهای نام، ایمیل، رمز عبور و پذیرش قوانین",
    category: "authentication",
    isNew: true,
    examples: [
      {
        id: "default",
        title: "پیش‌نمایش",
        description: "فرم ثبت‌نام با تمام فیلدهای ضروری",
        preview: <SignupForm01 />,
        code: `"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function SignupForm01() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl">ایجاد حساب کاربری</CardTitle>
        <CardDescription>
          اطلاعات خود را وارد کنید تا حساب کاربری جدید ایجاد شود
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="firstName">نام</Label>
              <Input id="firstName" placeholder="علی" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">نام خانوادگی</Label>
              <Input id="lastName" placeholder="محمدی" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">ایمیل</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              dir="ltr"
              className="text-start"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">رمز عبور</Label>
            <Input id="password" type="password" required dir="ltr" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">تکرار رمز عبور</Label>
            <Input id="confirmPassword" type="password" required dir="ltr" />
          </div>
          <div className="flex items-start gap-2">
            <Checkbox id="terms" className="mt-1" />
            <Label htmlFor="terms" className="text-sm font-normal cursor-pointer leading-relaxed">
              با قوانین و مقررات و حریم خصوصی موافقم
            </Label>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button type="submit" className="w-full">
          ثبت‌نام
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          قبلاً ثبت‌نام کرده‌اید؟{" "}
          <Link href="#" className="text-primary underline-offset-4 hover:underline">
            وارد شوید
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}`,
      },
    ],
  },

  // ===== DASHBOARD =====
  {
    slug: "stats-cards-01",
    name: "کارت‌های آماری",
    nameEn: "Stats Cards",
    description: "مجموعه کارت‌های آماری برای نمایش شاخص‌های کلیدی عملکرد (KPI)",
    category: "dashboard",
    isNew: true,
    examples: [
      {
        id: "default",
        title: "پیش‌نمایش",
        description: "چهار کارت آماری با روند صعودی و نزولی",
        preview: <StatsCards01 />,
        code: `"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Activity } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  trend: "up" | "down";
  trendValue: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, description, trend, trendValue, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          {trend === "up" ? (
            <TrendingUp className="h-3 w-3 text-green-500" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500" />
          )}
          <span className={trend === "up" ? "text-green-500" : "text-red-500"}>
            {trendValue}
          </span>
          <span>{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsCards01() {
  const stats = [
    {
      title: "کل درآمد",
      value: "۴۵,۲۳۱,۰۰۰ تومان",
      description: "نسبت به ماه قبل",
      trend: "up",
      trendValue: "+۲۰.۱%",
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
    // ... more stats
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}`,
      },
    ],
  },
  {
    slug: "recent-sales-01",
    name: "فروش‌های اخیر",
    nameEn: "Recent Sales",
    description: "لیست فروش‌های اخیر با آواتار، نام و مقدار هر فروش",
    category: "dashboard",
    isNew: true,
    examples: [
      {
        id: "default",
        title: "پیش‌نمایش",
        description: "کارت نمایش آخرین فروش‌ها",
        preview: <RecentSales01 />,
        code: `"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales01() {
  const sales = [
    {
      name: "علی محمدی",
      email: "ali@example.com",
      amount: "+۱,۹۹۹,۰۰۰ تومان",
    },
    // ... more sales
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>فروش‌های اخیر</CardTitle>
        <CardDescription>شما این ماه ۲۶۵ فروش داشته‌اید.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sales.map((sale, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={sale.avatar} alt={sale.name} />
                  <AvatarFallback className="text-xs">
                    {sale.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium leading-none">{sale.name}</p>
                  <p className="text-xs text-muted-foreground" dir="ltr">
                    {sale.email}
                  </p>
                </div>
              </div>
              <div className="text-sm font-medium text-green-600 dark:text-green-400">
                {sale.amount}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}`,
      },
    ],
  },

  // ===== FORMS =====
  {
    slug: "contact-form-01",
    name: "فرم تماس با ما",
    nameEn: "Contact Form",
    description: "فرم تماس کامل با فیلدهای نام، ایمیل، موضوع و پیام",
    category: "forms",
    isNew: true,
    examples: [
      {
        id: "default",
        title: "پیش‌نمایش",
        description: "فرم تماس با انتخاب موضوع",
        preview: <ContactForm01 />,
        code: `"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm01() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>تماس با ما</CardTitle>
        <CardDescription>
          پیام خود را بنویسید، در اسرع وقت پاسخ خواهیم داد.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">نام</Label>
              <Input id="firstName" placeholder="علی" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">نام خانوادگی</Label>
              <Input id="lastName" placeholder="محمدی" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">ایمیل</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              dir="ltr"
              className="text-start"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">موضوع</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="موضوع پیام را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">سوال عمومی</SelectItem>
                <SelectItem value="support">پشتیبانی فنی</SelectItem>
                <SelectItem value="sales">فروش و قیمت</SelectItem>
                <SelectItem value="partnership">همکاری</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">پیام</Label>
            <Textarea
              id="message"
              placeholder="پیام خود را اینجا بنویسید..."
              rows={5}
              required
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          ارسال پیام
        </Button>
      </CardFooter>
    </Card>
  );
}`,
      },
    ],
  },
];
