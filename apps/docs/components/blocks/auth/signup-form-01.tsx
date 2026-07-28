"use client";

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
              با{" "}
              <Link href="#" className="text-primary underline-offset-4 hover:underline">
                قوانین و مقررات
              </Link>{" "}
              و{" "}
              <Link href="#" className="text-primary underline-offset-4 hover:underline">
                حریم خصوصی
              </Link>{" "}
              موافقم
            </Label>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button type="button" className="w-full">
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
}
