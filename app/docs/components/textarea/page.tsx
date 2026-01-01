import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function TextareaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">متن چندخطی</h1>
        <p className="text-lg text-muted-foreground mt-2">فیلد ورودی متن چندخطی</p>
      </div>

      <ComponentPreview
        code={`import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="متن خود را بنویسید..." />
}`}
      >
        <Textarea placeholder="متن خود را بنویسید..." className="max-w-lg" />
      </ComponentPreview>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">با برچسب</h2>
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label htmlFor="bio">درباره شما</Label>
  <Textarea id="bio" placeholder="چند جمله درباره خودتان..." />
</div>`}
        >
          <div className="space-y-2 w-full max-w-lg">
            <Label htmlFor="bio">درباره شما</Label>
            <Textarea id="bio" placeholder="چند جمله درباره خودتان..." />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">غیرفعال</h2>
        <ComponentPreview code={`<Textarea disabled placeholder="غیرفعال" />`}>
          <Textarea disabled placeholder="غیرفعال" className="max-w-lg" />
        </ComponentPreview>
      </div>
    </div>
  )
}
