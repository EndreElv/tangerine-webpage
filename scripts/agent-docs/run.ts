#!/usr/bin/env tsx
/**
 * Agent-doc sync — docs-on-ship. On a push to main, detect whether the shipped
 * code makes the agent-facing docs (AGENTS.md, docs/agent/**) inaccurate, and if
 * so open a follow-up PR that updates them.
 *
 * Runs on trusted `main` (post-merge), so ANTHROPIC_API_KEY lives here. No-ops
 * unless DOCS_SYNC_ENABLED=true and a token is present, so merging activates
 * nothing. The guard (guard.ts) stops a docs-sync PR from retriggering itself.
 *
 * PR-trigger note: the docs PR is opened with GH_TOKEN. Use a bot PAT
 * (DOCS_BOT_TOKEN) so the PR triggers the gate chain + auto-merge — PRs opened
 * with the default GITHUB_TOKEN do not trigger other workflows.
 */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { shouldSync, isEditTarget } from './guard.ts';

const ENABLED = process.env.DOCS_SYNC_ENABLED === 'true';
const HAS_TOKEN = Boolean(process.env.ANTHROPIC_API_KEY);
const DRY_RUN = process.env.DRY_RUN === '1';
const MODEL = process.env.DOCS_SYNC_MODEL || 'claude-opus-4-8';
const BEFORE = process.env.BEFORE_SHA || '';
const AFTER = process.env.AFTER_SHA || 'HEAD';

const sh = (cmd: string): string => execSync(cmd, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }).trim();

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    changes: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          file: { type: 'string' },
          edits: {
            type: 'array',
            items: {
              type: 'object',
              additionalProperties: false,
              properties: {
                old: { type: 'string' },
                new: { type: 'string' },
                why: { type: 'string' },
              },
              required: ['old', 'new', 'why'],
            },
          },
        },
        required: ['file', 'edits'],
      },
    },
  },
  required: ['changes'],
};

const SYSTEM = `
You keep a repository's AGENT-FACING docs accurate after code ships. You are given
the shipped diff and the current contents of the agent docs (AGENTS.md, docs/agent/*).

Return ONLY structured edits. Rules:
- Edit a doc ONLY where the diff makes an existing statement factually wrong or
  omits something material an agent must know: new/renamed/removed routes, changed
  pipeline steps or commands, moved files, new conventions, changed gate names.
- Each edit's "old" MUST be an EXACT substring copied verbatim from the current
  doc (it is applied by exact string replacement; a non-matching "old" is dropped).
- Make the smallest edit that restores accuracy. Do NOT restyle, reword, reorder,
  or "improve" prose. If nothing is now inaccurate, return { "changes": [] }.
- Never invent routes, files, or behavior not present in the diff.
`.trim();

function targetDocFiles(): string[] {
  const out: string[] = [];
  if (existsSync('AGENTS.md')) out.push('AGENTS.md');
  if (existsSync('docs/agent'))
    for (const f of readdirSync('docs/agent')) if (f.endsWith('.md')) out.push(join('docs/agent', f));
  return out;
}

async function main(): Promise<void> {
  if (DRY_RUN || !ENABLED || !HAS_TOKEN) {
    console.log(`docs-sync: inactive (DOCS_SYNC_ENABLED=${process.env.DOCS_SYNC_ENABLED ?? ''}, token=${HAS_TOKEN}, dryRun=${DRY_RUN}) — no-op.`);
    return;
  }

  const range = BEFORE && !/^0+$/.test(BEFORE) ? `${BEFORE}..${AFTER}` : `${AFTER}~1..${AFTER}`;
  const subject = sh(`git log -1 --format=%s ${AFTER}`);
  const changedPaths = sh(`git diff --name-only ${range}`).split('\n').filter(Boolean);

  const decision = shouldSync(changedPaths, subject);
  console.log(`docs-sync: ${decision.run ? 'run' : 'skip'} — ${decision.reason}`);
  if (!decision.run) return;

  // The code diff (exclude docs themselves) — this is what we check the docs against.
  const diff = sh(`git diff ${range} -- . ':(exclude)docs/**' ':(exclude)AGENTS.md'`).slice(0, 120000);
  const targets = targetDocFiles();
  if (targets.length === 0) {
    console.log('docs-sync: no target docs found.');
    return;
  }
  const docsBlob = targets.map((f) => `===== ${f} =====\n${readFileSync(f, 'utf8')}`).join('\n\n');

  const client = new Anthropic();
  const res = await client.messages.create({
    model: MODEL,
    max_tokens: 16000,
    thinking: { type: 'adaptive' },
    output_config: { effort: process.env.DOCS_SYNC_EFFORT || 'high', format: { type: 'json_schema', schema: SCHEMA } },
    system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
    messages: [
      {
        role: 'user',
        content: `## Shipped diff\n\n${diff}\n\n## Current agent docs\n\n${docsBlob}`,
      },
    ],
  } as unknown as Anthropic.MessageCreateParamsNonStreaming);

  const text = res.content
    .filter((b): b is Anthropic.TextBlock => b.type === 'text')
    .map((b) => b.text)
    .join('')
    .trim();
  const parsed = JSON.parse(text) as { changes: Array<{ file: string; edits: Array<{ old: string; new: string }> }> };

  const changedFiles: string[] = [];
  for (const change of parsed.changes ?? []) {
    if (!isEditTarget(change.file) || !existsSync(change.file)) continue; // never edit off-target/missing files
    let content = readFileSync(change.file, 'utf8');
    let applied = 0;
    for (const e of change.edits ?? []) {
      if (e.old && content.includes(e.old)) {
        content = content.replace(e.old, e.new);
        applied++;
      }
    }
    if (applied > 0) {
      writeFileSync(change.file, content);
      changedFiles.push(change.file);
      console.log(`docs-sync: applied ${applied} edit(s) to ${change.file}`);
    }
  }

  if (changedFiles.length === 0) {
    console.log('docs-sync: no drift — agent docs already accurate.');
    return;
  }

  const short = sh(`git rev-parse --short ${AFTER}`);
  const branch = `docs/sync-${short}`;
  sh('git config user.name "tangerine-docs-bot"');
  sh('git config user.email "docs-bot@users.noreply.github.com"');
  sh(`git checkout -b ${branch}`);
  sh(`git add ${changedFiles.map((f) => JSON.stringify(f)).join(' ')}`);
  sh(`git commit -m "docs: sync agent docs [docs-sync] for ${short}"`);
  sh(`git push origin ${branch}`);

  const body =
    `Automated agent-doc sync after \`${short}\` shipped.\n\n` +
    `Updated to match what shipped: ${changedFiles.join(', ')}.\n\n` +
    `Conservative, evidence-based edits only (exact-string patches against the shipped diff). ` +
    `Auto-merges on green.`;
  execSync(`gh pr create --base main --head ${branch} --title "docs: sync agent docs for ${short}" --body ${JSON.stringify(body)}`, {
    stdio: 'inherit',
  });
  try {
    execSync(`gh pr merge ${branch} --auto --squash`, { stdio: 'inherit' });
  } catch {
    console.error('docs-sync: could not enable auto-merge; PR is open for manual merge.');
  }
  console.log(`docs-sync: opened ${branch}.`);
}

main().catch((err) => {
  console.error('docs-sync: fatal', err);
  process.exit(1);
});
