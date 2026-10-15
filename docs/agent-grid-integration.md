# Agent Grid 2026 Integration

This branch is the controlled integration target for the Agent Grid 2026 Club Hub prototype.

## Principles

1. Never overwrite the existing Club Hub backend configuration.
2. Preserve Git history; do not force-push or replace `main`.
3. Integrate changes in small, reviewable commits.
4. Treat Agent Grid output as a source of UI, UX and feature direction—not as an automatic replacement for the existing architecture.
5. Preserve database schemas, migrations, API contracts, authentication, environment structure and build tooling.

## Integration workflow

### 1. Export Agent Grid source

Use either:

- **ZIP export:** Download and extract the Agent Grid code.
- **Git export:** Clone the Agent Grid Git remote into a separate folder.

Do not copy files directly into this repository until they have been compared against `main`.

### 2. Create a comparison workspace

```bash
git clone https://github.com/webbanton5-sys/club-hub-public.git club-hub
cd club-hub
git checkout agent-grid-2026-integration

# From the parent folder, if using a ZIP export:
unzip ../agent-grid-export.zip -d ../agent-grid-export

# Or, if using an Agent Grid Git remote:
git clone '<AGENT_GRID_GIT_REMOTE_URL>' ../agent-grid-export
```

### 3. Compare before copying

Run a structural comparison first:

```bash
diff -rq ../agent-grid-export ./ --exclude=node_modules --exclude=.git --exclude=.next
```

Review differences in these areas before copying anything:

- `package.json`
- lockfiles
- TypeScript configuration
- Tailwind configuration
- database schema and migrations
- API routes
- authentication and middleware
- environment examples
- build scripts

### 4. Copy selectively

Copy only reviewed Agent Grid files. Prefer adding new files over replacing existing files.

For a ZIP export:

```bash
rsync -av --ignore-existing ../agent-grid-export/ ./
```

For files that genuinely need replacement, inspect the diff first and preserve every Club Hub-specific configuration.

### 5. Commit in logical units

```bash
git status
git add docs
git commit -m "docs: add Agent Grid integration guidance"

git add src/app
git commit -m "feat(ui): integrate reviewed Agent Grid screens"

git add src/lib src/components
git commit -m "feat(core): integrate reviewed Agent Grid shared logic"
```

Avoid one enormous `git add .` commit unless the export has been fully reviewed.

### 6. Verify

```bash
npm install
npm run typecheck
npm run build
npm test --if-present
```

The integration is not complete until the build succeeds and no protected configuration has been lost.

## Merge policy

- Merge `agent-grid-2026-integration` into `main` only through a pull request.
- Require a successful build before merging.
- Do not merge if database migrations, API contracts, authentication flows or environment variables are unclear.
- Keep `main` deployable at all times.
