import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function CardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">کارت</h1>
        <p className="text-base text-muted-foreground">کامپوننت کارت برای نمایش محتوا</p>
      </div>

      <ComponentPreview
        code={`import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>عنوان کارت</CardTitle>
        <CardDescription>توضیحات کارت</CardDescription>
      </CardHeader>
      <CardContent>
        محتوای کارت در اینجا قرار می‌گیرد.
      </CardContent>
    </Card>
  )
}`}
      >
        <Card className="w-[320px]">
          <CardHeader>
            <CardTitle>عنوان کارت</CardTitle>
            <CardDescription>توضیحات کارت</CardDescription>
          </CardHeader>
          <CardContent>محتوای کارت در اینجا قرار می‌گیرد.</CardContent>
        </Card>
      </ComponentPreview>

      <div className="space-y-4">
        <h2 className="text-lg font-medium tracking-tight">کارت با فرم</h2>
        <ComponentPreview
          code={`<Card>
  <CardHeader>
    <CardTitle>ورود به حساب</CardTitle>
    <CardDescription>ایمیل و رمز عبور خود را وارد کنید</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">ایمیل</Label>
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">رمز عبور</Label>
      <Input id="password" type="password" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">ورود</Button>
  </CardFooter>
</Card>`}
        >
          <Card className="w-[320px]">
            <CardHeader>
              <CardTitle>ورود به حساب</CardTitle>
              <CardDescription>ایمیل و رمز عبور خود را وارد کنید</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-email">ایمیل</Label>
                <Input id="card-email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-password">رمز عبور</Label>
                <Input id="card-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">ورود</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>
    </div>
  )
}
