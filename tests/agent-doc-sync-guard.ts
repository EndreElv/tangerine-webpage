/**
 * Unit checks for the agent-doc-sync loop guard — the logic that keeps a
 * docs-sync PR from retriggering itself. No network/token needed.
 */
import { shouldSync, isDoc, isEditTarget } from '../scripts/agent-docs/guard.ts';

let failures = 0;
function check(name: string, cond: boolean): void {
  if (cond) console.log(`ok: ${name}`);
  else {
    failures++;
    console.error(`FAIL: ${name}`);
  }
}

// shouldSync — the run/skip matrix
check('code change → run', shouldSync(['src/pages/index.astro'], 'feat: new hero').run === true);
check('mixed code + doc → run', shouldSync(['src/x.ts', 'AGENTS.md'], 'feat: x').run === true);
check('doc-only (AGENTS.md + docs/) → skip', shouldSync(['AGENTS.md', 'docs/agent/content-map.md'], 'docs: tidy').run === false);
check('revert → skip', shouldSync(['src/x.ts'], 'Revert "feat: x"').run === false);
check('docs-sync bot commit → skip', shouldSync(['AGENTS.md'], 'docs: sync agent docs [docs-sync] for a1b2c3d').run === false);
check('config change → run', shouldSync(['.github/workflows/ci.yml'], 'ci: tweak gate').run === true);

// isDoc
check('AGENTS.md is a doc', isDoc('AGENTS.md'));
check('docs/ path is a doc', isDoc('docs/agent/pipeline-setup.md'));
check('src path is not a doc', !isDoc('src/pages/index.astro'));

// isEditTarget — narrower than isDoc (design docs are off-limits)
check('AGENTS.md is an edit target', isEditTarget('AGENTS.md'));
check('docs/agent/* is an edit target', isEditTarget('docs/agent/content-map.md'));
check('docs/plans/* is NOT an edit target', !isEditTarget('docs/plans/2026-06-09-foo.md'));

if (failures) {
  console.error(`\nagent-doc-sync guard: ${failures} check(s) FAILED`);
  process.exit(1);
}
console.log('\nagent-doc-sync guard: all checks passed');
