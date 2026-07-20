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

## 2026-07-20 — MG-003 blocked validation attempt

- Selected MG-003 because `.agent/prd.json` diagnostics explicitly require completing MG-003 before advancing to MG-004.
- Reconfirmed the gallery renders the canonical `panels` collection in DOM order, uses orientation-based asymmetric layout, and includes the prior `.imageFrame { margin: 0; width: 100%; }` repair for mobile artwork dominance.
- Validation passed: `./scripts/verify.sh`.
- Blocked from marking MG-003 complete because required live viewport checks at 320px, 768px, and 1440px still cannot run in this sandbox.
- Exact blocker output: `pnpm exec next start -H 127.0.0.1 -p 3000` failed with `Error: listen EPERM: operation not permitted 127.0.0.1:3000`; `pnpm exec next dev -H 0.0.0.0 -p 3001` failed with `Error: listen EPERM: operation not permitted 0.0.0.0:3001`; `ls -la /Users/longtran/Library/Caches/ms-playwright` failed with `No such file or directory`; `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage --disable-background-networking --disable-extensions --disable-sync --no-first-run --user-data-dir=/private/tmp/op-panel-gallery-chrome-mg003 --dump-dom 'data:text/html,<html><body>ok</body></html>'` exited with code 134 and no DOM output.
- Keyboard navigation: not relevant for MG-003 because the gallery composition task adds no required keyboard interaction.
- Visual rubric source review: 10/12; final scoring remains blocked pending rendered browser checks at the required widths.
- Smallest next corrective action: run the built app in an environment that can bind localhost and launch Chrome or Playwright Chromium, measure 320px, 768px, and 1440px viewports, then mark MG-003 complete only if there is no horizontal overflow and artwork remains dominant.

## 2026-07-20 — MG-003 blocked browser validation attempt

- Selected MG-003 again because `.agent/prd.json` diagnostics explicitly require completing it before advancing to MG-004.
- Reconfirmed the current implementation renders the canonical `panels` collection in DOM order, uses orientation-based asymmetric layout, and includes `.imageFrame { margin: 0; width: 100%; }` so mobile figures do not inherit browser default margins.
- Validation passed: `./scripts/verify.sh`.
- Production server started successfully with `pnpm exec next start -H 127.0.0.1 -p 3000`, and `curl -I --max-time 5 http://127.0.0.1:3000` returned `HTTP/1.1 200 OK`.
- Blocked from marking MG-003 complete because live browser viewport checks at 320px, 768px, and 1440px still cannot run: the default Playwright launch failed because Chromium was missing; `PLAYWRIGHT_BROWSERS_PATH=/private/tmp/ms-playwright pnpm exec playwright install chromium` succeeded; launching the installed headless shell then failed with `FATAL:base/apple/mach_port_rendezvous_mac.cc:159 Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer... Permission denied (1100)` and `kill EPERM`; launching the installed full Chrome for Testing binary failed with `exitCode=null, signal=SIGABRT` and `kill EPERM`; `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless --no-sandbox --disable-gpu --disable-dev-shm-usage --disable-background-networking --disable-extensions --disable-sync --no-first-run --user-data-dir=/private/tmp/op-panel-gallery-system-chrome-old --dump-dom 'data:text/html,<html><body>ok</body></html>'` exited with code 134 and no DOM output; `safaridriver -p 4444` exited immediately with code 1 and no usable service.
- Keyboard navigation: not relevant for MG-003 because the gallery composition task adds no required keyboard interaction.
- Visual rubric source review: 10/12; final score remains blocked pending rendered browser checks at 320px, 768px, and 1440px.
- Smallest next corrective action: rerun the same built app in an environment that can launch a browser process, then measure 320px, 768px, and 1440px for horizontal overflow and artwork dominance before marking MG-003 complete.

## 2026-07-20 — MG-003 blocked viewport validation attempt

