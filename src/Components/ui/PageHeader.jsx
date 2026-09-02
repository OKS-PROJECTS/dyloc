import { Link } from 'react-router-dom'
import { Breadcrumbs, BreadcrumbItem } from 'oks-ui'
import { cx } from '../../lib/cx.js'

/** Page title band — breadcrumb trail + title + actions cluster.
 *  Mirrors the reference's "DASHBOARD  ·  Dashboard / Sales" header row. */
export function PageHeader({ title, trail = [], actions, className }) {
  return (
    <div
      className={cx(
        'mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between',
        className,
      )}
    >
      <div>
        <h1
          className="text-[19px] font-semibold uppercase tracking-tight"
          style={{ color: 'var(--app-fg-strong)' }}
        >
          {title}
        </h1>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {trail.length > 0 && (
          <Breadcrumbs aria-label="Breadcrumb" className="text-[12px]">
            {trail.map((c, i) => (
              <BreadcrumbItem
                key={c.label}
                as={c.to ? Link : undefined}
                to={c.to}
                isCurrent={i === trail.length - 1}
              >
                {c.label}
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        )}
        {actions}
      </div>
    </div>
  )
}
