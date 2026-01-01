import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function BannerPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">بنر</h1>
        <p className="text-lg text-muted-foreground">نمایش پیام‌های مهم، هشدارها و اطلاعیه‌ها</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">انواع بنر</h2>
          <ComponentPreview
            code={`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>اطلاعات</AlertTitle>
  <AlertDescription>
    این یک پیام اطلاعاتی است
  </AlertDescription>
</Alert>`}
          >
            <div className="space-y-4 w-full max-w-2xl">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>اطلاعات مهم</AlertTitle>
                <AlertDescription>این یک پیام اطلاعاتی برای کاربران است که باید به آن توجه کنند.</AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>خطا</AlertTitle>
                <AlertDescription>متأسفانه خطایی رخ داده است. لطفاً دوباره تلاش کنید.</AlertDescription>
              </Alert>
            </div>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">بنرهای موفقیت و هشدار</h2>
          <ComponentPreview
            code={`<Alert className="border-hit bg-hit/10">
  <CheckCircle2 className="h-4 w-4 text-hit" />
  <AlertTitle>موفق</AlertTitle>
  <AlertDescription>عملیات با موفقیت انجام شد</AlertDescription>
</Alert>`}
          >
            <div className="space-y-4 w-full max-w-2xl">
              <Alert className="border-hit bg-hit/10">
                <CheckCircle2 className="h-4 w-4 text-hit" />
                <AlertTitle>عملیات موفق</AlertTitle>
                <AlertDescription>تغییرات شما با موفقیت ذخیره شد.</AlertDescription>
              </Alert>

              <Alert className="border-krillin bg-krillin/10">
                <AlertCircle className="h-4 w-4 text-krillin" />
                <AlertTitle>هشدار</AlertTitle>
                <AlertDescription>لطفاً قبل از ادامه، تمام فیلدها را پر کنید.</AlertDescription>
              </Alert>
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
