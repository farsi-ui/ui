"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Copy, Check, Code2, Eye, Terminal } from "lucide-react";
import { useState, useEffect, useCallback, memo } from "react";
import { highlightCode, type BundledLanguage } from "@/lib/shiki";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  className?: string;
  title?: string;
  language?: BundledLanguage;
}

// Memoized code block component
const CodeBlock = memo(function CodeBlock({
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
        <code className="font-mono text-[13px] leading-relaxed text-gray-300">{code}</code>
      </pre>
    );
  }

  return (
    <div
      className="shiki-container overflow-x-auto [&>pre]:bg-transparent! [&>pre]:p-4 [&>pre]:sm:p-5 [&>pre]:m-0 [&_code]:font-mono [&_code]:text-[13px] [&_code]:leading-relaxed"
      dir="ltr"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
});

export function ComponentPreview({
  children,
  code,
  className,
  title,
  language = "tsx",
}: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
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
    <div className={cn("relative flex flex-col gap-3", className)}>
      {/* Tabs Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 rounded-lg bg-muted/50 p-1">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200",
              activeTab === "preview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Eye className="size-4" />
            پیش‌نمایش
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200",
              activeTab === "code"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Code2 className="size-4" />
            کد
          </button>
        </div>

        {/* Language badge - only show in code view */}
        {activeTab === "code" && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Terminal className="size-3.5" />
            <span className="font-mono uppercase">{language}</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="overflow-hidden rounded-xl border border-border shadow-sm">
        {activeTab === "preview" ? (
          <div className="relative flex min-h-70 w-full items-center justify-center bg-card p-8">
            {/* Decorative grid pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10">{children}</div>
          </div>
        ) : (
          <div className="relative bg-white dark:bg-[#0d1117]">
            {/* Code header bar */}
            <div className="flex items-center justify-between border-b border-black/5 bg-black/5 dark:border-white/5 dark:bg-white/2 px-4 py-2">
              <div className="flex items-center gap-2">
                {/* macOS style window controls */}
                <div className="flex items-center gap-1.5">
                  <div className="size-3 rounded-full bg-[#ff5f57]" />
                  <div className="size-3 rounded-full bg-[#febc2e]" />
                  <div className="size-3 rounded-full bg-[#28c840]" />
                </div>
                {title && <span className="ms-3 font-mono text-xs text-gray-500">{title}</span>}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 gap-1.5 px-2.5 text-xs text-gray-500 dark:text-gray-400 hover:bg-white/5 hover:text-gray-700 dark:hover:text-gray-100"
                onClick={copyCode}
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-green-400" />
                    <span>کپی شد</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" />
                    <span>کپی</span>
                  </>
                )}
              </Button>
            </div>
            {/* Code content */}
            <CodeBlock code={code} highlightedCode={highlightedCode} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ComponentPreview;
