export { clsx as cx } from 'clsx'

/** Deterministic person avatar — the template's only external runtime dependency.
 *  oks-ui <Avatar> shows an initials fallback if this URL fails to load. */
export function avatarUrl(seed) {
  const n = String(seed ?? '')
    .split('')
    .reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7)
  return `https://i.pravatar.cc/120?img=${(n % 70) + 1}`
}
