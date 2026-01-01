import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { allComponents, componentCategories, getComponentsByCategory } from "@/lib/components-data"

export default function ComponentsOverviewPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">کامپوننت‌ها</h1>
          <Badge variant="secondary" className="text-sm">
            {allComponents.length}
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          مجموعه کامل کامپوننت‌های طراحی شده برای ساخت رابط کاربری مدرن و زیبا با پشتیبانی کامل از راست به چپ
        </p>
      </div>

      {/* Components by Category */}
      {Object.entries(componentCategories).map(([categoryKey, categoryLabel]) => {
        const categoryComponents = getComponentsByCategory(categoryKey as keyof typeof componentCategories)
        if (categoryComponents.length === 0) return null

        return (
          <section key={categoryKey} className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{categoryLabel}</h2>
              <Badge variant="outline" className="text-xs">
                {categoryComponents.length}
              </Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryComponents.map((component) => (
                <Link key={component.slug} href={`/docs/components/${component.slug}`} className="group block">
                  <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {component.name}
                        </CardTitle>
                        <span className="text-xs text-muted-foreground">{component.nameEn}</span>
                      </div>
                      <CardDescription className="text-sm line-clamp-2">{component.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-center text-primary hover:bg-primary/10"
                      >
                        مشاهده
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
