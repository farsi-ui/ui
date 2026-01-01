import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function SelectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">انتخاب</h1>
        <p className="text-lg text-muted-foreground mt-2">منوی کشویی برای انتخاب گزینه</p>
      </div>

      <ComponentPreview
        code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">گزینه اول</SelectItem>
        <SelectItem value="option2">گزینه دوم</SelectItem>
        <SelectItem value="option3">گزینه سوم</SelectItem>
      </SelectContent>
    </Select>
  )
}`}
      >
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="انتخاب کنید" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">گزینه اول</SelectItem>
            <SelectItem value="option2">گزینه دوم</SelectItem>
            <SelectItem value="option3">گزینه سوم</SelectItem>
          </SelectContent>
        </Select>
      </ComponentPreview>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">با برچسب</h2>
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label>شهر</Label>
  <Select>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="شهر خود را انتخاب کنید" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="tehran">تهران</SelectItem>
      <SelectItem value="isfahan">اصفهان</SelectItem>
      <SelectItem value="shiraz">شیراز</SelectItem>
      <SelectItem value="mashhad">مشهد</SelectItem>
    </SelectContent>
  </Select>
</div>`}
        >
          <div className="space-y-2">
            <Label>شهر</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="شهر خود را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tehran">تهران</SelectItem>
                <SelectItem value="isfahan">اصفهان</SelectItem>
                <SelectItem value="shiraz">شیراز</SelectItem>
                <SelectItem value="mashhad">مشهد</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentPreview>
      </div>
    </div>
  )
}
