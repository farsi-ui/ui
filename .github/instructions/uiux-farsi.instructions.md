---
description: This file defines **GitHub Copilot instructions** for working within the **Farsi UI** codebase.
applyTo: '**'
---
## Overview

These instructions guide GitHub Copilot to assist in developing **Farsi UI**, an open-source, RTL-first UI/UX design system tailored for Persian (Farsi) applications.

## Project Context

Farsi UI is an **RTL-first, Persian-focused adaptation of shadcn/ui**.

It is **not** a packaged component library or registered design system. It is a **set of copy-and-own component patterns** intended to be customized, extended, and fully owned by the product team.

Key principles:

* RTL is the default, not a variant
* Persian language and typography are first-class
* Calm, modern, production-ready UI
* No lock-in, no hidden registry, no forced theming
* Same philosophy and mental model as shadcn/ui

Assume the technology stack is:

* React + TypeScript
* Tailwind CSS
* Radix UI (for primitives and accessibility)

---

## General Copilot Behavior

When generating output, Copilot **must**:

* Optimize for **RTL-first layouts and interactions**
* Treat components as **starting points**, not finished abstractions
* Prefer clarity and explicitness over clever abstractions
* Produce code that is easy to copy, rename, refactor, and extend
* Align with shadcn/ui conventions and structure
* Avoid introducing unnecessary dependencies, registries, or frameworks

---

## Visual & UX Design Guidelines

### Visual Design (RTL-First)

* Establish clear visual hierarchy for RTL reading flow
* Use spacing, alignment, and layout that feel natural in RTL
* Treat Persian typography as first-class (font choice, numerals, spacing)
* Ask for brand or typography guidelines if not provided
* Ensure WCAG 2.1 AA color contrast compliance
* Maintain consistency across copied components

### Interaction Design

* Design interactions that feel native to RTL (directional icons, motion, alignment)
* Use familiar patterns consistent with shadcn/ui
* Place calls-to-action appropriately for RTL emphasis
* Use animation sparingly and purposefully

---

## Accessibility Requirements

Copilot must ensure:

* WCAG guidelines are followed by default
* Radix UI accessibility patterns are used correctly
* Keyboard navigation works naturally in RTL contexts
* Semantic HTML is preferred over div-heavy structures
* ARIA attributes are meaningful and minimal
* Screen readers announce Persian content correctly

---

## Information Architecture

* Organize content logically for Persian users
* Use clear, culturally appropriate Farsi labels
* Design navigation patterns that feel natural in RTL
* Recommend structural diagrams or sitemaps for complex flows

---

## Component & System Design

### shadcn/ui Mental Model

Copilot should:

* Treat every component as locally owned code
* Encourage renaming and refactoring when appropriate
* Avoid premature abstraction
* Avoid building global systems unless explicitly requested

### Consistency

* Maintain consistent spacing, alignment, and behavior
* Use consistent Persian terminology
* Ensure recurring UI patterns remain predictable

---

## Responsive & Mobile-First Design

* Design mobile-first, then progressively enhance
* Respect RTL thumb-reach zones on mobile
* Use relative units (%, em, rem) instead of fixed pixels
* Prefer Flexbox and CSS Grid for RTL layouts

### Media Queries

* Define breakpoints based on content, not devices
* Test across orientations and screen sizes
* Ensure media embeds and images behave correctly in RTL

---

## Typography (Persian-Focused)

* Use fonts optimized for Persian readability
* Use relative font sizing
* Adjust line height and spacing for Persian text blocks
* Apply a modular scale consistently across breakpoints

---

## Forms, Inputs & Touch Targets

* Ensure forms adapt cleanly to RTL layouts
* Use appropriate input types for Persian users
* Provide clear inline validation and error messaging in Farsi
* Ensure touch targets meet minimum size requirements (44×44 px)

---

## Performance Expectations

Copilot should favor:

* Optimized assets and minimal bundle size
* Lazy loading where appropriate
* Code splitting for non-critical paths
* CSS-based animations over JavaScript
* Awareness of Core Web Vitals (LCP, FID, CLS)

---

## Testing, Iteration & Documentation

* Encourage testing with Persian-speaking users
* Support data-driven iteration (analytics, heatmaps, recordings)
* Keep component usage and patterns documented
* Favor maintainability and long-term DX

---

## Output Expectations

When responding, Copilot should:

* Provide **implementation-level guidance**
* Explain *why* decisions matter, especially for RTL or Persian UX
* Explicitly call out RTL-specific pitfalls
* Avoid abstract theory unless it directly informs implementation

The goal is to help build a **clean, adaptable, RTL-native UI system in Farsi** that the team fully owns and controls.
