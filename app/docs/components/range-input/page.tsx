"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function RangeInputPage() {
  const [value, setValue] = useState([50])
  const [rangeValue, setRangeValue] = useState([25, 75])

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">اسلایدر محدوده</h1>
        <p className="text-lg text-muted-foreground">انتخاب مقدار یا بازه با استفاده از اسلایدر</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">اسلایدر تک مقداری</h2>
          <ComponentPreview
            code={`const [value, setValue] = useState([50])

<Slider value={value} onValueChange={setValue} max={100} step={1} />`}
          >
            <div className="w-full max-w-md space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>حجم</Label>
                  <span className="text-sm text-muted-foreground">{value[0]}%</span>
                </div>
                <Slider value={value} onValueChange={setValue} max={100} step={1} />
              </div>
            </div>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">اسلایدر بازه‌ای</h2>
          <ComponentPreview
            code={`const [value, setValue] = useState([25, 75])

<Slider value={value} onValueChange={setValue} max={100} step={1} />`}
          >
            <div className="w-full max-w-md space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>محدوده قیمت</Label>
                  <span className="text-sm text-muted-foreground">
                    {rangeValue[0]} - {rangeValue[1]}
                  </span>
                </div>
                <Slider
                  value={rangeValue}
                  onValueChange={setRangeValue}
                  max={100}
                  step={1}
                  minStepsBetweenThumbs={10}
                />
              </div>
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
