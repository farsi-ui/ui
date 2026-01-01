"use client"

import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ComponentPreview } from "@/components/docs/component-preview"

const chartData = [
  { month: "فروردین", value: 186 },
  { month: "اردیبهشت", value: 305 },
  { month: "خرداد", value: 237 },
  { month: "تیر", value: 273 },
  { month: "مرداد", value: 209 },
  { month: "شهریور", value: 314 },
]

const pieData = [
  { name: "دسته اول", value: 400, fill: "hsl(var(--piccolo))" },
  { name: "دسته دوم", value: 300, fill: "hsl(var(--hit))" },
  { name: "دسته سوم", value: 200, fill: "hsl(var(--krillin))" },
  { name: "دسته چهارم", value: 100, fill: "hsl(var(--chi-chi))" },
]

export default function ChartsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">نمودارها</h1>
        <p className="text-lg text-muted-foreground">نمایش داده‌ها به صورت بصری با انواع نمودار</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">نمودار خطی</h2>
          <ComponentPreview
            code={`<ChartContainer config={{}}>
  <LineChart data={data}>
    <Line type="monotone" dataKey="value" stroke="hsl(var(--piccolo))" />
    <ChartTooltip content={<ChartTooltipContent />} />
  </LineChart>
</ChartContainer>`}
          >
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle>آمار فروش ماهانه</CardTitle>
                <CardDescription>نمایش تغییرات فروش در 6 ماه گذشته</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: {
                      label: "فروش",
                      color: "hsl(var(--piccolo))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <LineChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="value" stroke="hsl(var(--piccolo))" strokeWidth={2} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">نمودار میله‌ای</h2>
          <ComponentPreview
            code={`<BarChart data={data}>
  <Bar dataKey="value" fill="hsl(var(--hit))" />
  <ChartTooltip content={<ChartTooltipContent />} />
</BarChart>`}
          >
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle>مقایسه ماهانه</CardTitle>
                <CardDescription>نمایش داده‌ها به صورت میله‌ای</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: {
                      label: "مقدار",
                      color: "hsl(var(--hit))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <BarChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="hsl(var(--hit))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
