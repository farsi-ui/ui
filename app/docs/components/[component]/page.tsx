import { notFound } from "next/navigation"
import { getComponentBySlug, allComponents, componentCategories } from "@/lib/components-data"
import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PageProps {
  params: Promise<{ component: string }>
}

export async function generateStaticParams() {
  return allComponents.map((component) => ({
    component: component.slug,
  }))
}

export default async function ComponentPage({ params }: PageProps) {
  const { component: slug } = await params
  const componentData = getComponentBySlug(slug)

  if (!componentData) {
    notFound()
  }

  // Get previous and next components for navigation
  const currentIndex = allComponents.findIndex((c) => c.slug === slug)
  const prevComponent = currentIndex > 0 ? allComponents[currentIndex - 1] : null
  const nextComponent = currentIndex < allComponents.length - 1 ? allComponents[currentIndex + 1] : null

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-xs">
            {componentCategories[componentData.category]}
          </Badge>
          <span className="text-xs text-muted-foreground">{componentData.nameEn}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{componentData.name}</h1>
        <p className="text-lg text-muted-foreground">{componentData.description}</p>
      </div>

      {/* Examples */}
      <div className="space-y-12">
        {componentData.examples.map((example) => (
          <section key={example.id} className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">{example.title}</h2>
              {example.description && <p className="text-sm text-muted-foreground">{example.description}</p>}
            </div>
            <ComponentPreview code={example.code}>{example.preview}</ComponentPreview>
          </section>
        ))}
      </div>

      {/* Navigation - Fixed RTL navigation with correct chevron directions */}
      <div className="flex items-center justify-between border-t pt-6">
        {prevComponent ? (
          <Link
            href={`/docs/components/${prevComponent.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div>
              <p className="text-xs text-muted-foreground">قبلی</p>
              <p className="font-medium text-foreground">{prevComponent.name}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {nextComponent ? (
          <Link
            href={`/docs/components/${nextComponent.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground text-left"
          >
            <div>
              <p className="text-xs text-muted-foreground">بعدی</p>
              <p className="font-medium text-foreground">{nextComponent.name}</p>
            </div>
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
