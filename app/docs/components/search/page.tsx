import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function SearchPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">جستجو</h1>
        <p className="text-lg text-muted-foreground">فیلد ورودی جستجو با آیکون و دکمه</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">جستجوی ساده</h2>
          <ComponentPreview
            code={`<div className="relative">
  <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
  <Input placeholder="جستجو..." className="pr-9" />
</div>`}
          >
            <div className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="جستجو..." className="pr-9" />
              </div>
            </div>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">با دکمه جستجو</h2>
          <ComponentPreview
            code={`<div className="flex gap-2">
  <div className="relative flex-1">
    <Search className="absolute right-3 top-3 h-4 w-4" />
    <Input placeholder="جستجو..." className="pr-9" />
  </div>
  <Button>جستجو</Button>
</div>`}
          >
            <div className="w-full max-w-md">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="جستجو در محصولات..." className="pr-9" />
                </div>
                <Button>جستجو</Button>
              </div>
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
