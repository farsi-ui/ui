"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Copy, Check, Terminal } from "lucide-react"
import { highlightCode, type BundledLanguage } from "@/lib/shiki"

interface CodeBlockProps {
  code: string
  filename?: string
  language?: BundledLanguage
  showLineNumbers?: boolean
  className?: string
}

// Memoized code content component
const CodeContent = memo(function CodeContent({
  code,
  highlightedCode,
}: {
  code: string
  highlightedCode: string | null
}) {
  if (!highlightedCode) {
    // Fallback while loading
    return (
      <pre className="overflow-x-auto p-4" dir="ltr">
        <code className="font-mono text-sm leading-relaxed text-gray-300">
          {code}
        </code>
      </pre>
    )
  }

  return (
    <div
      className="shiki-container overflow-x-auto [&>pre]:bg-transparent! [&>pre]:p-4 [&>pre]:m-0 [&_code]:font-mono [&_code]:text-sm [&_code]:leading-relaxed"
      dir="ltr"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  )
})

export function CodeBlock({
  code,
  filename,
  language = "tsx",
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null)

  // Highlight code with Shiki
  useEffect(() => {
    let cancelled = false

    const highlight = async () => {
      const html = await highlightCode(code, language)
      if (!cancelled) {
        setHighlightedCode(html)
      }
    }

    highlight()

    return () => {
      cancelled = true
    }
  }, [code, language])

  const copyCode = useCallback(async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-lg border border-border transition-all hover:border-primary/20 hover:shadow-lg",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 bg-gray-300 dark:bg-muted/50 px-4 py-2.5">
        <div className="flex items-center gap-3">
          {/* macOS style window controls */}
          <div className="flex items-center gap-1.5">
            <div className="size-2.5 rounded-full bg-[#ff5f57] sm:size-3" />
            <div className="size-2.5 rounded-full bg-[#febc2e] sm:size-3" />
            <div className="size-2.5 rounded-full bg-[#28c840] sm:size-3" />
          </div>
          {filename && (
            <span className="ms-2 font-mono text-xs font-medium text-muted-foreground">
              {filename}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Terminal className="size-3.5" />
            <span className="font-mono uppercase">{language}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="size-8 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            onClick={copyCode}
            aria-label={copied ? "کپی شد" : "کپی کن"}
          >
            {copied ? (
              <Check className="size-4 text-green-500" />
            ) : (
              <Copy className="size-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Code content */}
      <div className="bg-gray-200 dark:bg-[#0d1117]">
        <CodeContent code={code} highlightedCode={highlightedCode} />
      </div>
    </div>
  )
}

export default CodeBlock
