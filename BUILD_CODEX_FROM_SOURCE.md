# Build Codex from Source

This repository contains a locally modified build of the OpenAI Codex CLI.

## Clone the Repository

Clone the Codex source code:

git clone https://github.com/openai/codex.git
cd codex

## Requirements

Install the Rust toolchain:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
source "$HOME/.cargo/env"
```

Optionally install the recommended Rust components:

```bash
rustup component add rustfmt clippy
```

## Build Codex

Enter the Rust workspace:

```bash
cd codex-rs
```

Build the optimized release binary:

```bash
cargo build --release --bin codex
```

The resulting executable is located at:

```text
codex-rs/target/release/codex
```

Run it directly:

```bash
./target/release/codex
```

## Rebuild After Code Changes

After modifying Codex source files, including the macOS Seatbelt policy:

```text
codex-rs/sandboxing/src/seatbelt_base_policy.sbpl
```

run the same build command again:

```bash
cargo build --release --bin codex
```

Cargo automatically rebuilds only the affected components. Running `cargo clean` is normally unnecessary.

## Install a Local Command

Create a directory for local executables:

```bash
mkdir -p "$HOME/bin"
```

Create a symbolic link to the built binary:

```bash
ln -sfn \
  "$PWD/target/release/codex" \
  "$HOME/bin/codex-playwright"
```

Add `$HOME/bin` to your `PATH`:

```bash
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
rehash
```

Launch the custom build:

```bash
codex-playwright
```

## Verify the Symlink

Check where the command points:

```bash
readlink "$HOME/bin/codex-playwright"
```

Check that it is executable:

```bash
test -x "$HOME/bin/codex-playwright" && echo "Codex is executable"
```

## Development Build

For a faster, non-optimized development build:

```bash
cargo build --bin codex
```

The development executable is located at:

```text
codex-rs/target/debug/codex
```

## Update the Source

Fetch and rebase onto the latest upstream code:

```bash
git fetch origin
git rebase origin/main
```

Then rebuild:

```bash
cd codex-rs
cargo build --release --bin codex
```
