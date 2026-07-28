# Farsi UI Library Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the existing Farsi UI repository from a Next.js docs-centric project into a production-ready RTL-first React component library with a reusable design system, documentation app, and package build infrastructure.

**Architecture:** Migrate the codebase into a pnpm workspace with separate `packages/react`, `packages/tokens`, and `apps/docs`. Preserve the docs site while extracting reusable library components, design tokens, and shared utilities.

**Tech Stack:** React, TypeScript, Tailwind CSS, Radix UI, pnpm workspace, tsup, vitest, Next.js, CSS variables.

---

## Phase 1: Workspace and Package Bootstrapping

### Task 1: Create workspace scaffold

**Files:**
- Create: `pnpm-workspace.yaml`
- Create: `tsconfig.base.json`
- Modify: `package.json`
- Create: `turbo.json` (optional)

**Steps:**
1. Create `pnpm-workspace.yaml` with workspace globs:
```yaml
packages:
  - "apps/*"
  - "packages/*"
```
2. Create `tsconfig.base.json` with shared compiler options:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@farsi-ui/react": ["packages/react/src"],
      "@farsi-ui/tokens": ["packages/tokens/src"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", "**/*.d.ts"],
  "exclude": ["node_modules"]
}
```
3. Update root `package.json` with workspace scripts:
- `dev:docs`
- `build`
- `lint`
- `typecheck`
- `test`
4. Create `turbo.json` with basic pipeline if desired.

**Expected:** `pnpm install` boots a workspace install; `pnpm -r true` works.

**Commit:** `chore: initialize pnpm workspace and shared tsconfig`

---

## Phase 2: Docs App Migration

### Task 2: Move docs into `apps/docs`

**Files:**
- Move: `app/` → `apps/docs/app/`
- Move: `app/globals.css` → `apps/docs/app/globals.css`
- Move: `next.config.mjs` → `apps/docs/next.config.mjs`
- Move: `postcss.config.mjs` → `apps/docs/postcss.config.mjs`
- Move: `next-env.d.ts` → `apps/docs/next-env.d.ts`
- Create: `apps/docs/package.json`
- Create: `apps/docs/tsconfig.json`

**Steps:**
1. Move files and directories from root into `apps/docs`.
2. Create `apps/docs/package.json` with dependencies copied from root and specific docs scripts:
```json
{
  "name": "@farsi-ui/docs",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "@farsi-ui/react": "workspace:~"
  }
}
```
3. Add `apps/docs/tsconfig.json` extending root base config.
4. Fix route imports and path aliases inside `apps/docs`.
5. Run `pnpm --filter @farsi-ui/docs dev` to verify the docs app starts.

**Expected:** docs app builds and renders after migration.

**Commit:** `refactor: migrate docs app into apps/docs workspace`

---

## Phase 3: Create `packages/react` Library Package

### Task 3: Initialize React package

**Files:**
- Create: `packages/react/package.json`
- Create: `packages/react/tsconfig.json`
- Create: `packages/react/tsup.config.ts`
- Create: `packages/react/src/index.ts`
- Create: `packages/react/src/lib/utils.ts`
- Create: `packages/react/src/lib/types.ts`

**Steps:**
1. Add `packages/react/package.json`:
```json
{
  "name": "@farsi-ui/react",
  "version": "0.0.1",
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  },
  "scripts": {
    "build": "tsup",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  },
  "dependencies": {
    "@radix-ui/react-slot": "1.1.1",
    "@radix-ui/react-label": "2.1.1",
    "clsx": "^2.1.1",
    "class-variance-authority": "^0.7.1",
    "tailwind-merge": "^3.4.0",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "peerDependencies": {
    "react": "^18 || ^19",
    "react-dom": "^18 || ^19"
  }
}
```
2. Create `packages/react/tsconfig.json` extending `../../tsconfig.base.json` and set `composite: true` if needed.
3. Create `packages/react/tsup.config.ts` with ESM/CJS outputs and declaration generation.
4. Add `packages/react/src/index.ts` exporting core components.
5. Add shared `utils.ts` and `types.ts` for library use.

**Expected:** `pnpm --filter @farsi-ui/react build` produces `dist/` and declarations.

**Commit:** `feat: create @farsi-ui/react package scaffold`

---

## Phase 4: Extract Design Tokens into `packages/tokens`

### Task 4: Create tokens package

**Files:**
- Create: `packages/tokens/package.json`
- Create: `packages/tokens/tsconfig.json`
- Create: `packages/tokens/tsup.config.ts`
- Create: `packages/tokens/src/css.ts`
- Create: `packages/tokens/src/index.ts`

**Steps:**
1. Add `packages/tokens/package.json`:
```json
{
  "name": "@farsi-ui/tokens",
  "version": "0.0.1",
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  },
  "scripts": {
    "build": "tsup",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  }
}
```
2. Extract color, typography, spacing, radius, and shadow variables from `app/globals.css` into token definitions.
3. Add JS token export map in `packages/tokens/src/index.ts`.
4. Ensure `apps/docs` can import token definitions.

**Expected:** token package builds and is importable by docs/app.

**Commit:** `feat: create @farsi-ui/tokens package`

---

## Phase 5: Migrate Core Components into `packages/react`

### Task 5: Move and standardize Button

**Files:**
- Move: `components/ui/button.tsx` → `packages/react/src/components/button.tsx`
- Modify: `packages/react/src/index.ts`
- Modify: `packages/react/src/lib/types.ts`

**Steps:**
1. Move `button.tsx`.
2. Refactor to `forwardRef<HTMLButtonElement, ButtonProps>`.
3. Add `ButtonProps` export and `buttonVariants` types.
4. Export `Button` from `src/index.ts`.
5. Add test stub file `packages/react/src/components/__tests__/button.test.tsx`.

**Expected:** `Button` compiles and exports from package.

**Commit:** `refactor: migrate Button into @farsi-ui/react with forwardRef`

### Task 6: Migrate Input and Textarea

**Files:**
- Move: `components/ui/input.tsx` → `packages/react/src/components/input.tsx`
- Move: `components/ui/textarea.tsx` → `packages/react/src/components/textarea.tsx`
- Modify: `packages/react/src/index.ts`

**Steps:**
1. Move files.
2. Refactor both to use `forwardRef` and `InputProps`/`TextareaProps`.
3. Export them from `src/index.ts`.
4. Add tests for ref forwarding and aria class merging.

**Expected:** Input and Textarea compile with correct types.

**Commit:** `refactor: migrate Input and Textarea into library`

### Task 7: Migrate form primitives and utilities

**Files:**
- Move: `components/ui/form.tsx` → `packages/react/src/components/form.tsx`
- Move: `components/ui/label.tsx` → `packages/react/src/components/label.tsx`
- Modify: `packages/react/src/index.ts`

**Steps:**
1. Move `form.tsx` and `label.tsx`.
2. Ensure form exports include `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`.
3. Add types for field helpers in `types.ts`.
4. Add tests for `FormField` context and label association.

**Expected:** form system compiles cleanly.

**Commit:** `refactor: migrate form primitives into library`

### Task 8: Migrate overlay and menu primitives

**Files:**
- Move: `components/ui/dialog.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/tooltip.tsx`, `components/ui/popover.tsx`
- Modify: `packages/react/src/index.ts`

**Steps:**
1. Move files.
2. Standardize `forwardRef` and `asChild` usage.
3. Remove `useIsRTL` from these components where possible.
4. Export overlay primitives from index.

**Expected:** overlay primitives compile and render in package.

**Commit:** `refactor: migrate overlay primitives into @farsi-ui/react`

### Task 9: Migrate remaining core components

**Files:**
- Move: `components/ui/select.tsx`, `components/ui/checkbox.tsx`, `components/ui/radio-group.tsx`, `components/ui/switch.tsx`, `components/ui/table.tsx`, `components/ui/tabs.tsx`, `components/ui/badge.tsx`, `components/ui/card.tsx`, `components/ui/separator.tsx`, `components/ui/avatar.tsx`, `components/ui/breadcrumb.tsx`
- Modify: `packages/react/src/index.ts`

**Steps:**
1. Move files into package.
2. Standardize API patterns and forward refs.
3. Export prop types where useful.
4. Add tests for each component’s core behavior.

**Expected:** core package contains clean, reusable primitives.

**Commit:** `refactor: migrate core UI components into package`

---

## Phase 6: Migrate Optional / Docs-Only Components

### Task 10: Separate optional advanced components

**Files:**
- Move docs-only components: `calendar.tsx`, `chart.tsx`, `carousel.tsx`, `command.tsx`, `sidebar.tsx`, `resizable.tsx`, `sheet.tsx`, `input-otp.tsx`, `drawer.tsx`, `menubar.tsx`, `navigation-menu.tsx`, `scroll-area.tsx`, `toast.tsx`, `toaster.tsx`, `sonner.tsx`

**Steps:**
1. Decide if each component belongs in `packages/react` or `apps/docs`.
2. Keep `chart`, `carousel`, `command`, `sidebar`, `resizable` as docs-specific examples initially.
3. Move `sheet`, `scroll-area`, `toast` to optional exports in `packages/react` if they are reusable.
4. Update docs import paths.

**Expected:** optional components no longer clutter core package.

**Commit:** `chore: separate optional UI components from core library`

---

## Phase 7: Implement RTL System and Direction Context

### Task 11: Create DirectionProvider and hooks

**Files:**
- Create: `packages/react/src/contexts/direction-context.tsx`
- Create: `packages/react/src/hooks/use-direction.ts`
- Modify: `packages/react/src/index.ts`
- Delete or deprecate: `hooks/use-rtl.ts`

**Steps:**
1. Implement `DirectionContext` and `DirectionProvider`.
2. Add `useDirection`, `useIsRTL`, and `useIsLTR` hooks.
3. Ensure the provider works server-side with `dir` prop.
4. Update components to consume `useDirection` only when needed.
5. Replace hard-coded directional CSS with logical classes.

**Expected:** RTL context is library-native and SSR-safe.

**Commit:** `feat: add DirectionProvider and SSR-safe RTL hooks`

### Task 12: Apply RTL-safe styling across components

**Files:**
- Modify: core component files using `left/right` or runtime RTL hacks
- Modify: docs app `apps/docs/app/layout.tsx`

**Steps:**
1. Audit `Button`, `Dialog`, `DropdownMenu`, `Sidebar`, `Switch`, `Pagination`, `Sheet`, `Drawer`.
2. Replace `left`/`right` with `start`/`end`, `ps`/`pe`, `border-s`/`border-e`.
3. Remove `useIsRTL` where possible and use context instead.
4. Ensure docs app root has `<html lang="fa" dir="rtl">`.

**Expected:** components use direction-agnostic CSS and logical Tailwind utilities.

**Commit:** `refactor: convert components to logical RTL styling`

---

## Phase 8: Design Token Extraction and Theme Infrastructure

### Task 13: Extract token CSS and JS

**Files:**
- Create: `packages/tokens/src/css.ts`
- Create: `packages/tokens/src/index.ts`
- Modify: `packages/react/src/styles/tokens.css`
- Modify: `apps/docs/app/globals.css`

**Steps:**
1. Extract semantic color variables from docs CSS.
2. Build JS token objects with string values and CSS var references.
3. Add a token import path for docs app.
4. Ensure `packages/react` components use tokens through CSS vars.

**Expected:** theme tokens are centralized and reusable.

**Commit:** `feat: extract design tokens into @farsi-ui/tokens`

### Task 14: Create ThemeProvider for library

**Files:**
- Move: `components/theme-provider.tsx` → `packages/react/src/components/theme-provider.tsx`
- Modify: `packages/react/src/index.ts`
- Modify: `apps/docs/app/layout.tsx`

**Steps:**
1. Convert `ThemeProvider` into reusable package component.
2. Expose it from `packages/react` index.
3. Use it in docs app with `attribute="class"` and theme defaults.

**Expected:** theme provider is package-exported and usable by external apps.

**Commit:** `feat: publish ThemeProvider from library`

---

## Phase 9: Build and Publish Pipeline

### Task 15: Add tsup build for packages

**Files:**
- Create: `packages/react/tsup.config.ts`
- Create: `packages/tokens/tsup.config.ts`
- Modify: root `package.json`
- Modify: `packages/react/package.json`
- Modify: `packages/tokens/package.json`

**Steps:**
1. Configure tsup with `format: ['cjs', 'esm']`, `dts: true`, `entry: ['src/index.ts']`.
2. Add `build` scripts to each package.
3. Add root build script to run package builds in sequence.
4. Validate generated dist files and package exports.

**Expected:** builds produce ESM/CJS bundles and `.d.ts` files.

**Commit:** `chore: add tsup build pipeline for library packages`

### Task 16: Add root workspace scripts and commands

**Files:**
- Modify: root `package.json`
- Modify: `apps/docs/package.json`
- Modify: `packages/react/package.json`
- Modify: `packages/tokens/package.json`

**Steps:**
1. Add root scripts:
   - `dev:docs`
   - `build`
   - `lint`
   - `typecheck`
   - `test`
2. Add package-specific scripts for build/typecheck.
3. Add docs app dev command.

**Expected:** root commands orchestrate workspace tasks.

**Commit:** `chore: add workspace scripts`

---

## Phase 10: Testing Infrastructure

### Task 17: Initialize Vitest and RTL tests

**Files:**
- Create: `vitest.config.ts`
- Create: `packages/react/src/components/__tests__/button.test.tsx`
- Create: `packages/react/src/components/__tests__/input.test.tsx`
- Create: `packages/react/src/components/__tests__/dialog.test.tsx`
- Create: `packages/react/src/components/__tests__/form.test.tsx`
- Create: `packages/react/src/components/__tests__/rtl.test.tsx`

**Steps:**
1. Add `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `@testing-library/react-hooks`, `vitest-axe` to dev dependencies.
2. Configure `vitest.config.ts` for React and TypeScript.
3. Add tests:
   - Button renders and forwards ref
   - Input respects className and props
   - Dialog opens and closes
   - Form uses label/input association
   - DirectionProvider sets RTL context
4. Run `pnpm test`.

**Expected:** core tests pass and coverage baseline exists.

**Commit:** `test: add vitest and core component tests`

### Task 18: Add accessibility checks

**Files:**
- Modify: `packages/react/src/components/__tests__/a11y.test.tsx`
- Modify: `vitest.config.ts`

**Steps:**
1. Add `vitest-axe` and `axe-core`.
2. Write tests for `Button`, `Input`, `Dialog`, `Tooltip` using `axe`.
3. Ensure tests fail if accessibility issues exist.

**Expected:** accessibility baseline in CI.

**Commit:** `test: add accessibility testing for core components`

---

## Phase 11: Documentation Upgrade

### Task 19: Restructure docs pages into foundations and guides

**Files:**
- Create: `apps/docs/app/docs/foundations/rtl/page.tsx`
- Create: `apps/docs/app/docs/foundations/tokens/page.tsx`
- Create: `apps/docs/app/docs/guides/migration/page.tsx`
- Modify: `apps/docs/app/docs/components/page.tsx`
- Modify: `apps/docs/app/docs/components/[component]/page.tsx`
- Modify: `apps/docs/components/docs/component-preview.tsx`
- Modify: `apps/docs/components/docs/source-code-block.tsx`

**Steps:**
1. Add RTL guide page documenting logical utilities and direction provider usage.
2. Add tokens page documenting CSS variables and JS token access.
3. Add migration guide from old docs/roots to package usage.
4. Add API tables and copy buttons to component docs.
5. Update sidebar navigation to include new foundations and guides.

**Expected:** docs site includes RTL and token reference content.

**Commit:** `docs: upgrade docs architecture with RTL and token references`

### Task 20: Add interactive code examples and copyable snippets

**Files:**
- Modify: `apps/docs/components/docs/component-preview.tsx`
- Modify: `apps/docs/components/docs/source-code-block.tsx`
- Modify: `apps/docs/app/docs/components/[component]/page.tsx`

**Steps:**
1. Add live demo wrapper around preview examples.
2. Add copy-to-clipboard button for code blocks.
3. Ensure examples import from `@farsi-ui/react`.

**Expected:** docs examples are interactive and copy-friendly.

**Commit:** `docs: add interactive examples and copy button`

---

## Phase 12: Open Source Readiness

### Task 21: Add GitHub Actions CI

**Files:**
- Create: `.github/workflows/ci.yml`
- Modify: `README.md`
- Modify: `CONTRIBUTING.md`

**Steps:**
1. Create CI workflow with jobs for:
   - install dependencies
   - lint
   - typecheck
   - build packages
   - run tests
2. Add badges to `README.md`.
3. Add `CHANGELOG.md` placeholder.

**Expected:** PRs run CI and validate package build.

**Commit:** `chore: add GitHub Actions CI and repo metadata`

### Task 22: Add release and contribution conventions

**Files:**
- Create: `.github/pull_request_template.md`
- Create: `.github/ISSUE_TEMPLATE/bug_report.md`
- Create: `.github/ISSUE_TEMPLATE/feature_request.md`
- Create: `CHANGELOG.md`
- Modify: `CONTRIBUTING.md`

**Steps:**
1. Add PR template for component changes and RTL review.
2. Add issue templates for bug and feature requests.
3. Add changelog instructions and versioning notes.
4. Update contribution guide to reference workspace layout and package commands.

**Expected:** community contributors have clear workflow.

**Commit:** `chore: add issue templates and release docs`

---

## Phase 13: Final polish and verification

### Task 23: Verify package publishing readiness

**Files:**
- Modify: `packages/react/package.json`
- Modify: `packages/tokens/package.json`

**Steps:**
1. Confirm package exports work with import paths.
2. Validate `pnpm build` produces correct bundle and types.
3. Run docs app to ensure it imports package builds successfully.
4. Confirm `pnpm lint`, `pnpm test`, and `pnpm typecheck` all pass.

**Expected:** repo is ready for publish and open-source collaboration.

**Commit:** `chore: verify package build and docs integration`

---

# Recommended Execution Order

1. Task 1
2. Task 2
3. Task 3
4. Task 4
5. Task 5
6. Task 6
7. Task 7
8. Task 8
9. Task 9
10. Task 10
11. Task 11
12. Task 12
13. Task 13
14. Task 14
15. Task 15
16. Task 16
17. Task 17
18. Task 18
19. Task 19
20. Task 20
21. Task 21
22. Task 22
23. Task 23

---

# Notes

- Keep each change small and commit frequently.
- Use `pnpm` workspace commands to validate package interactions.
- Start with core package structure and only then migrate docs.
- Preserve docs content during the migration by moving instead of deleting.
- Avoid refactoring optional advanced components until the library core is stable.
