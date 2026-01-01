# Contributing to Farsi UI

First off, thank you for considering a contribution to Farsi UI! It's people like you that make Farsi UI such a great tool.

This document provides guidelines and instructions for contributing to Farsi UI. Please take a moment to review it before submitting your contribution.

## Code of Conduct

Be respectful and constructive. We're building a welcoming community for everyone.

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check if the issue has already been reported. When creating a bug report, please include:

- **Title**: Clear and descriptive
- **Description**: What you expected and what actually happened
- **Steps to Reproduce**: Specific steps to reproduce the behavior
- **Screenshots/Code**: Visual examples if applicable
- **Environment**: OS, browser, Node version, etc.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When suggesting an enhancement:

- Use a clear and descriptive title
- Provide examples to illustrate the enhancement
- Describe the current behavior and expected behavior
- Explain why this enhancement would be useful

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following the guidelines below
4. **Test your changes** thoroughly
5. **Commit with clear messages**: `git commit -m 'Add amazing feature'`
6. **Push to your fork**: `git push origin feature/amazing-feature`
7. **Submit a Pull Request** with a clear description

## Development Guidelines

### Project Structure

```
components/
├── ui/                 # UI components (copy/paste)
├── docs/              # Documentation components
├── theme-provider.tsx
└── theme-toggle.tsx

app/
├── docs/              # Documentation pages
│   ├── components/
│   └── installation/
├── layout.tsx
├── page.tsx
└── globals.css

lib/
├── components-data.tsx # Component metadata and examples
└── utils.ts           # Utility functions

hooks/
├── use-mobile.ts
└── use-toast.ts
```

### Creating a New Component

1. **Create the component file** in `components/ui/[component-name].tsx`

```typescript
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // Your props here
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("base-classes", className)}
      {...props}
    />
  )
)
Component.displayName = "Component"

export { Component }
```

2. **Add component metadata** to `lib/components-data.tsx`:

```typescript
{
  slug: "component-name",
  name: "نام کامپوننت",
  nameEn: "Component Name",
  description: "توضیح کامپوننت",
  category: "inputs", // or display, feedback, navigation, layout, overlay
  examples: [
    {
      id: "default",
      title: "پیش‌فرض",
      description: "نمونه پیش‌فرض",
      preview: <Component />,
      code: `import { Component } from "@/components/ui/component"\n\nexport function Demo() {\n  return <Component />\n}`
    }
  ]
}
```

3. **Create documentation page** at `app/docs/components/[component-name]/page.tsx`:

```typescript
import { Component } from "@/components/ui/component"
import { ComponentPreview } from "@/components/docs/component-preview"

export default function ComponentPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">نام کامپوننت</h1>
        <p className="text-lg text-muted-foreground">توضیح کامپوننت</p>
      </div>
      
      <ComponentPreview code={`...`}>
        <Component />
      </ComponentPreview>
    </div>
  )
}
```

### Component Guidelines

#### General Principles

- **Accessibility First**: Built on Radix UI primitives with WCAG 2.1 compliance
- **RTL Ready**: Use logical properties (`start`/`end`) not physical (`left`/`right`)
- **Copy/Paste Philosophy**: Components should be self-contained and easy to copy
- **Minimal Dependencies**: Prefer Radix UI and Tailwind CSS
- **Type Safe**: Full TypeScript support
- **Customizable**: Use `cn()` for className merging

#### Naming Conventions

- Component names: PascalCase (`Button`, `FormField`, `DropdownMenu`)
- Files: kebab-case (`button.tsx`, `form-field.tsx`)
- Props interfaces: `${ComponentName}Props`
- Export all sub-components for composability

#### TypeScript

Always export proper TypeScript types:

```typescript
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}
```

#### Styling

- Use Tailwind CSS utilities
- Use `class-variance-authority` for variant management
- Use `cn()` for conditional classes
- Support dark mode with `dark:` classes
- Use CSS variables for theme colors
- Always include RTL considerations

Example with CVA:

```typescript
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "base-styles",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        ghost: "hover:bg-accent",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
```

#### Accessibility (a11y)

- Use semantic HTML elements
- Include proper ARIA labels and roles
- Support keyboard navigation
- Test with screen readers
- Ensure color contrast meets WCAG standards
- All interactive elements must be keyboard accessible

#### RTL Support

Always consider RTL layout:

```tsx
// ✅ Good - works in both LTR and RTL
<div className="ps-4 pe-2">Content</div>
<ChevronLeft className="rtl:rotate-180" />

// ❌ Bad - hardcoded direction
<div className="ml-4 mr-2">Content</div>
<div className="text-left">Content</div>
```

### Code Style

- Follow the existing code style in the project
- Use 2-space indentation
- Use single quotes for strings (except in JSX)
- Remove trailing whitespace
- No console.logs in production code
- Add comments for non-obvious logic

### Documentation

- Document component props with JSDoc comments
- Include examples for common use cases
- Document any breaking changes clearly
- Update README if adding new features
- Keep documentation in Persian and English where relevant

```typescript
/**
 * Button component for user interactions
 * 
 * @example
 * ```tsx
 * <Button variant="primary">Click me</Button>
 * ```
 */
export function Button({ variant = "default", ...props }: ButtonProps) {
  // Implementation
}
```

### Testing

- Test RTL layout rendering
- Test dark mode
- Test accessibility with keyboard navigation
- Test responsive behavior
- Test with various browsers

## Commit Messages

Write clear, descriptive commit messages:

```
type(scope): subject

body

footer
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build, CI, dependencies, etc.

Examples:
- `feat(button): add loading state`
- `fix(dialog): prevent body scroll in RTL mode`
- `docs: update component guidelines`

## Pull Request Process

1. **Update documentation** - Include component examples and usage
2. **Add tests** - Ensure your changes work correctly
3. **Update CHANGELOG** - Document your changes
4. **Link related issues** - Reference any related issues
5. **Request review** - Ask for feedback from maintainers

## Review Process

Maintainers will review your PR and provide feedback. We may ask for:
- Changes to code style or structure
- Additional tests or documentation
- Clarification on implementation choices
- Performance improvements

## Component Checklist

Before submitting a component PR, ensure:

- [ ] Component is built on Radix UI primitives
- [ ] TypeScript types are complete
- [ ] Component is accessible (WCAG 2.1)
- [ ] RTL layout is properly supported
- [ ] Dark mode is supported
- [ ] Component is customizable via props and className
- [ ] Examples are provided with Persian and English text
- [ ] Documentation page is created
- [ ] Component metadata added to `components-data.tsx`
- [ ] Code follows project style guidelines
- [ ] No console errors or warnings

## Questions?

- 📚 Check the [documentation](https://farsiui.ir)
- 💬 Join our [discussions](https://github.com/farsiui/farsiui/discussions)
- 📧 Contact maintainers

## Recognition

Contributors will be recognized in:
- README.md contributors section
- GitHub contributors page
- Release notes

Thank you for contributing! 🎉
