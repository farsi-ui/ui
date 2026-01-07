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

export function LoginForm01() {
  return (
    <Card className="w-xs">
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
}
