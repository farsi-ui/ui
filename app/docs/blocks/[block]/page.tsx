import { notFound } from "next/navigation";
import { getBlockBySlug, allBlocks, blockCategories } from "@/lib/blocks-data";
import { ComponentPreview } from "@/components/docs/component-preview";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ block: string }>;
}

export async function generateStaticParams() {
  return allBlocks.map((block) => ({
    block: block.slug,
  }));
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

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-xs">
            {blockCategories[blockData.category]}
          </Badge>
          <span className="text-xs text-muted-foreground">{blockData.nameEn}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{blockData.name}</h1>
        <p className="text-lg text-muted-foreground">{blockData.description}</p>
      </div>

      {/* Examples */}
      <div className="space-y-12">
        {blockData.examples.map((example) => (
          <section key={example.id} className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">{example.title}</h2>
              {example.description && (
                <p className="text-sm text-muted-foreground">{example.description}</p>
              )}
            </div>
            <ComponentPreview code={example.code}>{example.preview}</ComponentPreview>
          </section>
        ))}
      </div>

      {/* Navigation - Fixed RTL navigation with correct chevron directions */}
      <div className="flex items-center justify-between border-t lg:mb-0 md:mb-0 mb-20 pt-6">
        {prevBlock ? (
          <Link
            href={`/docs/blocks/${prevBlock.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div>
              <p className="text-xs text-muted-foreground">قبلی</p>
              <p className="font-medium text-foreground">{prevBlock.name}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {nextBlock ? (
          <Link
            href={`/docs/blocks/${nextBlock.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground text-end"
          >
            <div>
              <p className="text-xs text-muted-foreground">بعدی</p>
              <p className="font-medium text-foreground">{nextBlock.name}</p>
            </div>
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
