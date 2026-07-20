## 2026-07-19 — MG-001 Create the design-token foundation

- Completed the design-token foundation with warm paper, ink, muted ink, border, accent, spacing, rule, and motion primitives in `src/app/globals.css`.
- Added a minimal Next.js App Router shell, local `next/font` typography, and a restrained foundation homepage without gallery, filtering, modal, or animation behavior.
- Added the minimal Next/TypeScript/ESLint project scaffolding needed for `./scripts/verify.sh`.
- Validation passed: `./scripts/verify.sh`.
- 320px overflow check passed with Playwright/Chrome: `scrollWidth=320`, `clientWidth=320`, `bodyScrollWidth=320`, `bodyClientWidth=320`.
- Visual rubric: not scored; this task establishes the foundation and intentionally does not introduce panel artwork or gallery composition.

## 2026-07-19 — Agent orchestration loop

- Added `scripts/agent-loop.sh` to run a serial Codex loop where each pass spawns one fresh `codex exec` session for exactly one pending task.
- The loop reads `.agent/prd.json`, respects the existing three-attempt convention, writes transcripts to `.agent/runs/`, and stops on failed agent runs or unchanged task state.
- Added `pnpm agent:loop` and documented loop usage in `README.md`.

## 2026-07-19 — MG-002 Create the canonical panel data model

- Added the canonical `MangaPanel` interface and `PanelOrientation` type in `src/types/panel.ts`.
- Added six typed canonical panel records in `src/data/panels.ts`, covering portrait, landscape, square, and spread orientations with explicit image metadata and curatorial fields.
- Validation passed: `./scripts/verify.sh`.
- 320px overflow check: no UI files changed in this iteration; the previous browser check remains applicable. A fresh local browser check was blocked by this sandbox because server binding failed with `listen EPERM`, Playwright Chromium is not installed, and system Chrome headless exited with code 134.
- Keyboard navigation: not relevant for this data-model task because no interactive UI was added.
- Visual rubric: not scored; this task adds canonical metadata only and does not introduce visual composition.

## 2026-07-19 — MG-003 Build the editorial gallery composition

- Implemented a server-rendered editorial gallery component in `src/components/gallery`, with an accessible ordered sequence rendered from the canonical panel data source and varied portrait, landscape, square, and spread layout treatments.
- Added six local WebP placeholder assets under `public/panels/` matching the canonical data paths so `next/image` has real artwork files to render.
- Validation passed: `./scripts/verify.sh`.
- Blocked from marking complete because required live viewport checks at 320px, 768px, and 1440px could not run in this sandbox.
- Exact blocker output: `pnpm exec next dev -H 127.0.0.1 -p 3000` failed with `Error: listen EPERM: operation not permitted 127.0.0.1:3000`; Playwright browser install failed with `getaddrinfo ENOTFOUND cdn.playwright.dev`; system Chrome headless launched against static build output but returned no DOM output and wrote no screenshot.
- Keyboard navigation: not relevant for MG-003 because no interactive controls were added.
- Visual rubric provisional review from source and generated assets: 10/12; final scoring still needs a real browser viewport review.
- Smallest next corrective action: rerun the 320px, 768px, and 1440px overflow and visual checks in an environment that can bind localhost or already has Playwright Chromium installed.

## 2026-07-19 — MG-003 repair attempt

- Repaired the mobile artwork dominance issue by resetting the gallery `figure` default margin and setting `.imageFrame` to `width: 100%` in `src/components/gallery/panel-gallery.module.css`.
- Validation passed: `./scripts/verify.sh`.
- Blocked from marking MG-003 complete because required live viewport checks at 320px, 768px, and 1440px still cannot run in this sandbox.
- Exact blocker output: `pnpm exec next start -H 127.0.0.1 -p 3000` failed with `Error: listen EPERM: operation not permitted 127.0.0.1:3000`; `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless=new --disable-gpu --no-sandbox --disable-dev-shm-usage --dump-dom 'data:text/html,<html><body>ok</body></html>'` exited with code 134 and no DOM output; retrying Chrome with `--user-data-dir=/private/tmp/op-panel-gallery-chrome` also exited with code 134 and no DOM output.
- Keyboard navigation: not relevant for MG-003 because no interactive controls were added.
- Visual rubric source review: 10/12 after the repair; final score remains blocked pending browser rendering at the required widths.
- Smallest next corrective action: rerun the live 320px, 768px, and 1440px overflow and visual checks in an environment that can bind localhost and launch Chrome or Playwright Chromium, then mark MG-003 complete if those checks pass.

