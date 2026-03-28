#!/bin/bash
set -euo pipefail

# ── GitHub credentials ────────────────────────────────────────────────────────
if [ -n "${GITHUB_TOKEN:-}" ]; then
  printf 'https://yzash:%s@github.com\n' "$GITHUB_TOKEN" > ~/.git-credentials
  git config --global credential.helper store
  git config --global user.email "yash@devxlabs.ai"
  git config --global user.name "Yash"
  echo "✓ Git credentials configured"
else
  echo "⚠ GITHUB_TOKEN not set — git push will require manual auth"
fi

# ── Node dependencies ─────────────────────────────────────────────────────────
if [ "${CLAUDE_CODE_REMOTE:-}" = "true" ] && [ -f "${CLAUDE_PROJECT_DIR:-}/package.json" ]; then
  cd "$CLAUDE_PROJECT_DIR"
  npm install --prefer-offline --no-audit --no-fund
  echo "✓ npm dependencies installed"
fi
