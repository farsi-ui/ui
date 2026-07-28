"use client";

import type { ComponentInstallation } from "@/lib/components-data";
import { Button } from "@/components/ui/button";
import { Copy, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SourceCodeBlock } from "./source-code-block";

interface InstallationBlockProps {
  installation: ComponentInstallation;
  componentName?: string;
}

export function InstallationBlock({ installation, componentName }: InstallationBlockProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [sourceCodeExpanded, setSourceCodeExpanded] = useState(false);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="space-y-6 border-t pt-10">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">نصب دستی</h2>
      </div>

      {/* Dependencies Section */}
      {installation.dependencies && installation.dependencies.length > 0 && (
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-sm">وابستگی‌ها</h3>
            <p className="text-xs text-muted-foreground">
              برای استفاده از {componentName || "این کامپوننت"}، باید این بسته‌ها را نصب کنید:
            </p>
          </div>

          {/* Install All Command */}
          <div className="rounded-lg border bg-muted p-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <code className="flex-1 rounded bg-background px-3 py-2 font-mono text-sm text-left overflow-x-auto">
                  npm install {installation.dependencies.join(" ")}
                </code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0"
                  onClick={() =>
                    handleCopy(
                      `npm install ${installation.dependencies?.join(" ")}`,
                      -1
                    )
                  }
                  title="کپی دستور"
                >
                  {copiedIndex === -1 ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Component Source Code Section */}
      {installation.sourceCode && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            کد زیر را می‌توانید در پروژه خود کپی کنید تا {componentName || "این کامپوننت"} را به صورت دستی اضافه کنید:
          </p>
          <button
            onClick={() => setSourceCodeExpanded(!sourceCodeExpanded)}
            className="flex w-full items-center justify-between rounded-lg border bg-muted/50 p-4 hover:bg-muted"
          >
            <div className="flex items-center gap-3">
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  sourceCodeExpanded ? "rotate-180" : ""
                }`}
              />
              <h3 className="font-semibold text-sm text-foreground">
                کد منبع کامپوننت
              </h3>
            </div>
            {!sourceCodeExpanded && (
              <span className="text-xs text-muted-foreground">
                برای مشاهده کد کلیک کنید
              </span>
            )}
          </button>

          {sourceCodeExpanded && (
            <div className="rounded-lg border overflow-hidden">
              <SourceCodeBlock
                code={installation.sourceCode}
                language="tsx"
                className="border-0"
              />
            </div>
          )}
        </div>
      )}

      {/* Manual Instructions Section */}
      {installation.manualInstructions && (
        <div className="space-y-3 rounded-lg border bg-blue-50 p-4 dark:bg-blue-950/30">
          <div className="space-y-1">
            <h3 className="font-semibold text-sm">دستورالعمل‌های اضافی</h3>
          </div>
          <div className="text-sm text-muted-foreground space-y-2">
            {installation.manualInstructions.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}

