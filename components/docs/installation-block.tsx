"use client";

import type { ComponentInstallation } from "@/lib/components-data";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface InstallationBlockProps {
  installation: ComponentInstallation;
  componentName?: string;
}

export function InstallationBlock({ installation, componentName }: InstallationBlockProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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
        <p className="text-sm text-muted-foreground">
          کپی کامپوننت و وابستگی‌های آن را دانلود کنید.
        </p>
      </div>

      {/* Dependencies Section */}
      {installation.dependencies && installation.dependencies.length > 0 && (
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-sm">وابستگی‌ها</h3>
            <p className="text-xs text-muted-foreground">
              پیش از کپی کردن کامپوننت، لطفاً وابستگی‌های زیر را نصب کنید:
            </p>
          </div>

          <div className="space-y-2">
            {installation.dependencies.map((dep, index) => (
              <div
                key={dep}
                className="relative flex items-center gap-2 rounded-lg border bg-muted/50 p-3"
              >
                <code className="flex-1 font-mono text-sm">{dep}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 shrink-0"
                  onClick={() => handleCopy(`npm install ${dep}`, index)}
                  title="کپی دستور نصب"
                >
                  {copiedIndex === index ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            ))}
          </div>

          {/* Install All Command */}
          <div className="rounded-lg border bg-muted p-4">
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">یا نصب همه با یک دستور:</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 rounded bg-background px-3 py-2 font-mono text-sm overflow-x-auto">
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

      {/* File Path Section */}
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-sm">مسیر فایل</h3>
          <p className="text-xs text-muted-foreground">
            کامپوننت را به این مسیر کپی کنید:
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border bg-muted/50 p-3">
          <code className="flex-1 font-mono text-sm">{installation.filePath}</code>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 shrink-0"
            onClick={() => handleCopy(installation.filePath, -2)}
            title="کپی مسیر"
          >
            {copiedIndex === -2 ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

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

      {/* Info Message */}
      <div className="rounded-lg border bg-amber-50 p-4 dark:bg-amber-950/30">
        <p className="text-sm text-amber-900 dark:text-amber-100">
          <strong>نکته:</strong> کامپوننت را می‌توانید دانلود کنید و آن را برای نیازهای خود کپی و
          تغییر دهید. این کامپوننت فارسی یو آی بر پایه <code className="font-mono">shadcn/ui</code> است.
        </p>
      </div>
    </section>
  );
}
