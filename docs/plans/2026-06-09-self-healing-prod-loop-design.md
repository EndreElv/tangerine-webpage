# Self-healing production loop — design

**Date:** 2026-06-09
**Status:** approved, monitor (step 4) in implementation
**Branch:** `feat/self-healing-monitor`

## Goal

A closed, **lights-out** loop:

```
Linear issue ──▶ Cursor fixes + opens PR ──▶ CI/CD gates ──▶ green ──▶ auto-deploy
     ▲                                                                      │
     └────────────── monitor detects a prod bug/crash ◀── prod ◀───────────┘
```

A human (or the monitor) files a Linear issue; Cursor fixes it and opens a PR;
the existing pipeline deploys on green; production is monitored; a new bug/crash
auto-files a Linear issue — closing the loop with no human in it.

## Scope — what this work builds

| Loop stage | Owner | Status |
|---|---|---|
| Linear issue → Cursor fix → PR | Cursor's Linear/GitHub integration | **External config** (human enables; not built here) |
| PR → gates → auto-merge → Vercel deploy → smoke → auto-rollback | existing pipeline | **Already built** |
| prod monitored → bug/crash → **auto-file Linear issue** | this work | **Built here: step 4** |

So this delivers **only step 4**: a production monitor that detects errors and
auto-files (or bumps / escalates) a Linear issue, which triggers Cursor.

## Detection sources (Vercel-native, no PostHog)

The site is static Astro on Vercel with no error-tracking SaaS, so:

1. **Scheduled synthetic** (`scripts/monitor/sources.ts → syntheticErrors`) — the
   reliable, primary signal. Playwright visits key prod routes and captures
   `pageerror` + `console.error` + HTTP ≥500. The only no-SaaS way to catch
   in-browser JS crashes real users hit.
2. **Vercel Runtime Logs** (`vercelErrors`) — secondary. Polls the project's
   recent logs for error-level entries. **The exact Vercel log endpoint must be
   validated against current Vercel docs** (it varies by plan); the function
   fails safe (returns `[]`) so a wrong endpoint can't break the loop.

## Error identity & dedup

`scripts/monitor/signature.ts` normalizes a message (strips uuids, hashes,
timestamps, line:col, bare numbers, URL queries) and hashes
`type | normalizedMessage | route` into a 12-char **signature**. The same
logical crash always collapses to one signature — this is what makes dedup and
the per-signature circuit-breaker work.

## Safety model (the load-bearing part of lights-out)

`scripts/monitor/guard.ts` is a pure, unit-tested decision function. Per detected
signature:

| Condition | Decision | Effect |
|---|---|---|
| Open issue exists + flagged `needs-human` | `skip` | A human owns it; do nothing |
| Open issue exists | `bump` | Comment on it; never duplicate |
| No open issue, filed ≥ K times before (default **K=2**) | `escalate` | File a `needs-human` issue, **do NOT trigger Cursor**, alert |
| No open issue, under caps | `file` | File issue + trigger Cursor |

Plus a **global circuit-breaker** (`globalBreakerTripped`): if more than
**N=3** auto-issues were created in the last hour, the whole run **halts** and
alerts — a spike is systemic, not three separate bugs.

Why this is enough for lights-out:
- **Dedup** prevents issue spam for one recurring crash.
- **Per-signature cap (K)** is the loop-killer: if Cursor's fix doesn't hold and
  the same crash returns, after K cycles it stops auto-fixing and hands to a
  human — directly mirroring `rollback.mjs`'s revert circuit-breaker.
- **Global cap (N)** stops a systemic spike from spawning a swarm of fixes.
- **Existing smoke + auto-rollback** already revert a bad fix that breaks a page;
  the per-signature cap stops the revert→error-returns→refile spiral.
- **Staleness:** detection is tied to the current prod deploy, so pre-fix errors
  aren't re-filed after a fix ships.

## The sink — Linear + Cursor trigger

`scripts/monitor/linear.ts` (Linear GraphQL). All auto-issues carry an
`auto:prod-error` label and a `[sig:<hash>]` title token (the dedup key). `file`
creates the issue and applies the **Cursor trigger** — a configurable label
(`CURSOR_TRIGGER_LABEL`) and/or assignee (`CURSOR_ASSIGNEE_ID`); how Cursor
actually wakes on a Linear issue is Cursor-side config the human owns.
**The Linear GraphQL shapes here are written to spec and must be validated
against the live TAN workspace before enabling.**

## Wiring

`.github/workflows/monitor.yml`: `schedule` (~15 min) + `deployment_status`
(post-deploy) + `workflow_dispatch`. Runs on `main` (trusted), so tokens are safe.
Runs `npm run monitor`.

`scripts/monitor/run.ts` orchestrates: detect → group by signature →
global-breaker check → per-signature decide → act. **It no-ops unless
`MONITOR_ENABLED=true` AND a Linear token is present** — so merging this does not
activate anything until the human flips the switch.

## Verified vs needs-validation

- **Verified locally:** `signature` normalization/stability and the full `guard`
  decision matrix (`tests/monitor-guard.ts`); the runner's no-op/dry-run path;
  workflow YAML.
- **Needs validation against live services (do before `MONITOR_ENABLED=true`):**
  the Vercel log endpoint, the Linear GraphQL payloads/filters against the TAN
  workspace, and Cursor's trigger mechanism.

## Activation (human-only)

1. Enable Cursor's Linear + GitHub integration; confirm how an issue triggers it
   (label vs assignee) and set `CURSOR_TRIGGER_LABEL` / `CURSOR_ASSIGNEE_ID`.
2. Set secrets: `LINEAR_API_KEY`, `VERCEL_TOKEN`; vars: `LINEAR_TEAM_ID` (TAN),
   `VERCEL_PROJECT_ID`, optional `MONITOR_URL` / `MONITOR_ROUTES`. Reuse
   `SLACK_WEBHOOK_URL` for breaker alerts.
3. Validate the Linear + Vercel calls (a dry hand-run), then set
   `MONITOR_ENABLED=true`.

## Deferred / parked

- **Docs-on-ship** (the user's other ask) — separate track, revisit after this.
- Replacing log polling with a Vercel **Log Drain** if volume grows.
