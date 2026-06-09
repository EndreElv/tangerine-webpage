# Pipeline activation runbook

The code/config for the autonomous delivery pipeline is in the repo. A few
steps require repo-admin / dashboard / secret access and **must be done by a
human** — they can't live in code. Do them in this order.

> **Ordering rule:** land + prove all gate jobs green on a real PR **before**
> enabling branch protection + auto-merge. Otherwise the gate-setup PRs
> themselves get blocked with no path to merge.

## 0. Prereqs
- The CI workflows (`.github/workflows/*.yml`), `CODEOWNERS`, gate configs, and
  tests are already in the repo on the feature branch. Merge them first.
- Set the Vercel project's Node version to **22** (match `.nvmrc`) to avoid
  build-time vs deploy-time drift.

## 1. Required status checks + branch protection (main)
Use **classic branch protection** (not rulesets — there's a documented
rulesets/auto-merge incompatibility).

- Settings → Branches → add rule for `main`:
  - Require a pull request before merging; **Required approvals: 0**.
  - **Require status checks to pass** — add these exact job names:
    `build-and-typecheck`, `content-gate`, `language-coverage`, `browser-gates`,
    `content-prose`, `blast-radius`. (Leave `visual` out until baselines exist —
    see §4.) The `ai-review: *` checks launch ADVISORY — keep them out of the
    required set until calibrated (see
    docs/plans/2026-06-09-agentic-review-gates-design.md §4).
  - Require review from **Code Owners** (so CODEOWNER-path PRs need approval).
  - Require branches up to date before merging (serializes merges).
  - Block force pushes and deletions.
  - **Bypass list: empty.** Do not add the agent identity.

## 2. Enable auto-merge
- Settings → General → Pull Requests → **Allow auto-merge**.
- `auto-merge.yml` then enables auto-merge on PRs once a check suite completes;
  GitHub merges when the full required set is green (+ CODEOWNER review if the PR
  touches an owned path).

## 3. Vercel deployment check + rollback fallback
- Vercel already auto-deploys `main`. To gate **promotion** on the smoke test:
  Project → Settings → Git → enable "Deployment Checks" and require the GitHub
  check produced by `smoke.yml` (Smoke (post-deploy)). Where the plan tier
  doesn't support pre-promotion gating, smoke + auto-rollback still run
  post-promotion.
- `rollback.yml` reverts via PR automatically on smoke failure. Manual fast
  fallback: `vercel rollback` (needs **Vercel Pro** to target older deploys, and
  a `VERCEL_TOKEN` secret if you script it; remember it freezes prod
  auto-assignment until `vercel promote`).

## 4. Visual-regression baselines
The `visual` job is `continue-on-error` until Linux baselines are committed
(macOS-generated baselines won't match CI).

```bash
# Generate baselines in the pinned Playwright Linux container, then commit them:
docker run --rm -v "$PWD":/work -w /work mcr.microsoft.com/playwright:v1.48.0-jammy \
  bash -c "npm ci && npm run build && npx playwright test tests/browser/visual.spec.ts --update-snapshots"
git add tests/browser/__screenshots__ && git commit -m "test: add visual baselines"
```
Then remove `continue-on-error: true` from the `visual` job and add `visual` to
the required checks in §1.

## 5. Secrets
- `ANTHROPIC_API_KEY` (required for AI review) — consumed ONLY by `ai-review.yml`
  (a `workflow_run` job that never executes PR code). Never add it to `ci.yml`.
  Optional repo *variables* `AI_REVIEW_MODEL` (default `claude-opus-4-8`) and
  `AI_REVIEW_EFFORT` (default `high`; `none` for Haiku) tune the reviewer.
- `SLACK_WEBHOOK_URL` (optional) — changelog/rollback notices to a channel.
- No `VERCEL_TOKEN` is needed for normal operation (deploy is Vercel's git
  integration; rollback is `git revert`). Add it only for the manual
  Vercel-rollback fallback.
- **Never expose deploy/monitoring secrets to `pull_request`-triggered jobs** —
  the PR gate jobs run agent-authored code. The current workflows honor this.

## 6. Vale (content-prose gate)
Uses `errata-ai/vale-action`. On first run, confirm it authenticates (uses the
built-in `GITHUB_TOKEN`) and that `--minAlertLevel=error` only blocks the
forbidden-claims rule. Tune `vale/styles/Tangerine/` as needed.

## 7. Verify the net end to end (once)
- Open a trivial content PR → watch the gate chain → confirm it auto-merges →
  deploys → smoke passes → changelog posts.
- Deliberately ship a bad deploy (e.g. a temporary broken page) on a throwaway
  check → confirm smoke fails → `rollback.yml` opens a revert PR → site recovers.
  Confirm the circuit-breaker halts after repeated reverts.

## Deferred: Linear intake (next track)
Non-coder self-service ("tag an agent on a Linear ticket → it opens a PR") is
**not** in this pipeline. It needs a Linear OAuth app (`actor=app`,
`app:assignable`/`app:mentionable`), a webhook receiver that acks within 10s and
runs the coding agent async, and agent-activity posting. Until it ships, the
pipeline protects any PR but doesn't yet give support/marketing a front door.
See the plan's KTD9 + origin requirements R1–R3/R13/R17.
