---
description: "Use when implementing or refactoring front-end UI in React/Next.js with TypeScript, Tailwind, animation, accessibility, and performance concerns."
name: "Frontend Creative Standards"
applyTo: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.css"]
---

# Frontend Creative Standards

## Scope

Apply these rules to UI, layout, interaction, animation, and styling work.

## Architecture

- Prefer modular, reusable components with clear ownership boundaries.
- For non-trivial behavior, extract custom hooks and keep render logic lean.
- Keep state colocated; lift only when multiple consumers need it.

## UX Baseline

- Implement complete states: loading, empty, error, and success.
- Preserve predictable interaction patterns and visible feedback.
- Avoid decorative features that reduce clarity.

## Motion Rules

- Motion should support comprehension, hierarchy, and orientation.
- Animate transform and opacity by default; avoid layout-thrashing properties.
- Respect reduced motion with a functional, non-animated fallback.
- Ensure timeline/listener cleanup on unmount for GSAP, ScrollTrigger, Lenis, and manual listeners.

## Accessibility

- Meet WCAG 2.1 AA expectations.
- Prefer semantic HTML first; add ARIA only when semantics are insufficient.
- Ensure keyboard-only usability, visible focus treatment, and logical tab order.
- For dialogs/drawers: focus trap, Escape close, inert background, focus return.

## Performance

- Optimize for Core Web Vitals (LCP, CLS, INP).
- Defer non-critical and heavy animation libraries via dynamic import where practical.
- Avoid hydration-heavy patterns for static sections; keep client code targeted.
- Use responsive media and prevent layout shift with explicit dimensions/aspect ratios.

## Styling Direction

- Use intentional typography and spacing systems; avoid generic defaults.
- Prefer design tokens (CSS variables or theme scales) for color, spacing, and radii.
- Match existing visual language unless the task explicitly requests a redesign.

## Delivery Style

- Keep explanations concise and implementation-first.
- Add comments for complex orchestration, accessibility edge-cases, or non-obvious state flow.
- Keep lint and type checks clean.