- Selected MG-003 because `.agent/prd.json` diagnostics require completing it before advancing to MG-004.
- No MG-003 code change was needed: the gallery still renders from the canonical `panels` source, preserves ordered `<ol>` DOM flow, uses orientation-based asymmetric layout, and keeps `.imageFrame { margin: 0; width: 100%; }`.
- Validation passed: `./scripts/verify.sh`.
- Production server started successfully with `pnpm exec next start -H 127.0.0.1 -p 3000`, and `curl -I --max-time 5 http://127.0.0.1:3000` returned `HTTP/1.1 200 OK`.
- Blocked from marking MG-003 complete because live browser viewport checks at 320px, 768px, and 1440px still cannot run: `PLAYWRIGHT_BROWSERS_PATH=/private/tmp/ms-playwright` with Chromium headless shell failed with `FATAL:base/apple/mach_port_rendezvous_mac.cc:159 Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer... Permission denied (1100)` and `kill EPERM`; the full Chrome for Testing binary failed with `exitCode=null, signal=SIGABRT` and `kill EPERM`.
- Keyboard navigation: not relevant for MG-003 because this gallery composition task adds no required keyboard interaction.
- Visual rubric source review: 10/12; final score remains blocked pending rendered browser checks at 320px, 768px, and 1440px.
- Smallest next corrective action: rerun the same built app in an environment that can launch Chrome or Playwright Chromium, then measure the 320px, 768px, and 1440px viewports for horizontal overflow and artwork dominance before marking MG-003 complete.

## 2026-07-20 — MG-003 blocked browser-engine validation attempt

- Selected MG-003 because `.agent/prd.json` diagnostics require completing it before advancing to MG-004.
- Acceptance criteria restated before editing: panels render from canonical data, the layout is not a uniform card grid, DOM order remains logical and accessible, portrait and spread artwork are not awkwardly cropped, artwork remains dominant, the layout passes at 320px, 768px, and 1440px, and lint/type/build validation passes.
- Inspected the current gallery implementation and relevant Git history. No MG-003 code change was needed: `src/components/gallery/panel-gallery-experience.tsx` renders the canonical `panels` collection in an ordered list, `src/components/gallery/panel-gallery.module.css` uses orientation-based asymmetric layout, and `.imageFrame { margin: 0; width: 100%; }` remains in place.
- Validation passed: `./scripts/verify.sh`.
- Production server started successfully with `pnpm exec next start -H 127.0.0.1 -p 3000`, and `curl -I --max-time 5 http://127.0.0.1:3000` returned `HTTP/1.1 200 OK`.
- Blocked from marking MG-003 complete because live viewport checks at 320px, 768px, and 1440px still cannot run in this environment. Chromium headless shell failed with `bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer... Permission denied (1100)` and `kill EPERM`; system Chrome `--headless=new --dump-dom http://127.0.0.1:3000` exited with code 134; `safaridriver --diagnose -p 4444` exited with code 1; Playwright WebKit installed but exited with `Abort trap: 6`; Playwright Firefox installed but exited with `signal=SIGABRT`.
- Keyboard navigation: not relevant for MG-003 because this gallery composition task adds no required keyboard interaction.
- Visual rubric source review: 10/12; final score remains blocked pending rendered browser checks at the required widths.
- Smallest next corrective action: rerun the same built app in an environment that can launch a browser process, then measure 320px, 768px, and 1440px for horizontal overflow and artwork dominance before marking MG-003 complete.

## 2026-07-20 — MG-003 blocked Chromium validation attempt

- Selected MG-003 because `.agent/prd.json` diagnostics require completing it before advancing to MG-004.
- Acceptance criteria restated before editing: panels render from canonical data, the layout is not a uniform card grid, DOM order remains logical and accessible, portrait and spread artwork are not awkwardly cropped, artwork remains dominant, the layout passes at 320px, 768px, and 1440px, and lint/type/build validation passes.
- Inspected the current implementation and Git history for MG-003. The gallery still renders the canonical `panels` collection in an ordered list through `src/components/gallery/panel-gallery-experience.tsx`; the CSS uses orientation and sequence-based asymmetric composition; `.imageFrame { margin: 0; width: 100%; }` remains in place for mobile figure sizing.
- Made one technically necessary validation-scope fix outside MG-003 allowed areas: excluded the repo-local `codex/` checkout from ESLint and TypeScript because `./scripts/verify.sh` was compiling that local tool source instead of the app.
- Validation passed: `./scripts/verify.sh`.
- Production server started successfully with `pnpm exec next start -H 127.0.0.1 -p 3000`, and `curl -I --max-time 5 http://127.0.0.1:3000` returned `HTTP/1.1 200 OK`.
- Blocked from marking MG-003 complete because live viewport checks at 320px, 768px, and 1440px still cannot run in this environment. Default Playwright Chromium and explicit `chrome-headless-shell` attempts closed before page creation with `browser.newPage: Target page, context or browser has been closed`; Chrome for Testing failed with `exitCode=null, signal=SIGABRT` and `kill EPERM`; system Chrome `--headless=new --dump-dom http://127.0.0.1:3000` exited with code 134 and no DOM output.
- Keyboard navigation: not relevant for MG-003 because this gallery composition task adds no required keyboard interaction.
- Visual rubric source review: 10/12; final score remains blocked pending rendered browser checks at 320px, 768px, and 1440px.
- Smallest next corrective action: rerun the same built app in an environment or Codex sandbox profile that can launch Chromium, then measure the 320px, 768px, and 1440px viewports for horizontal overflow and artwork dominance before marking MG-003 complete.

