"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { ComponentPreview } from "@/components/docs/component-preview"
import { cn } from "@/lib/utils"

export default function DatePickerPage() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">انتخاب‌گر تاریخ</h1>
        <p className="text-lg text-muted-foreground">انتخاب تاریخ با استفاده از تقویم</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`const [date, setDate] = useState<Date>()

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <CalendarIcon className="ml-2 h-4 w-4" />
      {date ? format(date, "PPP") : "انتخاب تاریخ"}
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>`}
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-[280px] justify-start text-right")}>
                  <CalendarIcon className="ml-2 h-4 w-4" />
                  {date ? date.toLocaleDateString("fa-IR") : "انتخاب تاریخ"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">تقویم ساده</h2>
          <ComponentPreview code={`<Calendar mode="single" selected={date} onSelect={setDate} />`}>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
