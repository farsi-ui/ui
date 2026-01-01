import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function TabsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">تب</h1>
        <p className="text-lg text-muted-foreground">سازماندهی محتوا با زبانه‌های قابل تعویض</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">زبانه اول</TabsTrigger>
    <TabsTrigger value="tab2">زبانه دوم</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">محتوای اول</TabsContent>
  <TabsContent value="tab2">محتوای دوم</TabsContent>
</Tabs>`}
          >
            <Tabs defaultValue="account" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">حساب کاربری</TabsTrigger>
                <TabsTrigger value="password">رمز عبور</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>حساب کاربری</CardTitle>
                    <CardDescription>اطلاعات حساب کاربری خود را مشاهده کنید</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-sm">
                      <div className="font-medium">نام:</div>
                      <div className="text-muted-foreground">کاربر نمونه</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">ایمیل:</div>
                      <div className="text-muted-foreground">user@example.com</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="password" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>رمز عبور</CardTitle>
                    <CardDescription>رمز عبور خود را تغییر دهید</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">برای امنیت بیشتر، از رمز عبور قوی استفاده کنید</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">سه تب</h2>
          <ComponentPreview
            code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">نمای کلی</TabsTrigger>
    <TabsTrigger value="analytics">تحلیل</TabsTrigger>
    <TabsTrigger value="reports">گزارش‌ها</TabsTrigger>
  </TabsList>
</Tabs>`}
          >
            <Tabs defaultValue="overview" className="w-full max-w-2xl">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">نمای کلی</TabsTrigger>
                <TabsTrigger value="analytics">تحلیل</TabsTrigger>
                <TabsTrigger value="reports">گزارش‌ها</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>نمای کلی</CardTitle>
                    <CardDescription>خلاصه اطلاعات و آمار کلی</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      اینجا می‌توانید خلاصه‌ای از اطلاعات مهم را مشاهده کنید
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>تحلیل داده</CardTitle>
                    <CardDescription>نمودارها و تحلیل‌های دقیق</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      تحلیل‌های پیشرفته و نمودارها در این بخش نمایش داده می‌شوند
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports" className="pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>گزارش‌ها</CardTitle>
                    <CardDescription>گزارش‌های تفصیلی</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">دانلود و مشاهده گزارش‌های کامل</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
