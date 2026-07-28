# Phase 2: RTL System, Tokens, and Testing

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the DOM-scraping `useIsRTL` hack with a proper React Context `DirectionProvider`, extract design tokens from CSS into `@farsi-ui/tokens`, and add Vitest + GitHub Actions CI.

**Architecture:** Create a `DirectionProvider` context wrapping `@radix-ui/react-direction`, extract CSS custom properties from `globals.css` into typed JS exports, set up Vitest with React Testing Library, and add a CI workflow.

**Tech Stack:** React 19, TypeScript, @radix-ui/react-direction, vitest, @testing-library/react, GitHub Actions.

---

## Task 1: Create DirectionProvider and hooks

**Files:**
- Create: `packages/react/src/contexts/direction-context.tsx`
- Create: `packages/react/src/hooks/use-direction.ts`
- Modify: `packages/react/src/hooks/use-rtl.ts`
- Modify: `packages/react/src/index.ts`

**Step 1: Install @radix-ui/react-direction**

```bash
pnpm --filter @farsi-ui/react add @radix-ui/react-direction
```

**Step 2: Create direction context**

Create `packages/react/src/contexts/direction-context.tsx`:

```tsx
'use client'

import * as React from 'react'
import * as DirectionPrimitive from '@radix-ui/react-direction'

type Direction = 'ltr' | 'rtl'

const DirectionContext = React.createContext<Direction>('ltr')

function DirectionProvider({
  dir = 'rtl',
  children,
}: {
  dir?: Direction
  children: React.ReactNode
}) {
  return (
    <DirectionContext.Provider value={dir}>
      <DirectionPrimitive.Root dir={dir}>
        {children}
      </DirectionPrimitive.Root>
    </DirectionContext.Provider>
  )
}

function useDirection(): Direction {
  return React.useContext(DirectionContext)
}

function useIsRTL(): boolean {
  return useDirection() === 'rtl'
}

function useIsLTR(): boolean {
  return useDirection() === 'ltr'
}

export { DirectionProvider, useDirection, useIsRTL, useIsLTR }
export type { Direction }
```

**Step 3: Update use-rtl.ts to re-export from context**

Replace `packages/react/src/hooks/use-rtl.ts` with:

```ts
'use client'

export { useIsRTL, useIsLTR, useDirection } from '../contexts/direction-context'
```

**Step 4: Export from index.ts**

Add to `packages/react/src/index.ts`:

```ts
export { DirectionProvider, useDirection, useIsRTL, useIsLTR } from './contexts/direction-context'
export type { Direction } from './contexts/direction-context'
```

**Step 5: Run typecheck**

```bash
turbo run typecheck
```

Expected: PASS

**Commit:** `feat: add DirectionProvider and SSR-safe RTL hooks`

---

## Task 2: Verify RTL context works in components

**Files:**
- No file changes — verification only

**Step 1: Confirm all 11 components still import useIsRTL**

```bash
grep -r "useIsRTL" packages/react/src/components/ui/ | wc -l
```

Expected: ~13 lines (11 files, some have 2 references)

**Step 2: Build packages**

```bash
turbo run build --force
```

Expected: PASS — all 3 tasks succeed

**Commit:** (none — verification only)

---

## Task 3: Extract design tokens into @farsi-ui/tokens

**Files:**
- Modify: `packages/tokens/src/index.ts`
- Create: `packages/tokens/src/colors.ts`
- Create: `packages/tokens/src/typography.ts`
- Create: `packages/tokens/src/spacing.ts`

**Step 1: Create tokens/src/colors.ts**

```ts
export const colors = {
  // Moon Design System
  piccolo: 'hsl(250, 90%, 62%)',
  hales: 'hsl(240, 10%, 96%)',
  hit: 'hsl(174, 60%, 50%)',
  hover: 'hsl(240, 10%, 98%)',
  beerus: 'hsl(240, 6%, 92%)',
  goku: 'hsl(0, 0%, 100%)',
  gohan: 'hsl(0, 0%, 99%)',
  zeno: 'hsl(0, 0%, 52%)',
  bulma: 'hsl(240, 10%, 4%)',
  trunks: 'hsl(240, 6%, 45%)',
  goten: 'hsl(0, 0%, 100%)',
  popo: 'hsl(0, 0%, 0%)',
  // Semantic/Action
  krillin: 'hsl(42, 100%, 50%)',
  chichi: 'hsl(350, 100%, 65%)',
  roshi: 'hsl(142, 76%, 46%)',
  dodoria: 'hsl(4, 90%, 58%)',
  cell: 'hsl(174, 60%, 55%)',
  raditz: 'hsl(30, 40%, 50%)',
  whis: 'hsl(220, 90%, 56%)',
  frieza: 'hsl(270, 70%, 60%)',
  nappa: 'hsl(30, 20%, 40%)',
} as const

export const semanticColors = {
  light: {
    background: 'oklch(1 0 0)',
    foreground: 'oklch(0.145 0 0)',
    card: 'oklch(1 0 0)',
    cardForeground: 'oklch(0.145 0 0)',
    popover: 'oklch(1 0 0)',
    popoverForeground: 'oklch(0.145 0 0)',
    primary: 'oklch(0.205 0 0)',
    primaryForeground: 'oklch(0.985 0 0)',
    secondary: 'oklch(0.97 0 0)',
    secondaryForeground: 'oklch(0.205 0 0)',
    muted: 'oklch(0.97 0 0)',
    mutedForeground: 'oklch(0.556 0 0)',
    accent: 'oklch(0.97 0 0)',
    accentForeground: 'oklch(0.205 0 0)',
    destructive: 'oklch(0.577 0.245 27.325)',
    destructiveForeground: 'oklch(0.577 0.245 27.325)',
    border: 'oklch(0.922 0 0)',
    input: 'oklch(0.922 0 0)',
    ring: 'oklch(0.708 0 0)',
  },
  dark: {
    background: 'oklch(0.145 0 0)',
    foreground: 'oklch(0.985 0 0)',
    card: 'oklch(0.145 0 0)',
    cardForeground: 'oklch(0.985 0 0)',
    popover: 'oklch(0.145 0 0)',
    popoverForeground: 'oklch(0.985 0 0)',
    primary: 'oklch(0.985 0 0)',
    primaryForeground: 'oklch(0.205 0 0)',
    secondary: 'oklch(0.269 0 0)',
    secondaryForeground: 'oklch(0.985 0 0)',
    muted: 'oklch(0.269 0 0)',
    mutedForeground: 'oklch(0.708 0 0)',
    accent: 'oklch(0.269 0 0)',
    accentForeground: 'oklch(0.985 0 0)',
    destructive: 'oklch(0.396 0.141 25.723)',
    destructiveForeground: 'oklch(0.637 0.237 25.331)',
    border: 'oklch(0.269 0 0)',
    input: 'oklch(0.269 0 0)',
    ring: 'oklch(0.439 0 0)',
  },
} as const
```

