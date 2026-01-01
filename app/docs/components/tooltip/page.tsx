import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info, HelpCircle, Settings } from "lucide-react"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function TooltipPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">راهنما</h1>
        <p className="text-lg text-muted-foreground">نمایش راهنمای کوتاه هنگام هاور روی عناصر</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">هاور کنید</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>این یک راهنما است</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
          >
            <TooltipProvider>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">هاور کنید</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>این یک راهنمای ساده است</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>اطلاعات بیشتر</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">راهنمای آیکون‌ها</h2>
          <ComponentPreview
            code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" variant="ghost">
        <Settings className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>تنظیمات</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
          >
            <TooltipProvider>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>تنظیمات</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>راهنما و پشتیبانی</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>درباره این ویژگی</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
