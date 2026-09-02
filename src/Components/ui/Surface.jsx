import { cx } from '../../lib/cx.js'

/** The card. Composed from a plain element + --app-* tokens (oks-ui Card's
 *  default shadow/border don't survive our tokenised dark theme cleanly). */
export function Surface({ as: As = 'div', className, children, ...rest }) {
  return (
    <As className={cx('dyloc-card', className)} {...rest}>
      {children}
    </As>
  )
}

export function CardHeader({ title, subtitle, actions, divider = false, className }) {
  return (
    <div
      className={cx(
        'flex items-start justify-between gap-3 px-5 pt-5 pb-3',
        divider && 'border-b',
        className,
      )}
      style={divider ? { borderColor: 'var(--app-border)' } : undefined}
    >
      <div className="min-w-0">
        {title && (
          <h3
            className="text-[14px] font-semibold leading-tight"
            style={{ color: 'var(--app-fg-strong)' }}
          >
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="mt-0.5 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  )
}

export function CardBody({ className, children }) {
  return <div className={cx('px-5 py-4', className)}>{children}</div>
}

export function SectionTitle({ children, className }) {
  return (
    <div
      className={cx(
        'flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide',
        className,
      )}
      style={{ color: 'var(--app-fg-subtle)' }}
    >
      <span className="h-3 w-0.5 rounded" style={{ background: 'var(--app-primary)' }} />
      {children}
    </div>
  )
}
