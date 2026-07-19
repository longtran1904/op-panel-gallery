# op-panel-gallery

Manga Panel Gallery is a Next.js App Router webapp.

## Requirements

- Node.js 20.9 or newer
- pnpm

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
panel gallery.

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

## Agent Loop

Run the Codex orchestration loop:

```bash
pnpm agent:loop
```

Each loop pass starts one fresh `codex exec` session, asks it to execute one
pending task from `.agent/prd.json` using `.agent/iteration-prompt.md`, and
stores run transcripts under `.agent/runs/`.

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