## 2026-07-20 — MG-003 validation attempt

- Selected MG-003 again because PRD diagnostics require completing it before advancing to MG-004.
- Confirmed the targeted repair is present: `.imageFrame` resets the browser default `figure` margin and uses `width: 100%`, preserving intact portrait, landscape, square, and spread artwork.
- Validation passed: `./scripts/verify.sh`.
- Blocked from marking MG-003 complete because live viewport validation still cannot run in this sandbox.
- Exact blocker output: `pnpm exec next start -H 127.0.0.1 -p 3000` failed with `Error: listen EPERM: operation not permitted 127.0.0.1:3000`; `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage --disable-background-networking --disable-extensions --disable-sync --no-first-run --user-data-dir=/private/tmp/op-panel-gallery-chrome-check --dump-dom 'data:text/html,<html><body>ok</body></html>'` exited with code 134 and no DOM output; Playwright browser binaries are not installed under `/Users/longtran/Library/Caches/ms-playwright`.
- Keyboard navigation: not relevant for MG-003 because no interactive controls were added.
- Visual rubric source review: 10/12; final scoring remains blocked pending rendered browser checks at 320px, 768px, and 1440px.
- Smallest next corrective action: run the already-built app in an environment that can bind localhost and launch Chrome or Playwright Chromium, measure 320px, 768px, and 1440px viewports, then mark MG-003 complete only if those checks pass.

## 2026-07-20 — MG-004 blocked validation attempt

- Selected MG-004 as the only pending task with `attempts < 3`, despite the existing MG-003 diagnostic warning, because this iteration prompt explicitly required an eligible task below three attempts.
- Implemented the smallest coherent detail experience: gallery links open a URL-backed `?panel=<slug>` dialog, Escape closes it, left/right arrow handlers cycle panels, close restores focus to the trigger, and canonical `/panels/[slug]` pages are statically generated from the canonical panel records.
- Validation passed: `./scripts/verify.sh`.
- Blocked from marking MG-004 complete because required live 320px overflow and keyboard navigation checks cannot run in this sandbox.
- Exact blocker output: `pnpm exec next start -H 127.0.0.1 -p 3000` failed with `Error: listen EPERM: operation not permitted 127.0.0.1:3000`; `pnpm exec next dev -H 0.0.0.0 -p 3001` failed with `Error: listen EPERM: operation not permitted 0.0.0.0:3001`; `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage --disable-background-networking --disable-extensions --disable-sync --no-first-run --user-data-dir=/private/tmp/op-panel-gallery-chrome-mg004 --dump-dom 'data:text/html,<html><body>ok</body></html>'` exited with code 134 and no DOM output; Playwright is installed at version 1.61.1 but no browser binaries are installed under `/Users/longtran/Library/Caches/ms-playwright`.
- Acceptance criteria status: implementation source satisfies keyboard open/close, Escape, arrow navigation, focus restoration, URL-backed selection, mobile immersive layout, and build validation, but final completion remains blocked pending live browser confirmation.
- Visual rubric: final score blocked pending rendered review; source review keeps artwork dominant, preserves paper/ink restraint, and uses a full-height mobile detail view rather than a collapsed desktop card.
- Smallest next corrective action: run the built app in an environment that can bind localhost and launch Chrome or Playwright Chromium, verify 320px overflow and keyboard behavior, then mark MG-004 complete if those checks pass.
