/**
 * The loop guard for agent-doc sync. Decides whether a push to main should
 * trigger a sync, and classifies doc paths. Pure + unit-tested — this is what
 * stops a docs-sync PR's own merge from retriggering the sync forever.
 */

/** What the sync is allowed to edit (the agent map + runbook). */
export const EDIT_TARGETS = ['AGENTS.md', 'docs/agent/'] as const;

/** A path that *is* documentation (so changing it isn't "new work" to document). */
export function isDoc(path: string): boolean {
  return path === 'AGENTS.md' || path.startsWith('docs/');
}

export interface SyncDecision {
  run: boolean;
  reason: string;
}

/**
 * Run a sync only when real code/config shipped. Skip reverts, the sync bot's
 * own commits, and doc-only pushes — otherwise the loop spins.
 */
export function shouldSync(changedPaths: string[], commitSubject: string): SyncDecision {
  if (/^Revert /i.test(commitSubject)) return { run: false, reason: 'revert commit' };
  if (/\[docs-sync\]/i.test(commitSubject)) return { run: false, reason: 'docs-sync bot commit' };
  const nonDoc = changedPaths.filter((p) => !isDoc(p));
  if (nonDoc.length === 0) return { run: false, reason: 'doc-only change' };
  return { run: true, reason: `${nonDoc.length} non-doc file(s) changed` };
}

/** Whether a path is one the sync may edit (narrower than isDoc — excludes docs/plans). */
export function isEditTarget(path: string): boolean {
  return EDIT_TARGETS.some((t) => (t.endsWith('/') ? path.startsWith(t) : path === t));
}
