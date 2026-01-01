# Contributing to Farsi UI

Thank you for your interest in contributing to Farsi UI! We welcome contributions from the community and appreciate your effort to help improve the library.

## Code of Conduct

By participating in this project, you agree to uphold our commitment to fostering an inclusive and welcoming community. Be respectful, constructive, and kind in all interactions.

---

## How to Contribute

### 1. Reporting Bugs

If you encounter a bug, please [open an issue](https://github.com/yourusername/farsi-ui/issues/new?template=bug_report.md) with the following information:

- **Clear description** of the issue
- **Steps to reproduce** the bug
- **Expected behavior** vs. **actual behavior**
- **Environment details** (OS, browser, Node.js version)
- **Code snippet** or **reproduction link** if applicable
- **Screenshots or videos** if it's a visual issue

### 2. Suggesting Features

We'd love to hear your ideas! Please [open a feature request](https://github.com/yourusername/farsi-ui/issues/new?template=feature_request.md) with:

- **Clear description** of the feature
- **Use cases** and **benefits**
- **Example implementation** or design mockups (if applicable)
- **Why this feature matters** to the RTL/Farsi community

### 3. Improving Documentation

Documentation improvements are highly valued. You can:

- Fix typos or clarify existing documentation
- Add missing documentation sections
- Improve code examples
- Translate documentation

Simply [open a pull request](https://github.com/yourusername/farsi-ui/compare) with your changes.

### 4. Contributing Code

#### Getting Started

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/yourusername/farsi-ui.git
   cd farsi-ui
   ```
3. **Install dependencies** using pnpm:
   ```bash
   pnpm install
   ```
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   # or for bug fixes:
   git checkout -b fix/bug-description
   ```

#### Development Setup

```bash
# Start the development server
pnpm dev

# Run linting
pnpm lint

# Build the project
pnpm build
```

#### Coding Standards

- **Language**: TypeScript
- **Framework**: React 18+
- **Styling**: Tailwind CSS
- **RTL First**: All components must be RTL-aware from the ground up
- **Accessibility**: Use Radix UI primitives for accessibility
- **Code Style**: Follow ESLint rules defined in the project

#### Component Development Guidelines

When adding or modifying components:

1. **RTL Compatibility**: Ensure components work seamlessly in RTL mode
   - Use logical properties instead of directional ones (e.g., `me` instead of `mr`)
   - Test component behavior with `dir="rtl"`

2. **Accessibility**: Follow WCAG 2.1 AA guidelines
   - Use semantic HTML
   - Add proper ARIA attributes
   - Test with keyboard navigation and screen readers

3. **TypeScript**: Maintain strict type safety
   - Export proper types and interfaces
   - Avoid `any` types
   - Document prop interfaces clearly

4. **Testing**: Test your components thoroughly
   - Test in RTL and LTR modes
   - Test keyboard interactions
   - Test with different screen sizes

5. **Documentation**: Include comprehensive documentation
   - JSDoc comments for components and functions
   - Example usage in component pages
   - Document props and their types

6. **File Structure**: Follow the existing structure
   - UI components go in `components/ui/`
   - Documentation pages go in `app/docs/components/[component]/`
   - Hooks go in `hooks/`

#### Component Example

```typescript
import * as React from "react"
import { cn } from "@/lib/utils"

interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Component variant */
  variant?: "default" | "secondary"
}

/**
 * MyComponent - A brief description of what this component does.
 * Fully RTL-compatible and accessible.
 */
const MyComponent = React.forwardRef<
  HTMLDivElement,
  MyComponentProps
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "base-styles",
      variant === "default" && "default-styles",
      variant === "secondary" && "secondary-styles",
      className
    )}
    {...props}
  />
))

MyComponent.displayName = "MyComponent"

export { MyComponent }
export type { MyComponentProps }
```

### 5. Pull Request Process

1. **Create a descriptive PR title** following the convention:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `refactor:` for code refactoring
   - `style:` for style/formatting changes
   - `test:` for test additions or updates

   Example: `feat: add Tooltip component with RTL support`

2. **Fill out the PR template** completely with:
   - Description of changes
   - Related issues or feature requests
   - Type of change
   - Checklist of verification steps

3. **Ensure all checks pass**:
   - ESLint passes (`pnpm lint`)
   - Code builds successfully (`pnpm build`)
   - All tests pass
   - No TypeScript errors

4. **Keep commits clean**:
   - Write meaningful commit messages
   - Keep commits atomic and logical
   - Use conventional commit format

5. **Be responsive** to review feedback and make requested changes

6. **One-line summary**: Provide a clear, concise description of what the PR accomplishes

### 6. Commit Message Guidelines

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `style`: Formatting/style changes
- `test`: Test additions or updates
- `chore`: Build process, dependencies, etc.

**Example:**
```
feat(button): add size variants to Button component

Add three new size variants (sm, md, lg) to the Button component
to provide better flexibility in different contexts.

Closes #123
```

---

## Project Structure

```
farsi-ui/
├── app/              # Next.js app directory
│   ├── docs/         # Documentation pages
│   └── layout.tsx
├── components/
│   ├── ui/           # UI components
│   └── docs/         # Documentation components
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helpers
├── styles/           # Global styles
├── types/            # TypeScript type definitions
├── public/           # Static assets
└── docs/             # Documentation/guides
```

---

## Testing Your Changes

### Manual Testing

1. Run the development server: `pnpm dev`
2. Navigate to http://localhost:3000/docs
3. Test your component with various props
4. Verify RTL compatibility by testing with `dir="rtl"`
5. Check keyboard navigation and screen reader support

### Linting

Run ESLint to check code quality:
```bash
pnpm lint
```

---

## Asking for Help

- **Questions**: Open a [discussion](https://github.com/yourusername/farsi-ui/discussions)
- **Need guidance**: Comment on the issue or PR and ask for help
- **Community chat**: Join our community discussions for real-time chat

---

## Recognition

Contributors are recognized in:
- Pull request acknowledgments
- Release notes
- Contributors list in documentation

---

## Additional Resources

- [Farsi UI Documentation](https://farsi-ui.ir)
- [shadcn/ui](https://ui.shadcn.com) - Design inspiration
- [Radix UI](https://www.radix-ui.com) - Accessibility patterns
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility standards
- [RTL Styling 101](https://rtl-styling.com) - RTL best practices

---

## License

By contributing to Farsi UI, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Farsi UI! Your efforts help us build better experiences for Farsi-speaking developers.**
