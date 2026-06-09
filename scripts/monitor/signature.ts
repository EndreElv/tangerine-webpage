/**
 * Error identity. The same logical production crash must always collapse to one
 * stable signature, or dedup and the per-signature circuit-breaker don't work.
 *
 * Pure — no network, no SDK — so it's unit-tested without any token.
 */
import { createHash } from 'node:crypto';

export interface ErrorEvent {
  source: 'vercel' | 'synthetic';
  /** e.g. 'pageerror', 'console.error', 'http_500', 'vercel_error'. */
  type: string;
  message: string;
  /** Path where it occurred, when known. */
  route?: string;
  /** Original payload, for the issue body. */
  raw?: unknown;
  occurredAt?: string;
}

/** Strip volatile bits so two instances of the same error normalize identically. */
export function normalizeMessage(message: string): string {
  return (message || '')
    .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, '<uuid>')
    .replace(/0x[0-9a-f]+/gi, '<hex>')
    .replace(/\b[0-9a-f]{16,}\b/gi, '<hash>')
    .replace(/\b\d{4}-\d{2}-\d{2}t[\d:.]+z?\b/gi, '<ts>')
    .replace(/:\d+:\d+/g, ':<pos>') // line:col
    .replace(/\b\d+\b/g, '<n>') // bare numbers
    .replace(/(https?:\/\/[^\s)]+)/gi, (u) => u.split('?')[0]) // drop query strings
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 300);
}

/** A stable 12-char signature for an error event. */
export function signatureOf(e: Pick<ErrorEvent, 'type' | 'message' | 'route'>): string {
  const basis = `${e.type}|${normalizeMessage(e.message)}|${e.route || ''}`;
  return createHash('sha256').update(basis).digest('hex').slice(0, 12);
}
