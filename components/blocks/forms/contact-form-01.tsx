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
            <Label htmlFor="phone">شماره تماس</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="۰۹۱۲۱۲۳۴۵۶۷"
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
                <SelectItem value="feedback">بازخورد و پیشنهاد</SelectItem>
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
        <Button type="button" className="w-full">
          ارسال پیام
        </Button>
      </CardFooter>
    </Card>
  );
}
