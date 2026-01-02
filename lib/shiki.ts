"use client"

import { codeToHtml, type BundledLanguage } from "shiki"

export type { BundledLanguage }

// Cache for highlighted code
const highlightCache = new Map<string, string>()

/**
 * Highlights code using Shiki with dual theme support (light/dark)
 * Uses caching to avoid re-highlighting the same code
 */
export async function highlightCode(
  code: string,
  language: BundledLanguage = "tsx"
): Promise<string> {
  const cacheKey = `${language}:${code}`

  if (highlightCache.has(cacheKey)) {
    return highlightCache.get(cacheKey)!
  }

  try {
    const html = await codeToHtml(code, {
      lang: language,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
    })

    highlightCache.set(cacheKey, html)
    return html
  } catch (error) {
    console.error("Failed to highlight code:", error)
    // Fallback: return escaped code
    return `<pre><code>${escapeHtml(code)}</code></pre>`
  }
}

/**
 * Simple HTML escape for fallback
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
