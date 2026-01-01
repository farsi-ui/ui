"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  className?: string
  title?: string
}

function highlightSyntax(code: string): string {
  let highlighted = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

  highlighted = highlighted
    .replace(
      /\b(import|export|from|const|let|var|function|return|default|async|await|if|else|for|while|class|extends|interface|type|enum|implements|new|this|super|static|public|private|protected|readonly|typeof|instanceof|in|of|as|is)\b/g,
      '<span class="token-keyword">$1</span>',
    )
    .replace(/(&quot;[^&]*&quot;|'[^']*'|`[^`]*`)/g, '<span class="token-string">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="token-number">$1</span>')
    .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="token-comment">$1</span>')
    .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="token-function">$1</span>')
    .replace(/(&lt;\/?[A-Z][a-zA-Z0-9]*)/g, '<span class="token-tag">$1</span>')
    .replace(/\b([a-zA-Z-]+)(?==)/g, '<span class="token-attr">$1</span>')
    .replace(/\b(true|false|null|undefined)\b/g, '<span class="token-keyword">$1</span>')

  return highlighted
}

export function ComponentPreview({ children, code, className, title }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative flex flex-col", className)}>
      {/* Tabs Header */}
      <div className="flex items-center gap-1 mb-3">
        <button
          onClick={() => setActiveTab("preview")}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            activeTab === "preview" ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          پیش‌نمایش
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            activeTab === "code" ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          کد
        </button>
      </div>

      {/* Content Area */}
      <div className="overflow-hidden rounded-xl border border-border">
        {activeTab === "preview" ? (
          <div className="flex min-h-[280px] w-full items-center justify-center bg-card p-8">{children}</div>
        ) : (
          <div className="relative bg-[#1a1a1a] dark:bg-[#0d0d0d]">
            <Button
              variant="ghost"
              size="sm"
              className="absolute end-3 top-3 h-8 gap-2 text-xs text-muted-foreground hover:text-foreground"
              onClick={copyCode}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-500" />
                  کپی شد
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  کپی
                </>
              )}
            </Button>
            <pre className="overflow-x-auto p-6" dir="ltr">
              <code
                className="font-mono text-[13px] leading-relaxed text-gray-300"
                dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }}
              />
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default ComponentPreview
