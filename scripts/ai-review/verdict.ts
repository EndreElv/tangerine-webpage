/**
 * The hybrid verdict contract and its enforcement.
 *
 * The model returns a RawVerdict. The TEETH live here, in code — not in the
 * model: a "block" is honored only if it's high-confidence AND backed by a
 * verbatim quote that actually appears in the reviewed content. Anything else
 * is downgraded to "escalate". This is the single most important guard against
 * a non-deterministic reviewer hallucinating a merge-blocking failure.
 *
 * No Anthropic SDK import here on purpose — this module is pure and unit-tested
 * without an API key (see tests/ai-review-verdict.ts).
 */

export const VERDICTS = ['pass', 'block', 'escalate'] as const;
export type Verdict = (typeof VERDICTS)[number];

export interface Finding {
  severity: 'high' | 'medium' | 'low';
  location: string;
  /** A verbatim quote copied from the reviewed content. Required to block. */
  evidence: string;
  why: string;
  fix: string;
}

export interface RawVerdict {
  verdict: Verdict;
  /** Calibrated probability (0..1) that a "block" is correct. */
  confidence: number;
  summary: string;
  findings: Finding[];
}

export interface ResolvedVerdict extends RawVerdict {
  /** The verdict after applying the hybrid rules — this is what gates. */
  effectiveVerdict: Verdict;
  downgraded: boolean;
  downgradeReason?: string;
}

export const BLOCK_CONFIDENCE_THRESHOLD = 0.85;
/** Quotes shorter than this can't be trusted as real evidence of a violation. */
const MIN_EVIDENCE_LEN = 12;

const normalize = (s: string) => s.replace(/\s+/g, ' ').trim();

/** True only if `evidence` is a substantial, verbatim slice of `haystack`. */
export function evidenceIsGrounded(evidence: string, haystack: string): boolean {
  const needle = (evidence ?? '').trim();
  if (needle.length < MIN_EVIDENCE_LEN) return false;
  return normalize(haystack).includes(normalize(needle));
}

/**
 * Apply the hybrid rules. A "block" survives only with high confidence AND at
 * least one grounded-evidence finding; otherwise it's downgraded to "escalate"
 * (which routes to a human, never auto-fails the build on its own).
 */
export function resolveVerdict(raw: RawVerdict, reviewedContent: string): ResolvedVerdict {
  if (raw.verdict !== 'block') {
    return { ...raw, effectiveVerdict: raw.verdict, downgraded: false };
  }

  const grounded = (raw.findings ?? []).some((f) => evidenceIsGrounded(f.evidence, reviewedContent));
  const confident = raw.confidence >= BLOCK_CONFIDENCE_THRESHOLD;

  if (grounded && confident) {
    return { ...raw, effectiveVerdict: 'block', downgraded: false };
  }

  const downgradeReason = !grounded
    ? 'no finding carried a verbatim quote found in the changed content'
    : `confidence ${raw.confidence.toFixed(2)} < ${BLOCK_CONFIDENCE_THRESHOLD}`;

  return { ...raw, effectiveVerdict: 'escalate', downgraded: true, downgradeReason };
}

/** Map an effective verdict to a GitHub Checks API conclusion. */
export function checkConclusion(v: Verdict): 'success' | 'failure' | 'neutral' {
  switch (v) {
    case 'pass':
      return 'success';
    case 'block':
      return 'failure';
    case 'escalate':
      return 'neutral';
  }
}
