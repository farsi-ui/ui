# Copilot Instructions for Farsi UI

## Project Overview

**Farsi UI** is a Persian/RTL-first component library inspired by shadcn/ui. It is **not a packaged library** but a **copy-paste foundation** for building RTL-aware React UIs. Key difference from shadcn/ui: everything is **RTL-native from the start**, not an afterthought.

- **Stack**: Next.js, React 18+, TypeScript, Tailwind CSS, Radix UI
- **Distribution**: Copy components into your project and customize them
- **Philosophy**: Full ownership, no lock-in, no hidden registry

## Architecture & Project Structure

### Core Directories

- **`components/ui/`** – Reusable, primitive UI components (50+ components)
- **`components/docs/`** – Documentation layout components (ComponentPreview, Header, Nav)
- **`components/theme-provider.tsx`** – Next-themes wrapper for dark mode
- **`app/docs/`** – Next.js App Router documentation site
- **`hooks/`** – Custom hooks (use-mobile, use-toast)
- **`lib/utils.ts`** – Central utility: `cn()` function (clsx + tailwind-merge)
- **`app/globals.css`** – Design tokens + Tailwind config (Moon Design System color naming)

### Design Token System

Colors use **Moon Design System naming** (e.g., `--piccolo`, `--hales`, `--bulma`) mapped to semantic colors via CSS variables:
- `--primary`, `--secondary`, `--destructive`, `--accent`, etc.
- Variables use **oklch()** color space for better perceptual uniformity
- Dark mode variants prefixed with `dark:`

## Critical Patterns

### 1. Component Structure

All UI components follow this pattern:

```tsx
// 1. Use CVA (class-variance-authority) for variants
const componentVariants = cva("base-styles", {
  variants: {
    variant: { ... },
    size: { ... },
  },
  defaultVariants: { ... },
})

// 2. Accept component props + variant props + className
function Component({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'element'> & VariantProps<typeof componentVariants> & { asChild?: boolean })

// 3. Use Slot if asChild=true (from @radix-ui/react-slot)
const Comp = asChild ? Slot : 'element'
return <Comp className={cn(componentVariants({ variant, size, className }))} {...props} />
```

**See**: [button.tsx](../components/ui/button.tsx) as canonical example.

### 2. RTL-First Design

- **Logical properties over directional ones**: Use `me` (margin-end) instead of `mr` (margin-right)
- **Test with `dir="rtl"`** in HTML
- **Flex/grid directions handled by Tailwind** – flexbox naturally respects direction
- No hardcoded left/right positioning; use `start` and `end`

### 3. Accessibility (a11y)

- **Radix UI primitives** handle ARIA/keyboard nav – never bypass
- **Label associations**: Use `htmlFor` on labels
- **Focus states**: Always use `focus-visible:ring-*` in button/input variants
- **Semantic HTML**: Use `<button>`, `<label>`, not `<div>` for interactive elements

### 4. Class Merging & Styling

All components use the **`cn()` utility** from [lib/utils.ts](../lib/utils.ts):
```tsx
import { cn } from '@/lib/utils'
className={cn(componentVariants({ variant, size, className }))}
```

This merges clsx + tailwind-merge, preventing conflicting Tailwind classes.

### 5. Form Handling

- **Forms use React Hook Form + Zod** (via @hookform/resolvers)
- **FormField context** wraps Controller for field-level validation
- **Form composition**: Form (FormProvider), FormField, FormItem, FormLabel, FormControl, FormMessage
- See [form.tsx](../components/ui/form.tsx) for full pattern

## Conventions & Naming

- **Component files**: kebab-case (e.g., `dropdown-menu.tsx`)
- **Exports**: Named exports for components and variant objects (e.g., `export { Button, buttonVariants }`)
- **Data attributes**: Use `data-slot="component-name"` for styling/testing hooks
- **CSS custom properties**: Follow Moon Design System naming (e.g., `--piccolo`, `--chichi`)

## Development Workflows

### Setup & Commands

```bash
pnpm install       # Install dependencies (pnpm is required)
pnpm dev           # Start dev server (http://localhost:3000)
pnpm lint          # Run ESLint
pnpm build         # Build for production
pnpm start         # Start production server
```

### Creating a New Component

1. Create `components/ui/component-name.tsx`
2. Copy structure from [button.tsx](../components/ui/button.tsx)
3. Use Radix UI primitive as base (e.g., `@radix-ui/react-dialog`)
4. Define CVA variants for size/variant/color options
5. Add `data-slot="component-name"` for identification
6. Test with RTL mode (`dir="rtl"` in browser DevTools)
7. Document in `app/docs/components/[component]/page.tsx`

### Styling & Tailwind

- **Base config**: [app/globals.css](../app/globals.css) – imports @tailwindcss and defines tokens
- **Responsive design**: Use Tailwind's breakpoints and RTL-aware utilities
- **Dark mode**: CSS variable colors automatically adapt; components use `dark:` prefix
- **Custom fonts**: Vazirmatn (Persian font) imported from Google Fonts in [app/layout.tsx](../app/layout.tsx)

## Key Dependencies & Integration Points

- **@radix-ui/\***: Primitive components (always use for a11y + behavior)
- **class-variance-authority**: Variant styling engine
- **react-hook-form**: Form state management
- **next-themes**: Dark/light mode switching
- **clsx + tailwind-merge**: Utility in `cn()`
- **Lucide icons**: Icon library (via iconLibrary in components.json)

## Important Notes

- **No CSS Modules** – All styling is Tailwind + CSS variables
- **Client components** must use `'use client'` directive
- **TypeScript strict mode** enabled – no implicit any
- **Next.js App Router** – no Pages Router
- **Components are meant to be copied** – modify freely; not a published package
- **RTL is mandatory** – never design or test LTR-only

## Debugging & Testing Patterns

- Check console for CSS variable fallbacks (dark mode issues)
- Use browser DevTools to toggle `dir="rtl"` on html element
- Verify form validation with React Hook Form DevTools
- Check accessibility with axe or WAVE browser extensions
