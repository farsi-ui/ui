import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function AuthCodePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">کد احراز هویت</h1>
        <p className="text-lg text-muted-foreground">ورودی کد تایید برای احراز هویت دو مرحله‌ای</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">کد ۶ رقمی</h2>
          <ComponentPreview
            code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
          >
            <div className="flex flex-col items-center gap-4">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-sm text-muted-foreground">کد تایید ارسال شده را وارد کنید</p>
            </div>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">کد ۴ رقمی</h2>
          <ComponentPreview
            code={`<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`}
          >
            <div className="flex flex-col items-center gap-4">
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-sm text-muted-foreground">کد پین 4 رقمی خود را وارد کنید</p>
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
