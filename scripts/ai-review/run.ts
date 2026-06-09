#!/usr/bin/env tsx
/**
 * AI review runner. For each reviewer (SEO, code quality, brand voice) it sends
 * the changed content to Claude under a strict verdict contract, applies the
 * hybrid block/escalate rules in code (verdict.ts), and writes a results file
 * the workflow turns into one GitHub check-run per reviewer.
 *
 * Runs ONLY in the trusted ai-review.yml workflow (workflow_run) — the one place
 * ANTHROPIC_API_KEY exists. It reads the diff + changed file contents; it never
 * checks out or executes PR-authored code. That is why the key is safe here and
 * is absent from ci.yml (which runs untrusted PR code).
 *
 * Input  (AI_REVIEW_INPUT,  default ai-review-input.json):
 *   { prNumber, headSha, files: [{ path, status, content }], diff }
 * Output (AI_REVIEW_OUTPUT, default ai-review-results.json):
 *   [{ key, title, headSha, raw, resolved }]
 *
 * No input file / no applicable files / DRY_RUN=1 → no API call, exits 0.
 * The runner itself always exits 0 (advisory); the workflow maps each resolved
 * verdict to a check-run conclusion (pass=success, block=failure, escalate=neutral).
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import Anthropic from '@anthropic-ai/sdk';
import { REVIEWERS } from './reviewers.ts';
import { resolveVerdict, type RawVerdict, type ResolvedVerdict } from './verdict.ts';

const MODEL = process.env.AI_REVIEW_MODEL || 'claude-opus-4-8';
const EFFORT = process.env.AI_REVIEW_EFFORT || 'high'; // 'none' to omit (e.g. Haiku has no effort)
const INPUT = process.env.AI_REVIEW_INPUT || 'ai-review-input.json';
const OUTPUT = process.env.AI_REVIEW_OUTPUT || 'ai-review-results.json';
const MAX_CONTENT_CHARS = 200_000; // keep a single reviewer request bounded

interface ChangedFile {
  path: string;
  status: string;
  content: string;
}
interface ReviewInput {
  prNumber?: number;
  headSha?: string;
  files: ChangedFile[];
  diff?: string;
}
interface ReviewResult {
  key: string;
  title: string;
  headSha?: string;
  raw: RawVerdict;
  resolved: ResolvedVerdict;
}

// Structured-output schema — the API constrains the model to exactly this shape.
const VERDICT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    verdict: { type: 'string', enum: ['pass', 'block', 'escalate'] },
    confidence: { type: 'number' },
    summary: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          severity: { type: 'string', enum: ['high', 'medium', 'low'] },
          location: { type: 'string' },
          evidence: { type: 'string' },
          why: { type: 'string' },
          fix: { type: 'string' },
        },
        required: ['severity', 'location', 'evidence', 'why', 'fix'],
      },
    },
  },
  required: ['verdict', 'confidence', 'summary', 'findings'],
};

function loadInput(): ReviewInput {
  if (!existsSync(INPUT)) return { files: [] };
  return JSON.parse(readFileSync(INPUT, 'utf8')) as ReviewInput;
}

function buildContent(files: ChangedFile[], diff?: string): string {
  const parts = files.map((f) => `===== FILE: ${f.path} (${f.status}) =====\n${f.content}`);
  if (diff) parts.push(`===== UNIFIED DIFF =====\n${diff}`);
  return parts.join('\n\n').slice(0, MAX_CONTENT_CHARS);
}

async function reviewOne(client: Anthropic, system: string, content: string): Promise<RawVerdict> {
  const output_config: Record<string, unknown> = {
    format: { type: 'json_schema', schema: VERDICT_SCHEMA },
  };
  if (EFFORT !== 'none') output_config.effort = EFFORT;

  // Static rubric in `system` (cached across PRs); volatile content in the user turn.
  const res = await client.messages.create({
    model: MODEL,
    max_tokens: 16000,
    thinking: { type: 'adaptive' },
    output_config,
    system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
    messages: [
      {
        role: 'user',
        content: `Review the following changed content for your dimension and return the verdict object.\n\n${content}`,
      },
    ],
  } as unknown as Anthropic.MessageCreateParamsNonStreaming);

  const text = res.content
    .filter((b): b is Anthropic.TextBlock => b.type === 'text')
    .map((b) => b.text)
    .join('')
    .trim();
  return JSON.parse(text) as RawVerdict;
}

async function main(): Promise<void> {
  const input = loadInput();
  const results: ReviewResult[] = [];

  if (process.env.DRY_RUN === '1' || input.files.length === 0) {
    console.log('ai-review: no changed files (or DRY_RUN) — nothing to review.');
    writeFileSync(OUTPUT, JSON.stringify(results, null, 2));
    return;
  }

  const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

  for (const reviewer of REVIEWERS) {
    const files = input.files.filter((f) => reviewer.appliesTo(f.path));
    if (files.length === 0) {
      console.log(`ai-review[${reviewer.key}]: no applicable files — skipped.`);
      continue;
    }
    const content = buildContent(files, input.diff);

    let raw: RawVerdict;
    try {
      raw = await reviewOne(client, reviewer.system, content);
    } catch (err) {
      // A reviewer that errors must not fail the gate or fabricate a block — escalate.
      const message = err instanceof Error ? err.message : String(err);
      console.error(`ai-review[${reviewer.key}]: error — escalating.`, message);
      raw = { verdict: 'escalate', confidence: 0, summary: `Reviewer errored: ${message}`, findings: [] };
    }

    const resolved = resolveVerdict(raw, content);
    results.push({ key: reviewer.key, title: reviewer.title, headSha: input.headSha, raw, resolved });
    console.log(
      `ai-review[${reviewer.key}]: ${resolved.effectiveVerdict}` +
        (resolved.downgraded ? ` (downgraded from block: ${resolved.downgradeReason})` : ''),
    );
  }

  writeFileSync(OUTPUT, JSON.stringify(results, null, 2));
  console.log(`ai-review: wrote ${results.length} result(s) to ${OUTPUT}.`);
}

main().catch((err) => {
  console.error('ai-review: fatal', err);
  process.exit(1);
});
