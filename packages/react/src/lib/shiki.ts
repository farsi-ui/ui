import { codeToHtml, type BundledLanguage } from 'shiki'

export type { BundledLanguage }

const highlightCache = new Map<string, string>()

export async function highlightCode(
  code: string,
  language: BundledLanguage = 'tsx',
): Promise<string> {
  const cacheKey = `${language}:${code}`

  if (highlightCache.has(cacheKey)) {
    return highlightCache.get(cacheKey)!
  }

  try {
    const html = await codeToHtml(code, {
      lang: language,
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    })

    highlightCache.set(cacheKey, html)
    return html
  } catch (error) {
    console.error('Failed to highlight code:', error)
    return `<pre><code>${escapeHtml(code)}</code></pre>`
  }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
