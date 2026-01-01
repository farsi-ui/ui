import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">آکاردئون</h1>
        <p className="text-lg text-muted-foreground">نمایش محتوای قابل گسترش و جمع‌شدنی برای سازماندهی بهتر اطلاعات</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>عنوان اول</AccordionTrigger>
    <AccordionContent>
      محتوای بخش اول که می‌تواند شامل متن و عناصر مختلف باشد
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>عنوان دوم</AccordionTrigger>
    <AccordionContent>
      محتوای بخش دوم با اطلاعات مفید
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>آیا رایگان است؟</AccordionTrigger>
                <AccordionContent>
                  بله، این کتابخانه کاملاً رایگان و متن‌باز است و می‌توانید آن را در پروژه‌های خود استفاده کنید.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>چگونه نصب کنم؟</AccordionTrigger>
                <AccordionContent>
                  می‌توانید با استفاده از npm یا yarn این پکیج را نصب کنید و در پروژه خود import کنید.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>آیا از RTL پشتیبانی می‌کند؟</AccordionTrigger>
                <AccordionContent>
                  بله، این کتابخانه کاملاً از زبان‌های راست به چپ مانند فارسی پشتیبانی می‌کند.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">چند مورد باز</h2>
          <ComponentPreview
            code={`<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>بخش اول</AccordionTrigger>
    <AccordionContent>محتوای بخش اول</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>بخش دوم</AccordionTrigger>
    <AccordionContent>محتوای بخش دوم</AccordionContent>
  </AccordionItem>
</Accordion>`}
          >
            <Accordion type="multiple" className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>ویژگی‌های کلیدی</AccordionTrigger>
                <AccordionContent>
                  این کامپوننت شامل انیمیشن‌های روان، سفارشی‌سازی آسان و دسترسی‌پذیری کامل است.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>سفارشی‌سازی</AccordionTrigger>
                <AccordionContent>می‌توانید استایل، رنگ و رفتار کامپوننت را به راحتی تغییر دهید.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>پشتیبانی</AccordionTrigger>
                <AccordionContent>تیم پشتیبانی ما آماده کمک به شما در استفاده از این کامپوننت است.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
