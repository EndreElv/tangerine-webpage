#!/usr/bin/env tsx
/**
 * Production monitor — step 4 of the self-healing loop. Detects prod errors,
 * groups them by signature, and (per the guard's decision) files / bumps /
 * escalates a Linear issue, which triggers Cursor.
 *
 * Safety: no-ops unless MONITOR_ENABLED=true AND a Linear token + team are set,
 * so merging this changes nothing until the human flips the switch. The guard
 * (guard.ts) enforces dedup, the per-signature attempt cap, and the global
 * circuit-breaker.
 */
import { signatureOf, type ErrorEvent } from './signature.ts';
import { decide, globalBreakerTripped } from './guard.ts';
import { syntheticErrors, vercelErrors } from './sources.ts';
import * as linear from './linear.ts';

const ENABLED = process.env.MONITOR_ENABLED === 'true';
const HAS_LINEAR = Boolean(process.env.LINEAR_API_KEY && process.env.LINEAR_TEAM_ID);
const DRY_RUN = process.env.DRY_RUN === '1';

async function main(): Promise<void> {
  if (DRY_RUN || !ENABLED || !HAS_LINEAR) {
    console.log(
      `monitor: inactive (MONITOR_ENABLED=${process.env.MONITOR_ENABLED ?? ''}, ` +
        `linear=${HAS_LINEAR}, dryRun=${DRY_RUN}) — no-op.`,
    );
    return;
  }

  // 1. Detect (both sources fail safe to []).
  const events: ErrorEvent[] = [...(await vercelErrors()), ...(await syntheticErrors())];

  // 2. Group by signature.
  const bySig = new Map<string, ErrorEvent[]>();
  for (const e of events) {
    const sig = signatureOf(e);
    const arr = bySig.get(sig) ?? [];
    arr.push(e);
    bySig.set(sig, arr);
  }

  if (bySig.size === 0) {
    console.log('monitor: no production errors detected.');
    return;
  }
  console.log(`monitor: ${events.length} event(s) across ${bySig.size} signature(s).`);

  // 3. Global circuit-breaker — a burst of distinct new errors is systemic.
  const recent = await linear.recentAutoIssueCount();
  if (globalBreakerTripped(recent)) {
    await linear.alertHalt(recent);
    return;
  }

  // 4. Per-signature decision.
  for (const [sig, group] of bySig) {
    const state = await linear.lookupSignature(sig);
    const decision = decide(state);
    console.log(`monitor: ${sig} (${group.length}×) → ${decision}`);
    if (decision === 'file') await linear.fileIssue(sig, group);
    else if (decision === 'bump') await linear.bumpIssue(sig, group);
    else if (decision === 'escalate') await linear.escalate(sig, group);
    // 'skip' → a human already owns this signature; do nothing.
  }
}

main().catch((err) => {
  console.error('monitor: fatal', err);
  process.exit(1);
});
