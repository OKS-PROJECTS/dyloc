import { Chip, Avatar } from 'oks-ui'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cx } from '../../lib/cx.js'
import { avatarUrl } from '../../lib/cx.js'

const STATUS_COLOR = {
  paid: 'success',
  delivered: 'success',
  active: 'success',
  completed: 'success',
  approved: 'success',
  pending: 'warning',
  processing: 'warning',
  'on hold': 'warning',
  draft: 'default',
  shipped: 'info',
  delivering: 'info',
  'in transit': 'info',
  new: 'info',
  cancelled: 'danger',
  failed: 'danger',
  refunded: 'danger',
  overdue: 'danger',
  inactive: 'default',
}

export function StatusChip({ status, size = 'sm' }) {
  const key = String(status ?? '').toLowerCase()
  return (
    <Chip size={size} variant="soft" color={STATUS_COLOR[key] ?? 'default'}>
      {status}
    </Chip>
  )
}

export function TrendChip({ value, suffix = '%', className }) {
  const up = Number(value) >= 0
  const Icon = up ? ArrowUpRight : ArrowDownRight
  return (
    <span
      className={cx('inline-flex items-center gap-0.5 text-[12px] font-medium', className)}
      style={{ color: up ? 'var(--app-success)' : 'var(--app-danger)' }}
    >
      <Icon size={13} />
      {Math.abs(Number(value))}
      {suffix}
    </span>
  )
}

export function EntityCell({ name, sub, src, seed, to, square = false }) {
  const inner = (
    <span className="flex min-w-0 items-center gap-2.5">
      <Avatar
        name={name}
        src={src ?? (seed !== undefined ? avatarUrl(seed) : undefined)}
        size={32}
        radius={square ? 'sm' : 'full'}
        showFallback
      />
      <span className="flex min-w-0 flex-col">
        <span
          className="truncate text-[12.5px] font-medium"
          style={{ color: 'var(--app-fg-strong)' }}
        >
          {name}
        </span>
        {sub && (
          <span className="truncate text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>
            {sub}
          </span>
        )}
      </span>
    </span>
  )
  return to ? (
    <Link to={to} className="hover:opacity-80">
      {inner}
    </Link>
  ) : (
    inner
  )
}
