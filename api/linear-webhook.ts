// Linear → agent bridge (SCAFFOLD — not active until secrets + a Linear webhook
// are configured; see docs/plans/2026-06-06-001-feat-linear-agent-intake-plan.md).
//
// Vercel serves this as a serverless function at /api/linear-webhook alongside
// the static site. It verifies the Linear webhook signature, fires a GitHub
// repository_dispatch to run the coding agent, and acks within Linear's 10s
// window. The agent (agent.yml) opens a PR that flows through the existing,
// already-enforced gate chain — this bridge adds NO merge authority.

import crypto from 'node:crypto';

export const config = { api: { bodyParser: false } };

async function readRaw(req: any): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  return Buffer.concat(chunks).toString('utf8');
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).end();

  const secret = process.env.LINEAR_WEBHOOK_SECRET;
  const dispatchToken = process.env.GH_DISPATCH_TOKEN;
  if (!secret || !dispatchToken) return res.status(503).json({ error: 'intake not configured' });

  const raw = await readRaw(req);
  const sig = String(req.headers['linear-signature'] || '');
  const expected = crypto.createHmac('sha256', secret).update(raw).digest('hex');
  if (sig.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
    return res.status(401).json({ error: 'bad signature' });
  }

  const event = JSON.parse(raw);
  // Act only on an agent assignment/mention (AgentSessionEvent created/prompted).
  const isAgentTask = event?.type === 'AgentSessionEvent';
  if (!isAgentTask) return res.status(200).json({ ok: true, skipped: true });

  const issue = event?.agentSession?.issue ?? event?.data?.issue ?? {};
  // Fire the dispatch BEFORE acking — serverless may freeze after the response,
  // and the GitHub dispatch is well under the 10s budget.
  try {
    await fetch('https://api.github.com/repos/EndreElv/tangerine-webpage/dispatches', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${dispatchToken}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_type: 'linear-agent-task',
        client_payload: {
          issueId: issue.id,
          identifier: issue.identifier,
          title: issue.title,
          description: issue.description,
          url: issue.url,
        },
      }),
    });
  } catch (err) {
    console.error('repository_dispatch failed', err);
    return res.status(502).json({ error: 'dispatch failed' });
  }
  // TODO: also post a "on it" thought activity to the issue via the Linear API.
  return res.status(200).json({ ok: true, dispatched: true });
}
