"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function ProgressPage() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">نوار پیشرفت</h1>
        <p className="text-lg text-muted-foreground">نمایش میزان پیشرفت یک عملیات</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview code={`<Progress value={66} />`}>
            <div className="w-full max-w-md space-y-4">
              <Progress value={progress} />
              <Progress value={33} />
              <Progress value={80} />
            </div>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">با رنگ سفارشی</h2>
          <ComponentPreview
            code={`<Progress value={66} className="[&>div]:bg-hit" />
<Progress value={50} className="[&>div]:bg-krillin" />
<Progress value={75} className="[&>div]:bg-roshi" />`}
          >
            <div className="w-full max-w-md space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>دانلود فایل</span>
                  <span>66%</span>
                </div>
                <Progress value={66} className="[&>div]:bg-hit" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>آپلود</span>
                  <span>50%</span>
                </div>
                <Progress value={50} className="[&>div]:bg-krillin" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>تکمیل شده</span>
                  <span>100%</span>
                </div>
                <Progress value={100} className="[&>div]:bg-roshi" />
              </div>
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
