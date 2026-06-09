/**
 * Linear sink (GraphQL). Files / bumps / escalates auto-issues and applies the
 * Cursor trigger. All auto-issues carry the `auto:prod-error` label and a
 * `[sig:<hash>]` title token (the dedup key).
 *
 * Validated against the live TAN ("Tangerine") workspace: terminal status types
 * are completed/canceled (the dedup filter), the existing `Bug` label is reused,
 * and the Cursor trigger is assignment to the Cursor agent user
 * (CURSOR_ASSIGNEE_ID). Ids come from env (LINEAR_TEAM_ID etc.), never hardcoded.
 */
import type { ErrorEvent } from './signature.ts';
import { DEFAULT_GUARD } from './guard.ts';

const API = 'https://api.linear.app/graphql';
const TEAM_ID = process.env.LINEAR_TEAM_ID || '';
const AUTO_LABEL = process.env.MONITOR_LABEL || 'auto:prod-error';
const NEEDS_HUMAN = 'needs-human';
const BUG_LABEL = 'Bug'; // existing TAN convention for code-touching defects
const CURSOR_LABEL = process.env.CURSOR_TRIGGER_LABEL || ''; // optional; trigger is normally the assignee
const CURSOR_ASSIGNEE = process.env.CURSOR_ASSIGNEE_ID || '';

async function gql<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: process.env.LINEAR_API_KEY as string },
    body: JSON.stringify({ query, variables }),
  });
  const json = (await res.json()) as { data?: T; errors?: unknown };
  if (json.errors) throw new Error(`Linear API: ${JSON.stringify(json.errors)}`);
  return json.data as T;
}

const labelCache = new Map<string, string>();
async function labelId(name: string): Promise<string> {
  if (!name) return '';
  const cached = labelCache.get(name);
  if (cached) return cached;
  const q = await gql<{ issueLabels: { nodes: { id: string }[] } }>(
    `query($n:String!){ issueLabels(filter:{ name:{ eq:$n } }, first:1){ nodes{ id } } }`,
    { n: name },
  );
  let id = q.issueLabels.nodes[0]?.id;
  if (!id) {
    const c = await gql<{ issueLabelCreate: { issueLabel: { id: string } } }>(
      `mutation($n:String!,$t:String){ issueLabelCreate(input:{ name:$n, teamId:$t }){ issueLabel{ id } } }`,
      { n: name, t: TEAM_ID || null },
    );
    id = c.issueLabelCreate.issueLabel.id;
  }
  labelCache.set(name, id);
  return id;
}

function title(sig: string, group: ErrorEvent[]): string {
  const e = group[0];
  return `[sig:${sig}] ${e.type}: ${e.message.slice(0, 80)}${e.route ? ` (${e.route})` : ''}`;
}

function body(sig: string, group: ErrorEvent[]): string {
  const e = group[0];
  const sha = process.env.DEPLOY_SHA || process.env.GITHUB_SHA || 'unknown';
  return [
    'Auto-filed by the production monitor.',
    '',
    `- **Signature:** \`${sig}\` (keep the \`sig:${sig}\` token in the title — it is the dedup key)`,
    `- **Type:** ${e.type}`,
    `- **Source:** ${e.source}`,
    `- **Route:** ${e.route || 'n/a'}`,
    `- **Occurrences this run:** ${group.length}`,
    `- **Prod deploy:** \`${sha}\``,
    '',
    '### Message',
    '```',
    e.message.slice(0, 1000),
    '```',
    '',
    '_Fix this and open a PR; the pipeline deploys on green._',
  ].join('\n');
}

export interface SignatureState {
  openIssueCount: number;
  hasNeedsHuman: boolean;
  totalFiledForSignature: number;
}

export async function lookupSignature(sig: string): Promise<SignatureState> {
  const d = await gql<{
    issues: { nodes: { state: { type: string }; labels: { nodes: { name: string }[] } }[] };
  }>(
    `query($q:String!){ issues(filter:{ title:{ contains:$q } }, first:50){ nodes{ state{ type } labels{ nodes{ name } } } } }`,
    { q: `sig:${sig}` },
  );
  const nodes = d.issues.nodes;
  const open = nodes.filter((n) => !['completed', 'canceled'].includes(n.state?.type));
  return {
    openIssueCount: open.length,
    hasNeedsHuman: open.some((n) => n.labels.nodes.some((l) => l.name === NEEDS_HUMAN)),
    totalFiledForSignature: nodes.length,
  };
}

