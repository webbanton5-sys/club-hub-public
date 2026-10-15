# Protected paths

These files and areas must not be overwritten by the Agent Grid export without explicit review.

## Always protect

| Path | Reason |
|---|---|
| `package.json` | Existing dependencies and scripts must remain intact. |
| `package-lock.json` / `npm-shrinkwrap.json` | Dependency resolution must remain deterministic. |
| `tsconfig.json` | TypeScript paths and compiler settings must remain compatible. |
| `next.config.ts` | Next.js build and runtime configuration. |
| `tailwind.config.ts` | Club Hub design tokens and Tailwind setup. |
| `postcss.config.mjs` | CSS build pipeline. |
| `.env.example` | Required environment variable structure. |
| `.gitignore` | Repository hygiene and secret protection. |
| `src/lib/types.ts` | Existing Club Hub domain model. |

## Protect if present

| Path | Reason |
|---|---|
| `db/` | Database schema, migrations and seed data. |
| `prisma/` | Prisma schema, migrations and generated client configuration. |
| `drizzle/` | Drizzle migrations and schema definitions. |
| `migrations/` | Database migration history. |
| `src/app/api/` | API route handlers and backend contracts. |
| `src/app/routes/` | Backend route handlers, if present. |
| `src/middleware.ts` | Authentication, session and request middleware. |
| `src/lib/auth*` | Authentication and authorization logic. |
| `src/lib/db*` | Database clients and query helpers. |
| `scripts/` | Operational, migration and deployment scripts. |
| `tests/` or `__tests__/` | Existing test coverage. |

## Review before replacing

For any Agent Grid file that overlaps with the paths above:

1. Open both versions side by side.
2. Identify Club Hub-specific configuration.
3. Preserve existing exports, function signatures and API contracts.
4. Add Agent Grid functionality incrementally.
5. Record the decision in the pull request description.

## Never commit

- `.env`
- `.env.local`
- API keys
- database credentials
- OAuth secrets
- service-account files
- private keys
