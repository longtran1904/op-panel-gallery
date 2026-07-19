## 2026-07-19 — MG-001 Create the design-token foundation

- Completed the design-token foundation with warm paper, ink, muted ink, border, accent, spacing, rule, and motion primitives in `src/app/globals.css`.
- Added a minimal Next.js App Router shell, local `next/font` typography, and a restrained foundation homepage without gallery, filtering, modal, or animation behavior.
- Added the minimal Next/TypeScript/ESLint project scaffolding needed for `./scripts/verify.sh`.
- Validation passed: `./scripts/verify.sh`.
- 320px overflow check passed with Playwright/Chrome: `scrollWidth=320`, `clientWidth=320`, `bodyScrollWidth=320`, `bodyClientWidth=320`.
- Visual rubric: not scored; this task establishes the foundation and intentionally does not introduce panel artwork or gallery composition.
