#!/usr/bin/env bash

set -euo pipefail

echo "==> Checking required files"

required_files=(
  "package.json"
  "tsconfig.json"
  "next.config.ts"
  "tailwind.config.ts"
  "postcss.config.mjs"
  ".env.example"
  "src/app/layout.tsx"
  "src/app/page.tsx"
  "src/lib/types.ts"
)

for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "ERROR: Missing protected file: $file"
    exit 1
  fi
done

echo "==> Installing dependencies"
npm install

echo "==> Running typecheck"
npm run typecheck

echo "==> Building application"
npm run build

if grep -q '"test"' package.json; then
  echo "==> Running tests"
  npm test
else
  echo "==> No test script found; skipping tests"
fi

echo "==> Integration verification passed"
