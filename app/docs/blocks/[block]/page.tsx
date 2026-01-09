import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlockBySlug, allBlocks, blockCategories } from "@/lib/blocks-data";
import { ComponentPreview } from "@/components/docs/component-preview";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Boundary } from "@/components/boundary";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: Promise<{ block: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farsi.eindev.ir/";

export async function generateStaticParams() {
  return allBlocks.map((block) => ({
    block: block.slug,
  }));
}

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { block: slug } = await params;
  const blockData = getBlockBySlug(slug);

  if (!blockData) {
    return {
      title: "بلاک یافت نشد",
      description: "این بلاک در فارسی یو آی موجود نیست.",
    };
  }

  const title = `${blockData.name} (${blockData.nameEn})`;
  const description = `${blockData.description} - بلاک ${blockData.nameEn} در فارسی یو آی`;
  const url = `${siteUrl}/docs/blocks/${slug}`;

  return {
    title,
    description,
    keywords: [
      blockData.name,
      blockData.nameEn,
      "React بلاک",
      "RTL بلاک",
      "فارسی یو آی",
      blockCategories[blockData.category],
      "کامپوننت آماده",
      "UI Kit فارسی",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | فارسی یو آی`,
      description,
      url,
      siteName: "فارسی یو آی",
      locale: "fa_IR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | فارسی یو آی`,
      description,
    },
  };
}

export default async function BlockPage({ params }: PageProps) {
  const { block: slug } = await params;
  const blockData = getBlockBySlug(slug);

  if (!blockData) {
    notFound();
  }

  // Get previous and next blocks for navigation
  const currentIndex = allBlocks.findIndex((b) => b.slug === slug);
  const prevBlock = currentIndex > 0 ? allBlocks[currentIndex - 1] : null;
  const nextBlock = currentIndex < allBlocks.length - 1 ? allBlocks[currentIndex + 1] : null;

  // JSON-LD Schema for block documentation
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${blockData.name} - ${blockData.nameEn}`,
    description: blockData.description,
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
      "@id": `${siteUrl}/docs/blocks/${slug}`,
    },
    about: {
      "@type": "SoftwareSourceCode",
      name: blockData.nameEn,
      programmingLanguage: "TypeScript",
      runtimePlatform: "React",
    },
    inLanguage: "fa-IR",
    keywords: `${blockData.name}, ${blockData.nameEn}, React, RTL, بلاک, فارسی یو آی`,
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
              {blockCategories[blockData.category]}
            </Badge>
            <span className="flex-1 text-xs text-muted-foreground">{blockData.nameEn}</span>
            <Button asChild variant="ghost" className="text-xs">
              <Link href="/docs/blocks">
                همه‌ی بلاک ها
                <ChevronLeft />
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{blockData.name}</h1>
          <p className="text-lg text-muted-foreground">{blockData.description}</p>
        </header>

        {/* Examples */}
        <div className="space-y-12">
          {blockData.examples.map((example) => (
            <section key={example.id} className="space-y-4">
              <ComponentPreview code={example.code}>{example.preview}</ComponentPreview>
            </section>
          ))}
        </div>
        <Boundary
          label={"بــزودی ..."}
          size="medium"
          color="cyan"
          kind="solid"
          className="blur mt-10"
        >
          <Card className="h-60">
            <CardHeader>
              <CardTitle className="text-cyan-900">بلاک های اختصاصی کاربران ویژه</CardTitle>
              <Separator className="my-3" />
              <CardDescription className="text-cyan-950">
                برای دسترسی به به بلاک‌های ویژه و اختصاصی به لینک زیر مراجعه کنید
              </CardDescription>
            </CardHeader>
          </Card>
        </Boundary>
      </div>
    </>
  );
}
