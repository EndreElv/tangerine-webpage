/**
 * The safety brain of the lights-out loop. With no human in the loop, these
 * rules are the only thing between a bad auto-fix and an infinite redeploy
 * spiral. Pure + total — every branch is unit-tested (tests/monitor-guard.ts).
 */

export type GuardDecision = 'file' | 'bump' | 'skip' | 'escalate';

export interface SignatureState {
  /** Open (not completed/canceled) Linear issues already tracking this signature. */
  openIssueCount: number;
  /** Whether an open issue for this signature is already flagged needs-human. */
  hasNeedsHuman: boolean;
  /** Total issues ever auto-filed for this signature (open + closed). */
  totalFiledForSignature: number;
}

export interface GuardConfig {
  /** After this many auto-fix cycles for one signature, stop and hand to a human. */
  perSignatureAttemptCap: number;
  /** Max brand-new auto-issues allowed per rolling hour before halting the run. */
  globalHourlyCap: number;
}

export const DEFAULT_GUARD: GuardConfig = {
  perSignatureAttemptCap: 2,
  globalHourlyCap: 3,
};

/**
 * What to do with one freshly-detected signature, given what Linear already
 * knows about it. (The global circuit-breaker is checked separately, once per
 * run — see globalBreakerTripped.)
 */
export function decide(state: SignatureState, cfg: GuardConfig = DEFAULT_GUARD): GuardDecision {
  // A human already took this one over — hands off.
  if (state.openIssueCount > 0 && state.hasNeedsHuman) return 'skip';
  // Already tracked and in progress — bump the existing issue, never duplicate.
  if (state.openIssueCount > 0) return 'bump';
  // No open issue, but we've already tried K times and it keeps coming back.
  // Stop auto-fixing and hand to a human. This is the loop-killer.
  if (state.totalFiledForSignature >= cfg.perSignatureAttemptCap) return 'escalate';
  // Fresh and under the cap — file it and let Cursor fix it.
  return 'file';
}

/**
 * Global circuit-breaker. A burst of distinct new auto-issues in a short window
 * is almost always systemic (a bad deploy, an outage, or the loop misbehaving)
 * — halt the whole run and alert rather than spawning a swarm of fixes.
 */
export function globalBreakerTripped(
  recentAutoIssueCount: number,
  cfg: GuardConfig = DEFAULT_GUARD,
): boolean {
  return recentAutoIssueCount >= cfg.globalHourlyCap;
}
