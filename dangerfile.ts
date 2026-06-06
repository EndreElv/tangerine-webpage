import { danger, fail } from 'danger';

// Blast-radius guard (U6/R7): hold risky changes for a human even when every
// other gate is green. Failures here are required-check failures, so an
// autonomous PR that trips one cannot auto-merge — it waits for a CODEOWNER.

const MAX_DELTA = 600;

const created = danger.git.created_files;
const modified = danger.git.modified_files;
const deleted = danger.git.deleted_files;
const all = [...created, ...modified, ...deleted];

const pr = danger.github?.pr;
const delta = pr ? pr.additions + pr.deletions : 0;

// 1) Oversized diff — normal content edits are small.
if (delta > MAX_DELTA) {
  fail(
    `Diff is ${delta} changed lines (limit ${MAX_DELTA}). Blast-radius hold: split into smaller PRs, or have a maintainer review and merge.`,
  );
}

// 2) Deletions of pages / data / public assets — how a page or disclaimer
//    silently disappears.
const protectedDeletes = deleted.filter((f) => /^(src\/pages\/|src\/data\/|public\/)/.test(f));
if (protectedDeletes.length) {
  fail(`Deletes protected files (hold for human review): ${protectedDeletes.join(', ')}`);
}

// 3) Dependency / build / gate-config changes — the agent has no business
//    touching these unsupervised; they are CODEOWNER-gated.
const guardedPattern =
  /^(package(-lock)?\.json|astro\.config\.|tsconfig\.json|playwright(\..*)?\.config\.|\.nvmrc|\.vale\.ini|dangerfile\.|CODEOWNERS)|^(\.github\/|vale\/)/;
const guarded = all.filter((f) => guardedPattern.test(f));
if (guarded.length) {
  fail(
    `Touches build/dependency/gate config (CODEOWNER review required): ${guarded.join(', ')}`,
  );
}
