# op-panel-gallery

Manga Panel Gallery is a Next.js App Router webapp.

# INSTALL
For testing suite with Chromium, had to build from source Codex with added sandbox policy to allow running Chromium for Testing, which spawn OS service at testing time.
[https://github.com/openai/codex/issues/21292?utm_source=chatgpt.com]

Refer to BUILD_CODEX_FROM_SOURCE.md

## Requirements

- Node.js 20.9 or newer
- pnpm
- `codex-playwright` on PATH for `pnpm agent:loop`

## Run Locally

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000` to view the exhibition homepage and editorial
panel gallery. Gallery panel links open the focused detail view in place, and
direct panel pages are available at paths such as
`http://localhost:3000/panels/straw-hat-at-dawn`.
The focused detail view can also be opened directly from the homepage URL with
`http://localhost:3000/?panel=straw-hat-at-dawn`.
Vercel Analytics is included in the app shell; deployed Vercel builds track
gallery and panel detail pageviews plus panel open, close, and navigation
events after Web Analytics is enabled for the project in Vercel.

For explicit local binding during agent or browser validation:

```bash
pnpm exec next dev -H 127.0.0.1 -p 3000
```

When using that explicit binding, open `http://127.0.0.1:3000`.

To run on a different port, use Next directly:

```bash
pnpm exec next dev -p 3001
```

## Validate

Run the full project verification script:

```bash
./scripts/verify.sh
```

This runs linting, TypeScript checking, and a production build.

For visual iterations, also run the app locally and inspect the gallery at
320px, 768px, and 1440px:

```bash
pnpm dev
```

Use `http://localhost:3000` for the viewport checks. Confirm there is no
horizontal overflow at 320px before marking a visual task complete.
When validating a production build instead of the dev server, run
`pnpm build`, start the built app with `pnpm exec next start -H 127.0.0.1 -p 3000`,
and perform the same viewport checks at `http://127.0.0.1:3000`.
If Playwright needs a local browser runtime for those checks, install Chromium
into the temp cache with:

```bash
PLAYWRIGHT_BROWSERS_PATH=/private/tmp/ms-playwright pnpm exec playwright install chromium
```

## Agent Loop

Run the Codex orchestration loop with the local `codex-playwright` binary:

```bash
pnpm agent:loop
```

Each loop pass starts one fresh `codex-playwright exec` session, asks it to
execute one pending task from `.agent/prd.json` using
`.agent/iteration-prompt.md`, and stores run transcripts under `.agent/runs/`.

If the binary is installed under a different name or absolute path, set
`CODEX_BIN`:

```bash
CODEX_BIN=/path/to/codex-playwright pnpm agent:loop
```

Limit the number of spawned agents:

```bash
pnpm agent:loop -- --max-iterations 1
```

Preview the next selected task without spawning an agent:

```bash
pnpm agent:loop -- --dry-run
```

The loop uses `.agent/.loop.lock` to avoid concurrent runs in the same working
tree and stops if a spawned agent exits unsuccessfully or leaves task state
unchanged.

## Production Build

Build the app:

```bash
pnpm build
```

Start the built app:

```bash
pnpm start
```

Or bind the production server to the same explicit local address used by
agent validation:

```bash
pnpm exec next start -H 127.0.0.1 -p 3000
```

For production-style local validation, run `pnpm build` first, then start the
built app with `pnpm start` and open `http://localhost:3000`.
The same homepage and `/panels/[slug]` routes are available in both dev and
production local servers; only the start command changes.