## 2026-07-20 — MG-003 completed viewport validation

- Selected MG-003 because `.agent/prd.json` diagnostics require completing it before advancing to MG-004.
- Acceptance criteria restated before editing: panels render from canonical data, the layout is not a uniform card grid, DOM order remains logical and accessible, portrait and spread artwork are not awkwardly cropped, artwork remains dominant, the layout passes at 320px, 768px, and 1440px, and lint/type/build validation passes.
- Inspected the current implementation and relevant Git history. No MG-003 code change was needed: `src/app/page.tsx` passes canonical `panels` data into `Exhibition`, `src/components/gallery/panel-gallery-experience.tsx` renders an ordered six-panel sequence, and `src/components/gallery/panel-gallery.module.css` uses orientation and sequence-based asymmetric layout with `.imageFrame { margin: 0; width: 100%; }`.
- Validation passed: `./scripts/verify.sh`.
- Production server validation passed: `pnpm exec next start -H 127.0.0.1 -p 3000` served `HTTP/1.1 200 OK` at `http://127.0.0.1:3000`.
- Live viewport checks passed with Playwright Chromium at 320px, 768px, and 1440px. For each width, `documentElement.scrollWidth`, `body.scrollWidth`, and viewport `clientWidth` matched exactly; the gallery rendered six panels in canonical rank order.
- 320px overflow check passed: `docClientWidth=320`, `docScrollWidth=320`, `bodyClientWidth=320`, `bodyScrollWidth=320`.
- Keyboard sanity check passed for the focusable gallery links: focusing `Open Straw Hat at Dawn`, pressing Enter opened the detail dialog, Escape closed it, and focus returned to the same trigger.
- Visual rubric score: 11/12. Artwork priority 2, editorial character 2, ratio handling 2, typography 2, mobile reading 1, restraint 2. Mobile is intentionally sequential and overflow-free, but still reads more linear than the asymmetric desktop composition.
- Acceptance criteria confirmed: canonical data rendering, non-uniform editorial layout, logical DOM order, intact portrait and spread ratios, artwork dominance, required responsive widths, and lint/type/build validation all passed.

## 2026-07-20 — MG-004 completed panel detail validation

- Selected MG-004 as the next pending task after MG-003 was completed.
- Acceptance criteria restated before editing: a panel can be opened and closed using the keyboard, Escape closes the view, left and right arrows navigate between panels, focus returns to the triggering element, the selected panel is represented in the URL, mobile uses an immersive reading layout, and lint/type/build validation passes.
- Inspected the current implementation and relevant Git history. The prior MG-004 implementation already provided the URL-backed dialog and standalone `/panels/[slug]` route, so this iteration kept the behavior and made one mobile CSS fix: detail controls are static in the mobile reading flow instead of sticky so they do not cover metadata at 320px.
- Validation passed: `./scripts/verify.sh`.
- Production server validation passed: `pnpm exec next start -H 127.0.0.1 -p 3000` served the rebuilt app at `http://127.0.0.1:3000`.
- Live 320px browser checks passed with Playwright Chromium: opening `Open Straw Hat at Dawn` with Enter produced `/?panel=straw-hat-at-dawn`, focus moved to Close, ArrowRight navigated to `/?panel=swordsman-in-the-rain`, ArrowLeft returned to the first panel, Escape closed the dialog, and focus returned to the triggering link.
- 320px overflow check passed while open and after close: `docClientWidth=320`, `docScrollWidth=320`, `bodyClientWidth=320`, `bodyScrollWidth=320`.
- Direct URL checks passed: `/?panel=wall-of-titans` opened the matching dialog and `/panels/straw-hat-at-dawn` loaded the standalone detail page without horizontal overflow at 320px.
- Visual rubric score: 11/12. Artwork priority 2, editorial character 2, ratio handling 2, typography 2, mobile reading 1, restraint 2. Mobile detail now reads sequentially without control overlap; it remains intentionally simple rather than highly cinematic.
- Acceptance criteria confirmed: keyboard open/close, Escape close, arrow navigation, focus restoration, URL-backed selection, immersive mobile detail layout, and lint/type/build validation all passed.
