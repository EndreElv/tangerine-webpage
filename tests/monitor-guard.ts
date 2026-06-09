/**
 * Unit checks for the monitor's safety core — signature stability + the full
 * guard decision matrix + the global circuit-breaker. No network/token needed.
 * This is what proves the lights-out loop can't spiral.
 */
import { signatureOf, normalizeMessage } from '../scripts/monitor/signature.ts';
import { decide, globalBreakerTripped, type SignatureState } from '../scripts/monitor/guard.ts';

let failures = 0;
function check(name: string, cond: boolean): void {
  if (cond) console.log(`ok: ${name}`);
  else {
    failures++;
    console.error(`FAIL: ${name}`);
  }
}

// --- signature stability: volatile bits must not change identity ---
const a = signatureOf({ type: 'pageerror', message: "Cannot read 'x' of undefined at app.js:128:14", route: '/' });
const b = signatureOf({ type: 'pageerror', message: "Cannot read 'x' of undefined at app.js:902:7", route: '/' });
check('line:col does not change signature', a === b);

const u1 = signatureOf({ type: 'http_500', message: 'request 5f1c2e0a-1b2c-4d3e-9f8a-0b1c2d3e4f5a failed', route: '/x' });
const u2 = signatureOf({ type: 'http_500', message: 'request 11111111-2222-4333-8444-555555555555 failed', route: '/x' });
check('uuid does not change signature', u1 === u2);

check('different message → different signature',
  signatureOf({ type: 'pageerror', message: 'TypeError foo', route: '/' }) !==
    signatureOf({ type: 'pageerror', message: 'ReferenceError bar', route: '/' }));
check('different route → different signature',
  signatureOf({ type: 'pageerror', message: 'same', route: '/a' }) !==
    signatureOf({ type: 'pageerror', message: 'same', route: '/b' }));
check('normalizeMessage strips numbers', normalizeMessage('failed 42 times') === 'failed <n> times');

// --- guard decision matrix ---
const state = (o: Partial<SignatureState>): SignatureState => ({
  openIssueCount: 0,
  hasNeedsHuman: false,
  totalFiledForSignature: 0,
  ...o,
});

check('fresh signature → file', decide(state({})) === 'file');
check('open issue → bump (no duplicate)', decide(state({ openIssueCount: 1 })) === 'bump');
check('open + needs-human → skip', decide(state({ openIssueCount: 1, hasNeedsHuman: true })) === 'skip');
check('recurring past cap (K=2), no open issue → escalate', decide(state({ totalFiledForSignature: 2 })) === 'escalate');
check('filed once, no open issue → file (under cap)', decide(state({ totalFiledForSignature: 1 })) === 'file');

// --- global circuit-breaker ---
check('under global cap → not tripped', !globalBreakerTripped(2));
check('at global cap (3) → tripped', globalBreakerTripped(3));

if (failures) {
  console.error(`\nmonitor guard: ${failures} check(s) FAILED`);
  process.exit(1);
}
console.log('\nmonitor guard: all checks passed');
