import { cx } from '../../lib/cx.js'

/**
 * The official OKS mark ("O·KS" lockup — ring O, solid red dot, K, S) rendered
 * inline, with the invented product wordmark beside it.
 * Marks use currentColor (driven from --app-fg-strong); the dot is always #ED0D11.
 */
export default function Logo({ onDark = false, showWordmark = true, className, markSize = 26 }) {
  return (
    <span
      className={cx('inline-flex items-center gap-2 select-none', className)}
      style={{ color: onDark ? '#F0E9E8' : 'var(--app-fg-strong)' }}
    >
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        role="img"
      >
        {/* O — ring */}
        <circle cx="14" cy="17" r="9" stroke="currentColor" strokeWidth="4" />
        {/* · — dot, always OKS red */}
        <circle cx="30" cy="17" r="3.4" fill="#ED0D11" />
        {/* K */}
        <path
          d="M6 33 v12 M6 39 l7 -6 M6.5 39 l7.5 6"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* S */}
        <path
          d="M28 34.5 c-4 -2.5 -9 -2 -9 2 c0 4 9 3 9 7 c0 4 -5 4.5 -9 2"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark && (
        <span
          className="text-[17px] font-semibold tracking-tight lowercase"
          style={{ color: onDark ? '#F0E9E8' : 'var(--app-fg-strong)' }}
        >
          dyloc
        </span>
      )}
    </span>
  )
}
