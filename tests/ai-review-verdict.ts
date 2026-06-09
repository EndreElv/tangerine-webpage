/**
 * Unit checks for the hybrid verdict enforcement — the teeth of the AI gate.
 * No Anthropic API or key needed; this exercises pure logic in verdict.ts so CI
 * can prove the "block must be confident AND grounded in a verbatim quote" rule
 * before any model is ever called.
 */
import {
  resolveVerdict,
  evidenceIsGrounded,
  checkConclusion,
  type RawVerdict,
} from '../scripts/ai-review/verdict.ts';

const CONTENT =
  'The hero says: "Save 500% on everything, guaranteed forever." Then some other ordinary copy.';

let failures = 0;
function check(name: string, cond: boolean): void {
  if (cond) {
    console.log(`ok: ${name}`);
  } else {
    failures++;
    console.error(`FAIL: ${name}`);
  }
}

const block = (confidence: number, evidence: string): RawVerdict => ({
  verdict: 'block',
  confidence,
  summary: '',
  findings: [{ severity: 'high', location: 'hero', evidence, why: 'overpromise', fix: 'remove it' }],
});

// 1. High-confidence block with a quote that IS in the content → stays block.
check(
  'grounded high-confidence block stays block',
  resolveVerdict(block(0.95, 'Save 500% on everything, guaranteed forever.'), CONTENT)
    .effectiveVerdict === 'block',
);

// 2. Block whose quote is NOT in the content → downgraded to escalate (anti-hallucination).
check(
  'block without grounded evidence downgrades to escalate',
  resolveVerdict(block(0.99, 'a quote that does not appear anywhere'), CONTENT).effectiveVerdict ===
    'escalate',
);

// 3. Grounded but low-confidence block → downgraded to escalate.
check(
  'low-confidence block downgrades to escalate',
  resolveVerdict(block(0.5, 'Save 500% on everything, guaranteed forever.'), CONTENT)
    .effectiveVerdict === 'escalate',
);

// 4. pass / escalate pass through unchanged.
check(
  'pass stays pass',
  resolveVerdict({ verdict: 'pass', confidence: 1, summary: '', findings: [] }, CONTENT)
    .effectiveVerdict === 'pass',
);
check(
  'escalate stays escalate',
  resolveVerdict({ verdict: 'escalate', confidence: 0.3, summary: '', findings: [] }, CONTENT)
    .effectiveVerdict === 'escalate',
);

// 5. A downgrade is flagged so the workflow can explain it.
check('downgrade is flagged', resolveVerdict(block(0.4, 'nope'), CONTENT).downgraded === true);

// 6. Evidence grounding: too-short quotes are rejected; real substrings accepted.
check('short evidence is not grounded', !evidenceIsGrounded('500%', CONTENT));
check('real quote is grounded', evidenceIsGrounded('guaranteed forever', CONTENT));

// 7. Verdict → check-run conclusion mapping.
check(
  'conclusion mapping',
  checkConclusion('block') === 'failure' &&
    checkConclusion('escalate') === 'neutral' &&
    checkConclusion('pass') === 'success',
);

if (failures) {
  console.error(`\nai-review verdict: ${failures} check(s) FAILED`);
  process.exit(1);
}
console.log('\nai-review verdict: all checks passed');