/** Count distinct auto-issues created in the last hour (the global breaker input). */
export async function recentAutoIssueCount(): Promise<number> {
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const d = await gql<{ issues: { nodes: { id: string }[] } }>(
    `query($n:String!,$s:DateTimeOrDuration!){ issues(filter:{ labels:{ name:{ eq:$n } }, createdAt:{ gt:$s } }, first:50){ nodes{ id } } }`,
    { n: AUTO_LABEL, s: since },
  );
  return d.issues.nodes.length;
}

export async function fileIssue(sig: string, group: ErrorEvent[]): Promise<void> {
  const labelIds = [await labelId(AUTO_LABEL), await labelId(BUG_LABEL)];
  if (CURSOR_LABEL) labelIds.push(await labelId(CURSOR_LABEL)); // optional Cursor trigger (label)
  const input: Record<string, unknown> = {
    teamId: TEAM_ID,
    title: title(sig, group),
    description: body(sig, group),
    labelIds: labelIds.filter(Boolean),
    priority: 2, // High
  };
  if (CURSOR_ASSIGNEE) input.assigneeId = CURSOR_ASSIGNEE; // Cursor trigger (assignee)
  const d = await gql<{ issueCreate: { issue: { identifier: string; url: string } } }>(
    `mutation($i:IssueCreateInput!){ issueCreate(input:$i){ issue{ identifier url } } }`,
    { i: input },
  );
  console.log(`monitor: filed ${d.issueCreate.issue.identifier} → ${d.issueCreate.issue.url}`);
}

export async function bumpIssue(sig: string, group: ErrorEvent[]): Promise<void> {
  const d = await gql<{ issues: { nodes: { id: string }[] } }>(
    `query($q:String!){ issues(filter:{ title:{ contains:$q }, state:{ type:{ nin:["completed","canceled"] } } }, first:1){ nodes{ id } } }`,
    { q: `sig:${sig}` },
  );
  const id = d.issues.nodes[0]?.id;
  if (!id) return;
  await gql(
    `mutation($i:String!,$b:String!){ commentCreate(input:{ issueId:$i, body:$b }){ success } }`,
    { i: id, b: `Still occurring — ${group.length} more occurrence(s) at ${new Date().toISOString()}.` },
  );
  console.log(`monitor: bumped existing issue for ${sig}`);
}

export async function escalate(sig: string, group: ErrorEvent[]): Promise<void> {
  const labelIds = [await labelId(AUTO_LABEL), await labelId(NEEDS_HUMAN), await labelId(BUG_LABEL)].filter(Boolean);
  const input = {
    teamId: TEAM_ID,
    title: `[sig:${sig}] RECURRING — needs human (${group[0].type})`,
    description:
      `${body(sig, group)}\n\n**Auto-fix attempts exhausted** — this signature has been filed ` +
      `${DEFAULT_GUARD.perSignatureAttemptCap}+ times and keeps recurring, so the loop stopped ` +
      `auto-fixing it. A human should take over. Cursor was NOT triggered.`,
    labelIds,
    priority: 1, // Urgent
  };
  await gql(`mutation($i:IssueCreateInput!){ issueCreate(input:$i){ issue{ identifier } } }`, { i: input });
  await alert(
    `:rotating_light: prod monitor: signature \`${sig}\` keeps recurring after auto-fix attempts — escalated to a human (Cursor not triggered).`,
  );
  console.log(`monitor: escalated ${sig} to a human`);
}

export async function alertHalt(recentCount: number): Promise<void> {
  await alert(
    `:rotating_light: prod monitor: global circuit-breaker tripped — ${recentCount} auto-issues in the last hour. ` +
      `Halting auto-filing this run; investigate (likely a bad deploy or a misbehaving loop).`,
  );
  console.error(`monitor: HALT — ${recentCount} auto-issues in the last hour.`);
}

async function alert(text: string): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) {
    console.warn(`monitor alert (no SLACK_WEBHOOK_URL): ${text}`);
    return;
  }
  await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ text }),
  }).catch(() => {});
}
