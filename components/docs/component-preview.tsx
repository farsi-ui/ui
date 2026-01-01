"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Check, Eye, Code2 } from "lucide-react"
import { useState } from "react"

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  className?: string
  title?: string
}

function highlightSyntax(code: string): string {
  // Escape HTML first
  let highlighted = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

  // Apply syntax highlighting
  highlighted = highlighted
    // Keywords
    .replace(
      /\b(import|export|from|const|let|var|function|return|default|async|await|if|else|for|while|class|extends|interface|type|enum|implements|new|this|super|static|public|private|protected|readonly|typeof|instanceof|in|of|as|is)\b/g,
      '<span class="token-keyword">$1</span>',
    )
    // Strings
    .replace(/(&quot;[^&]*&quot;|'[^']*'|`[^`]*`)/g, '<span class="token-string">$1</span>')
    // Numbers
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="token-number">$1</span>')
    // Comments
    .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="token-comment">$1</span>')
    // Functions
    .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="token-function">$1</span>')
    // JSX tags
    .replace(/(&lt;\/?[A-Z][a-zA-Z0-9]*)/g, '<span class="token-tag">$1</span>')
    // Attributes
    .replace(/\b([a-zA-Z-]+)(?==)/g, '<span class="token-attr">$1</span>')
    // Booleans
    .replace(/\b(true|false|null|undefined)\b/g, '<span class="token-keyword">$1</span>')

  return highlighted
}

export function ComponentPreview({ children, code, className, title }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("preview")

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={cn("group relative flex flex-col overflow-hidden rounded-xl border border-beerus bg-card", className)}
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="relative w-full">
        <div className="flex items-center justify-between border-b border-beerus bg-hales/30 px-4">
          <TabsList className="h-12 gap-1 rounded-none bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-10 gap-2 rounded-lg border-0 bg-transparent px-3 text-sm font-medium text-trunks shadow-none transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            >
              <Eye className="h-4 w-4" />
              پیش‌نمایش
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-10 gap-2 rounded-lg border-0 bg-transparent px-3 text-sm font-medium text-trunks shadow-none transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            >
              <Code2 className="h-4 w-4" />
              کد
            </TabsTrigger>
          </TabsList>

          {title && <span className="hidden text-sm font-medium text-trunks sm:block">{title}</span>}

          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-2 text-xs text-trunks opacity-0 transition-all hover:text-foreground group-hover:opacity-100"
            onClick={copyCode}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-roshi" />
                کپی شد
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                کپی کد
              </>
            )}
          </Button>
        </div>

        <TabsContent value="preview" className="mt-0 p-0">
          <div className="flex min-h-[200px] w-full items-center justify-center bg-background p-8">{children}</div>
        </TabsContent>

        <TabsContent value="code" className="mt-0 p-0">
          <div className="relative bg-goku dark:bg-gohan">
            {/* Line numbers */}
            <div className="absolute start-0 top-0 flex h-full select-none flex-col border-e border-beerus bg-hales/30 px-3 py-4 text-end font-mono text-xs leading-relaxed text-trunks/50">
              {code.split("\n").map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <pre className="overflow-x-auto py-4 pe-4 ps-14" dir="ltr">
              <code
                className="font-mono text-[13px] leading-relaxed text-foreground"
                dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }}
              />
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ComponentPreview
