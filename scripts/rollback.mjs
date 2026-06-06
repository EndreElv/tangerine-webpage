#!/usr/bin/env node
/**
 * Auto-rollback (U9). On post-deploy smoke failure, revert the offending commit
 * via a revert PR that flows through the normal gates + auto-merge (no branch-
 * protection bypass). Guards against loops with a circuit-breaker. Vercel
 * Instant Rollback is the documented manual fast fallback.
 *
 * Env: FAILED_SHA (the deployed commit that failed smoke), GH_TOKEN.
 */
import { execSync } from 'node:child_process';

const sh = (cmd) => execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'inherit'] }).trim();
const run = (cmd) => execSync(cmd, { stdio: 'inherit' });

const failed = process.env.FAILED_SHA;
if (!failed) {
  console.error('rollback: FAILED_SHA not set');
  process.exit(1);
}

// Loop guard 1: never auto-revert a revert.
const subject = sh(`git log -1 --format=%s ${failed}`);
if (/^Revert /i.test(subject)) {
  console.error('rollback: failed commit is itself a revert — halting and paging a human (not looping).');
  process.exit(1);
}

// Loop guard 2: circuit-breaker — too many reverts recently means the "prior
// good state" isn't recovering; stop and page a human.
const recentReverts = sh('git log --since="30 minutes ago" --format=%s')
  .split('\n')
  .filter((s) => /^Revert /i.test(s)).length;
if (recentReverts >= 2) {
  console.error(`rollback: circuit-breaker tripped (${recentReverts} reverts in 30 min) — halting, page a human.`);
  process.exit(1);
}

// Merge commits need a mainline parent for revert.
const parentCount = sh(`git rev-list --parents -n 1 ${failed}`).split(' ').length - 1;
const mflag = parentCount > 1 ? '-m 1' : '';

const short = failed.slice(0, 7);
const branch = `rollback/${short}`;

sh('git config user.name "tangerine-rollback-bot"');
sh('git config user.email "rollback-bot@users.noreply.github.com"');
run(`git checkout -b ${branch}`);
run(`git revert --no-edit ${mflag} ${failed}`);
run(`git push origin ${branch}`);

const body = `Automated rollback — post-deploy smoke failed for \`${failed}\`.\n\nReverting to the prior good state. This PR runs the normal gate chain and auto-merges on green. If it does not recover, the circuit-breaker will halt further auto-reverts; use Vercel Instant Rollback as the manual fast fallback (see docs/agent/pipeline-setup.md).`;
run(`gh pr create --base main --head ${branch} --title "Revert ${short} (failed post-deploy smoke)" --body ${JSON.stringify(body)}`);
try {
  run(`gh pr merge ${branch} --auto --squash`);
} catch {
  console.error('rollback: could not enable auto-merge; the revert PR is open for manual merge.');
}
console.log(`rollback: opened revert PR for ${failed}.`);
