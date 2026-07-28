"use client";

import { memo, useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { highlightCode, type BundledLanguage } from "@/lib/shiki";

interface SourceCodeBlockProps {
  code: string;
  language?: BundledLanguage;
  className?: string;
  title?: string;
}

// Memoized code block component
const CodeDisplay = memo(function CodeDisplay({
  code,
  highlightedCode,
}: {
  code: string;
  highlightedCode: string | null;
}) {
  if (!highlightedCode) {
    // Fallback while loading
    return (
      <pre className="overflow-x-auto p-4 sm:p-5" dir="ltr">
        <code className="font-mono text-sm leading-relaxed text-gray-300">{code}</code>
      </pre>
    );
  }

  return (
    <div
      className="shiki-container overflow-x-auto [&>pre]:bg-transparent! [&>pre]:p-4 [&>pre]:sm:p-5 [&>pre]:m-0 [&_code]:font-mono [&_code]:text-sm [&_code]:leading-relaxed"
      dir="ltr"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
});

export function SourceCodeBlock({
  code,
  language = "tsx",
  className,
  title,
}: SourceCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);

  // Highlight code with Shiki
  useEffect(() => {
    let cancelled = false;

    const highlight = async () => {
      const html = await highlightCode(code, language);
      if (!cancelled) {
        setHighlightedCode(html);
      }
    };

    highlight();

    return () => {
      cancelled = true;
    };
  }, [code, language]);

  const copyCode = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className={cn("relative flex flex-col gap-3  bg-muted/50 px-4 py-2", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={copyCode}
          className="h-8 w-8 p-0"
          aria-label={copied ? "کپی شد" : "کپی کردن کد"}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Code Block */}
      <div className=" overflow-hidden">
        <CodeDisplay code={code} highlightedCode={highlightedCode} />
      </div>
    </div>
  );
}
