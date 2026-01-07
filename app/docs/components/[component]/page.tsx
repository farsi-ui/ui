import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getComponentBySlug, allComponents, componentCategories } from "@/lib/components-data";
import { ComponentPreview } from "@/components/docs/component-preview";
import { SourceCodeBlock } from "@/components/docs/source-code-block";
import { InstallationBlock } from "@/components/docs/installation-block";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ component: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farsi.eindev.ir/";

export async function generateStaticParams() {
  return allComponents.map((component) => ({
    component: component.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { component: slug } = await params;
  const componentData = getComponentBySlug(slug);

  if (!componentData) {
    return {
      title: "کامپوننت یافت نشد",
    };
  }

  const categoryLabel = componentCategories[componentData.category];
  const title = `${componentData.name} (${componentData.nameEn})`;
  const description = `${componentData.description} - کامپوننت ${componentData.nameEn} از دسته ${categoryLabel} در فارسی یو آی`;
  const url = `${siteUrl}/docs/components/${slug}`;

  return {
    title,
    description,
    keywords: [
      componentData.name,
      componentData.nameEn,
      categoryLabel,
      "React Component",
      "RTL",
      "کامپوننت فارسی",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${componentData.name} - کامپوننت ${componentData.nameEn}`,
      description,
      url,
      type: "article",
      images: [
        {
          url: `/og/components/${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${componentData.name} Component - فارسی یو آی`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${componentData.name} - ${componentData.nameEn}`,
      description,
    },
  };
}

export default async function ComponentPage({ params }: PageProps) {
  const { component: slug } = await params;
  const componentData = getComponentBySlug(slug);

  if (!componentData) {
    notFound();
  }

  // Get previous and next components for navigation
  const currentIndex = allComponents.findIndex((c) => c.slug === slug);
  const prevComponent = currentIndex > 0 ? allComponents[currentIndex - 1] : null;
  const nextComponent = currentIndex < allComponents.length - 1 ? allComponents[currentIndex + 1] : null;

  // JSON-LD Schema for component documentation
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${componentData.name} - ${componentData.nameEn}`,
    description: componentData.description,
    author: {
      "@type": "Organization",
      name: "فارسی یو آی",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "فارسی یو آی",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/docs/components/${slug}`,
    },
    about: {
      "@type": "SoftwareSourceCode",
      name: componentData.nameEn,
      programmingLanguage: "TypeScript",
      runtimePlatform: "React",
    },
    inLanguage: "fa-IR",
    keywords: `${componentData.name}, ${componentData.nameEn}, React, RTL, فارسی یو آی`,
  };


  return (
    <>
      {/* JSON-LD Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-xs">
              {componentCategories[componentData.category]}
            </Badge>
            <span className="text-xs text-muted-foreground">{componentData.nameEn}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{componentData.name}</h1>
          <p className="text-lg text-muted-foreground">{componentData.description}</p>
        </header>

        {/* Main Example Section - First example with large preview and source code below */}
        {componentData.examples.length > 0 && (
          <section className="">
            {/* Main Example Title */}
            <div className="space-y-2 mb-4">
              <h3 className="text-xl font-semibold">{componentData.examples[0].title}</h3>
              {componentData.examples[0].description && (
                <p className="text-sm text-muted-foreground">{componentData.examples[0].description}</p>
              )}
            </div>

            {/* Main Preview */}
            <div className="border rounded-t-lg p-6 sm:p-8 justify-center bg-black">
              {componentData.examples[0].preview}
            </div>

            {/* Source Code Block */}
            <SourceCodeBlock
              code={componentData.examples[0].code}
              title="Source Code"
              language="tsx"
              className="border rounded-b-lg border-t-0 bg-muted"
            />
          </section>
        )}

        {/* Installation Section */}
        <InstallationBlock
          installation={componentData.installation}
          componentName={componentData.nameEn}
        />

        {/* Additional Examples */}
        {componentData.examples.length > 1 && (
          <div className="space-y-12 border-t pt-10">
            <h2 className="text-2xl font-bold tracking-tight">نمونه‌های بیشتر</h2>
            <div className="space-y-12">
              {componentData.examples.slice(1).map((example) => (
                <section key={example.id} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{example.title}</h3>
                    {example.description && (
                      <p className="text-sm text-muted-foreground">{example.description}</p>
                    )}
                  </div>
                  <ComponentPreview code={example.code}>{example.preview}</ComponentPreview>
                </section>
              ))}
            </div>
          </div>
        )}

        {/* Navigation - Fixed RTL navigation with correct chevron directions */}
        <nav className="flex items-center justify-between border-t lg:mb-0 md:mb-0 mb-20 pt-6" aria-label="ناوبری کامپوننت">
          {prevComponent ? (
            <Link
              href={`/docs/components/${prevComponent.slug}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              rel="prev"
            >
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground text-end"
              rel="next"
            >
              <div>
                <p className="text-xs text-muted-foreground">بعدی</p>
                <p className="font-medium text-foreground">{nextComponent.name}</p>
              </div>
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </>
  );
}
