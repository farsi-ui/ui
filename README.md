# Farsi UI

The Persian-first component library for building beautiful, accessible, and customizable user interfaces with **React**, **Next.js**, and **Tailwind CSS**.

Farsi UI is an exact Persian equivalent of **[shadcn/ui](https://ui.shadcn.com)**, adapted for the Persian language and right-to-left (RTL) direction with full cultural and linguistic optimization.

## Features

✨ **31+ Accessible Components** - Built on [Radix UI](https://www.radix-ui.com/) for uncompromised accessibility  
📦 **Copy & Paste Components** - Copy components directly into your project for full control  
🎨 **Beautiful Defaults** - Carefully designed components with modern aesthetics  
♿ **Accessibility First** - WCAG 2.1 compliant components with RTL support  
🌙 **Dark Mode** - Built-in dark mode support for all components  
🎯 **Persian Optimized** - Designed specifically for Persian/Farsi language and RTL layout  
🔧 **Fully Customizable** - Style components using Tailwind CSS  
⚡ **Zero Configuration** - Works out of the box with Next.js and Tailwind CSS  

## Prerequisites

- Node.js 18+ or later
- Next.js 13+ with App Router
- Tailwind CSS v4
- React 18+

## Installation

### 1. Create a Next.js Project

```bash
npx create-next-app@latest my-app --typescript --tailwind
cd my-app
```

### 2. Install Dependencies

```bash
npm install @radix-ui/react-slot class-variance-authority clsx date-fns
```

### 3. Setup Tailwind CSS

Ensure your `tailwind.config.ts` includes:

```typescript
import type { Config } from "tailwindcss"

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

export default config
```

### 4. Setup Utils Function

Create `lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 5. Setup Persian Font

Configure your `app/layout.tsx`:

```typescript
import { Vazirmatn } from "next/font/google"

const vazirmatn = Vazirmatn({ 
  subsets: ["arabic"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazirmatn.className}>
        {children}
      </body>
    </html>
  )
}
```

### 6. Copy Components

Copy the components you need from the documentation into your `components/ui` directory.

## Usage Example

```tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <Button>
      شروع کنید
    </Button>
  )
}
```

## Components

Farsi UI provides 31+ production-ready components:

### Input Components
- **Button** - Interactive button with multiple variants
- **Input** - Text input field with validation
- **Label** - Form label element
- **Checkbox** - Accessible checkbox input
- **Radio Button** - Radio button group
- **Switch** - Toggle switch component
- **Select** - Dropdown select menu
- **Multi-Select** - Multiple selection component
- **Textarea** - Multi-line text input
- **Search** - Search input with debounce
- **Range Input** - Slider for selecting ranges
- **Auth Code** - Authentication code input
- **Chips** - Tag-like interactive elements

### Display Components
- **Card** - Container for content grouping
- **Avatar** - User avatar with fallback
- **Badge** - Status and category indicator
- **Breadcrumb** - Navigation path indicator
- **Table** - Data table component
- **Charts** - Data visualization charts
- **Empty** - Empty state component
- **Tooltip** - Hover information display
- **Progress** - Progress indicator
- **Loader** - Loading spinner component

### Feedback Components
- **Alert** - Alert message container
- **Alert Dialog** - Modal alert dialog
- **Toast** - Toast notification system
- **Dialog** - Modal dialog component

### Navigation Components
- **Tabs** - Tab navigation component
- **Pagination** - Page navigation
- **Breadcrumb** - Hierarchical navigation
- **Sidebar** - Side navigation panel

### Layout Components
- **Accordion** - Collapsible content sections
- **Collapsible** - Toggle visibility component
- **Carousel** - Image carousel slider
- **Bottom Sheet** - Sheet from bottom

### Overlay Components
- **Drawer** - Side drawer/sheet
- **Popover** - Floating popover menu
- **Dropdown Menu** - Dropdown menu list
- **Context Menu** - Right-click context menu

## Documentation

Visit the [documentation](https://farsiui.ir) to view components, API documentation, and examples.

## Customization

### Theming

Components use CSS variables for theming. Update your `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.6%;
  }

  .dark {
    --background: 0 0% 3.6%;
    --foreground: 0 0% 98%;
  }
}
```

### RTL & Persian Support

All components are fully optimized for:
- **Right-to-Left (RTL)** layout direction
- **Persian/Farsi** language
- **Persian fonts** (Vazirmatn by default)
- **Cultural context** and conventions

Use utilities like `start` and `end` instead of `left` and `right` in your custom styles:

```tsx
<div className="ps-4 pe-2"> {/* padding-inline-start & end */}
  Content
</div>
```

## Architecture

Farsi UI follows shadcn/ui's philosophy:

- **Components over Packages** - Copy-paste components instead of npm packages
- **Radix UI Primitives** - Built on accessible, unstyled Radix UI components
- **Tailwind CSS** - All styling with utility-first CSS
- **Fully Customizable** - Own the code, customize as needed

### File Structure

```
components/
├── ui/              # UI components
├── docs/            # Documentation components
├── theme-provider.tsx
└── theme-toggle.tsx

app/
├── docs/           # Documentation pages
│   ├── components/
│   └── installation/
├── layout.tsx
├── page.tsx
└── globals.css

lib/
├── components-data.tsx
└── utils.ts

hooks/
├── use-mobile.ts
└── use-toast.ts
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Best Practices

1. **Component Imports** - Always import from `@/components/ui`
2. **Styling** - Use Tailwind CSS classes, avoid inline styles
3. **RTL Handling** - Use logical properties (`start`/`end`) instead of physical (`left`/`right`)
4. **Accessibility** - Leverage Radix UI's built-in accessibility features
5. **Customization** - Copy and modify components as needed for your use case

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT © 2025 [Ehsan Ghaffari](https://ehsanghaffarii.ir)

## Credits

Farsi UI is built with:
- [shadcn/ui](https://ui.shadcn.com) - Component library inspiration
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [class-variance-authority](https://cva.style/) - Variant management
- [clsx](https://github.com/lukeed/clsx) - Utility library
- [React Hook Form](https://react-hook-form.com/) - Form library
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications

## Support

- 📚 [Documentation](https://farsiui.ir)
- 🐦 [Twitter](https://twitter.com/farsiui)
- 💬 [Discussions](https://github.com/farsiui/farsiui/discussions)
- 🐛 [Issues](https://github.com/farsiui/farsiui/issues)

## Contributing

We welcome contributions! Please read our [Contributing Guide](./CONTRIBUTING.md) first.

---

Made with ❤️ for the Persian web development community