**Step 2: Create tokens/src/typography.ts**

```ts
export const typography = {
  fontFamily: {
    sans: 'Vazir, ui-sans-serif, system-ui, sans-serif',
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  },
} as const
```

**Step 3: Create tokens/src/spacing.ts**

```ts
export const spacing = {
  0: '0px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
} as const

export const radius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.625rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const
```

**Step 4: Update tokens/src/index.ts**

```ts
export { colors, semanticColors } from './colors'
export { typography } from './typography'
export { spacing, radius } from './spacing'
```

**Step 5: Build tokens package**

```bash
turbo run build --filter=@farsi-ui/tokens
```

Expected: PASS

**Commit:** `feat: extract design tokens into @farsi-ui/tokens`

---

## Task 4: Set up Vitest

**Files:**
- Create: `vitest.config.ts`
- Modify: `packages/react/package.json`
- Create: `packages/react/src/components/__tests__/button.test.tsx`
- Create: `packages/react/src/components/__tests__/direction-provider.test.tsx`

**Step 1: Install dev dependencies**

```bash
pnpm add -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom --filter @farsi-ui/react
```

**Step 2: Create vitest.config.ts at root**

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@farsi-ui/react': path.resolve(__dirname, 'packages/react/src'),
      '@farsi-ui/tokens': path.resolve(__dirname, 'packages/tokens/src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test-setup.ts'],
    include: ['packages/react/src/**/*.test.{ts,tsx}'],
  },
})
```

**Step 3: Create test-setup.ts at root**

```ts
import '@testing-library/jest-dom/vitest'
```

**Step 4: Add test script to packages/react/package.json**

```json
"test": "vitest run",
"test:watch": "vitest"
```

**Step 5: Create button.test.tsx**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '../button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Button ref={ref}>Test</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('applies variant classes', () => {
    render(<Button variant="destructive">Delete</Button>)
    expect(screen.getByRole('button').className).toContain('destructive')
  })
})
```

**Step 6: Create direction-provider.test.tsx**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DirectionProvider, useDirection, useIsRTL } from '../../contexts/direction-context'

function DirectionDisplay() {
  const dir = useDirection()
  const isRTL = useIsRTL()
  return <span data-testid="dir">{isRTL ? 'rtl' : 'ltr'}</span>
}

describe('DirectionProvider', () => {
  it('defaults to RTL', () => {
    render(
      <DirectionProvider>
        <DirectionDisplay />
      </DirectionProvider>
    )
    expect(screen.getByTestId('dir')).toHaveTextContent('rtl')
  })

  it('supports LTR direction', () => {
    render(
      <DirectionProvider dir="ltr">
        <DirectionDisplay />
      </DirectionProvider>
    )
    expect(screen.getByTestId('dir')).toHaveTextContent('ltr')
  })
})
```

**Step 7: Run tests**

```bash
turbo run test --filter=@farsi-ui/react
```

Expected: PASS (5 tests)

**Commit:** `test: add vitest and core component tests`

---

## Task 5: Add GitHub Actions CI

**Files:**
- Create: `.github/workflows/ci.yml`

**Step 1: Create .github/workflows/ci.yml**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20, 22]

    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 10

      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: pnpm

      - run: pnpm install --frozen-lockfile

      - name: Lint
        run: pnpm lint

      - name: Typecheck
        run: pnpm typecheck

      - name: Build packages
        run: pnpm build

      - name: Test
        run: pnpm test
```

**Step 2: Verify workflow syntax**

```bash
cat .github/workflows/ci.yml
```

Expected: valid YAML

**Commit:** `chore: add GitHub Actions CI workflow`

---

## Task 6: Final verification

**Files:**
- None — verification only

**Step 1: Full build**

```bash
turbo run build --force
```

Expected: 3/3 tasks pass

**Step 2: Full typecheck**

```bash
turbo run typecheck
```

Expected: PASS

**Step 3: Full test**

```bash
turbo run test
```

Expected: PASS (5+ tests)

**Step 4: Verify .turbo cache**

```bash
ls .turbo/cache/
```

Expected: cache files exist

**Commit:** (none — verification only)

---

# Summary

| Task | What | Est. Time |
|------|------|-----------|
| 1 | DirectionProvider + hooks | 5 min |
| 2 | Verify components work | 2 min |
| 3 | Extract tokens | 5 min |
| 4 | Vitest setup | 10 min |
| 5 | GitHub Actions CI | 3 min |
| 6 | Final verification | 2 min |
| **Total** | | **~27 min** |
