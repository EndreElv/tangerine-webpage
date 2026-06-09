# Agent-doc sync (docs-on-ship) — design

**Date:** 2026-06-09
**Status:** approved, in implementation
**Branch:** `feat/agent-doc-sync`

## Goal

Keep the **agent-facing documentation** accurate on every ship, so the next AI
agent (Cursor, the review gates, the monitor) works from a true map of the
codebase. When code ships that contradicts the docs, the docs are updated
automatically.

**Target docs:** `AGENTS.md` and `docs/agent/**` (the agent map + runbook). Not
site/help content, not a public changelog, not `docs/plans/**` (those are
historical design records — never auto-edited).

## Trigger & mechanism

`.github/workflows/agent-docs-sync.yml` runs on `push: main` (a ship — `main`
auto-deploys). It runs on trusted `main` code, so it is the place
`ANTHROPIC_API_KEY` lives (never in a `pull_request` job).

1. Compute the just-shipped diff (the pushed commit range).
2. **Guard** (`scripts/agent-docs/guard.ts`) decides whether to run at all.
3. Claude reads the diff + the current target docs and detects **drift**: does
   any statement in the docs become inaccurate or materially incomplete?
4. Apply only the returned edits, then — if any — open a follow-up
   `docs/sync-<sha>` PR that rides the gate chain and auto-merges on green.
5. No drift → no PR (no noise; most ships need no doc change).

## Conservative by contract

Claude returns, per target doc, either `"unchanged"` or targeted edits
`{ file, edits: [{ old, new }] }`. Edits are applied as **exact-string
replacements** and skipped if `old` is not found verbatim — so a hallucinated
edit is a no-op, not a corruption. The prompt restricts edits to **factual
drift** (new/renamed/removed routes, changed pipeline steps, moved files, new
conventions, changed commands) and forbids stylistic rewrites. Same
evidence-first discipline as the AI review gate.

## Loop safety

`shouldSync(changedPaths, commitSubject)` returns run/skip:

- **revert commit** (`^Revert `) → skip
- **sync bot's own commit** (`[docs-sync]` marker in subject) → skip
- **doc-only push** (every changed path is under `docs/` or is `AGENTS.md`) → skip
- otherwise (real code/config changed) → run

This stops a docs-sync PR's own merge from retriggering sync — mirroring
`rollback.mjs`'s "never revert a revert." Pure + unit-tested
(`tests/agent-doc-sync-guard.ts`).

**Inert by default:** `run.ts` no-ops unless `DOCS_SYNC_ENABLED=true` and a token
is present, so merging this activates nothing.

## Autonomy

Lights-out: the `docs/sync-<sha>` PR auto-merges on green (the target docs are
not CODEOWNER-owned). Consistent with the other tracks. **Option:** add
`AGENTS.md` + `/docs/agent/` to `CODEOWNERS` to require a human review of
agent-doc rewrites — recommended-ish, since these docs steer every future agent.

## Build

- `scripts/agent-docs/guard.ts` — pure run/skip + doc-path logic (tested).
- `scripts/agent-docs/run.ts` — orchestrator: gather diff + target docs → Claude
  (structured edits via `@anthropic-ai/sdk`) → apply exact-string edits → open PR
  via `gh`. No-ops unless enabled + token.
- `.github/workflows/agent-docs-sync.yml` — `push: main`, trusted, opens the PR.
- `tests/agent-doc-sync-guard.ts` — guard unit tests.

> `@anthropic-ai/sdk` is also added by the review-gates PR (#3); whichever merges
> second needs a trivial `npm install` to re-resolve `package-lock.json`.

## Verified vs activation

- **Verified locally:** the guard matrix + doc-path logic; the runner's
  no-op/dry-run path; workflow YAML.
- **Activation (human):** set secret `ANTHROPIC_API_KEY` (shared with the review
  gates) and variable `DOCS_SYNC_ENABLED=true`. The PR-open step uses the
  built-in `GITHUB_TOKEN`.
