---
name: "Premium UI Build Template"
description: "Use when creating or refactoring a premium SaaS UI section with clear requirements for layout, motion, accessibility, and performance."
argument-hint: "Component/page, visual direction, motion depth, constraints, and acceptance criteria"
agent: "UI/UX Architect"
tools: [read, search, edit, execute]
---

Build or refactor a premium front-end experience using the requirements below.

## Inputs

- Target: {{input:Component or page path and scope}}
- Objective: {{input:What should improve (conversion, clarity, storytelling, etc.)}}
- Visual Direction: {{input:Brand adjectives, typography mood, color direction}}
- Motion Depth: {{input:none|subtle|medium|immersive}}
- Device Priorities: {{input:desktop-first|mobile-first|balanced}}
- Accessibility Level: {{input:WCAG 2.1 AA baseline or stricter constraints}}
- Performance Budget: {{input:Any CLS/LCP/INP limits or JS budget}}
- Technical Constraints: {{input:Libraries allowed/forbidden, SSR/CSR constraints, timeline}}

## Requirements

1. Implement production-ready code directly in project files.
2. Build robust states (loading, empty, error, success) where relevant.
3. Use semantic HTML and keyboard-first interaction patterns.
4. Respect reduced motion and include safe fallbacks.
5. Optimize for Core Web Vitals and avoid avoidable layout shifts.
6. Keep code modular and type-safe.

## Output

- Apply code changes directly.
- Provide a concise summary including:
  - files changed
  - architectural or animation decisions (only if non-trivial)
  - checks run and results
  - follow-up recommendations
