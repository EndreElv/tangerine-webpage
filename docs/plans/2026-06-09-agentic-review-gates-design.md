# Agentic review gates — design

**Date:** 2026-06-09
**Status:** approved, in implementation
**Branch:** `feat/agentic-review-gates`

## Goal

Make the CI/CD pipeline "agentic-development first" by adding **AI reviewers as
first-class gates**, alongside (not replacing) the existing deterministic gates.
The AI gates provide judgment the deterministic checks can't: SEO quality, code
quality, and brand voice — plus a deterministic language-coverage gate that
arms now and enforces en/es/ar parity once i18n lands.

## Decisions (locked)

| Decision | Choice |
|---|---|
| Center of gravity | Agentic **review gates**, additive to deterministic gates |
| Authority | **Hybrid** — auto-pass clear cases, block only on high-confidence + cited evidence, escalate the ambiguous middle to a human |
| Dimensions | **SEO**, **Language coverage (en/es/ar)**, **Code quality**, **Brand voice** |
| i18n | Infrastructure is a **separate, later track**; the coverage gate ships now and arms when locale files appear |
| Launch posture | **Advisory first**, promote each reviewer to a required check once calibrated (the visual-gate precedent) |
| Model | Claude **Sonnet 4.6** (`claude-sonnet-4-6`) for AI reviewers; language coverage uses no model |

## 1. Architecture — AI review without breaking secret-safety

The existing `ci.yml` runs on `pull_request` and holds **no secrets**, because it
executes agent-authored (untrusted) code. An LLM reviewer needs
`ANTHROPIC_API_KEY`, so it cannot live there. Solution: a **two-workflow split**,
consistent with the repo's existing event-driven workflows (`smoke.yml`,
`auto-merge.yml`, `rollback.yml`).

1. **`ci.yml`** (untrusted, unchanged) — builds the PR, uploads the `dist/`
   artifact. No secrets. Runs PR code.
2. **`ai-review.yml`** (trusted, new) — triggers on `workflow_run: [CI] completed`,
   runs in the **base-repo context** so it can hold the API key. It downloads the
   `dist/` artifact and reads the PR diff / changed source files via the GitHub
   API. It **never executes** PR code — it only *reads* built HTML, source text,
   and the diff. Reading is safe; running is not.

Rejected alternatives: `pull_request_target` (well-known footgun — one careless
checkout+build of PR head leaks the key); a separate GitHub App (more infra than
needed).

## 2. Reviewers + the hybrid verdict contract

Four gates, each a module under `scripts/ai-review/reviewers/`:

- **Language coverage** — *deterministic* (`tests/i18n-coverage.ts`), runs as a
  job in `ci.yml` (no API key needed). Parity is a key-diff, not an LLM
  judgment. Only the three AI reviewers require the trusted `ai-review.yml`
  split. See §6.
- **SEO**, **Code quality**, **Brand voice** — *AI* (Claude). Each gets a strict
  rubric and returns structured JSON.

**Verdict contract** (the model must return exactly this):

```json
{
  "verdict": "pass | block | escalate",
  "confidence": 0.0,
  "summary": "one-line rationale",
  "findings": [
    { "severity": "high|medium|low",
      "location": "file:line or page/section",
      "evidence": "verbatim quote from the changed content",
      "why": "what rule it violates",
      "fix": "concrete suggested change" }
  ]
}
```

**Rules enforced in code, not by the model** (`scripts/ai-review/verdict.ts`):

- A `block` is honored only if `confidence >= 0.85` **and** ≥1 finding carries a
  non-empty `evidence` quote that is actually present in the changed content.
  Otherwise it is **downgraded to `escalate`**. No evidence ⇒ never block. This
  is the single most important guard against hallucinated failures.
- `escalate` never fails the build on its own.

**Mapping to CI checks:**

| Verdict | Check run | Effect |
|---|---|---|
| `pass` | success | none |
| `block` | failure | blocks merge (once the reviewer is a required check) |
| `escalate` | neutral | adds `needs-human-review` label + requests CODEOWNER review; auto-merge cannot proceed until a human resolves |

## 3. Models, determinism, cost

- AI reviewers: model is the **`AI_REVIEW_MODEL`** repo variable, default
  **`claude-opus-4-8`** (Anthropic's guidance + the stronger code reviewer);
  set it to `claude-sonnet-4-6` for a cheaper tier. **No `temperature`** is sent
  — it's removed on Opus 4.8/4.7 and would 400; determinism comes from the
  rubric, the structured-output schema, and `effort`. Adaptive thinking is on;
  `effort` defaults to `high` (`AI_REVIEW_EFFORT=none` for Haiku, which has no
  effort param).
- Anti-flake guards: rubric + **mandatory verbatim evidence** — a "block" whose
  quote isn't found verbatim in the changed content is auto-downgraded to
  `escalate` (enforced in `verdict.ts`, not by the model); confidence threshold
  (0.85); **diff-scoped** (only changed files + the unified diff); prompt-cache
  the static system prompt + rubric.
- Idempotency: cache each verdict keyed by `(PR head SHA + reviewer name)` so
  re-runs are stable and nearly free.
- Cost: small per PR (changed files only, one mid-tier model, cached prompts).

## 4. Integration + promotion path

- `ai-review.yml` is the only place the API key exists.
- **Advisory launch:** the new checks post results but are **not** added to the
  required-status-check set in branch protection. They calibrate on real PRs.
- **Promotion:** once a reviewer's false-block rate is acceptable, add its check
  name to required status checks (docs/agent/pipeline-setup.md §1). Promote the
  high-precision reviewers (SEO, language coverage) first; brand voice and code
  quality after they've earned it.
- `auto-merge.yml` is unchanged — it already waits for the full required set to
  go green, so promoted AI gates participate automatically. An open
  `needs-human-review` escalation holds the merge.
- **Ownership:** no `CODEOWNERS` change needed — `ai-review.yml`,
  `scripts/ai-review/**`, and the tests already fall under the existing
  `/.github/`, `/scripts/`, and `/tests/` owned paths, so the gates stay outside
  the agent's autonomous path by construction. Branch-protection bypass list
  stays empty.

## 5. Testing + rollout

- Each AI reviewer ships with fixtures: a clean change (expect `pass`), a
  seeded-violation change (expect `block` with evidence), an ambiguous change
  (expect `escalate`).
- The deterministic language checker gets unit tests (missing key ⇒ fail; empty
  value ⇒ fail; no i18n dir ⇒ armed pass).
- An eval harness runs the rubrics against a small labeled set and reports the
  false-block rate; this is the gate for promoting a reviewer to required.
- Rollout order: (1) merge advisory gates; (2) calibrate ~10–20 PRs; (3) promote
  SEO + language coverage to required; (4) promote brand voice + code quality.

## 6. Forward i18n convention (for the coverage gate)

Translatable content will live as **`src/data/i18n/<locale>.json`** with an
identical key tree across locales. `REQUIRED_LOCALES = ['en', 'es', 'ar']`,
base = `en`. Until `src/data/i18n/` exists, the gate is **armed but a no-op
pass**. Once locale files exist it fails on: a non-en locale missing keys present
in en, any empty/blank leaf, an unexpected key not in en, or a missing required
locale file. A leaf identical to English in es/ar is a **warning** (likely
untranslated) — not a failure; translation *quality* (fluency, RTL correctness)
is a deferred AI reviewer, separate from coverage.

## Open / deferred

- AI translation-quality reviewer (needs real translations) — deferred with i18n.
- Route-level locale parity (vs data-file parity) — extension once routing exists.
- The runner's Anthropic SDK integration is written against the official
  `@anthropic-ai/sdk` (added as a devDependency); model id and tool-use/structured
  output usage follow the current Anthropic API reference.
