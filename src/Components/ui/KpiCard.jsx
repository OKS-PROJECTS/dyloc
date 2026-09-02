import { Chart } from 'oks-ui'
import { Surface } from './Surface.jsx'
import { TrendChip } from './chips.jsx'
import { cx } from '../../lib/cx.js'

const TONES = {
  primary: { fg: 'var(--app-primary)', bg: 'var(--app-primary-soft)' },
  success: { fg: 'var(--app-success)', bg: 'var(--app-success-soft)' },
  warning: { fg: 'var(--app-warning)', bg: 'var(--app-warning-soft)' },
  danger: { fg: 'var(--app-danger)', bg: 'var(--app-danger-soft)' },
  info: { fg: 'var(--app-primary)', bg: 'var(--app-primary-soft)' },
}

/** KPI / stat card — 2-up on phones (sparkline hidden), tighter padding. */
export function KpiCard({ label, value, delta, caption = 'Last week', tone = 'primary', icon: Icon, spark }) {
  const t = TONES[tone] ?? TONES.primary
  return (
    <Surface className="p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
            {label}
          </p>
          <p
            className="mt-1 text-[22px] font-semibold leading-tight"
            style={{ color: 'var(--app-fg-strong)' }}
          >
            {value}
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>
            {caption}
            {delta !== undefined && <TrendChip value={delta} suffix="" />}
          </p>
        </div>
        {Icon && (
          <span
            className={cx('hidden shrink-0 items-center justify-center rounded-md sm:flex')}
            style={{ width: 40, height: 40, background: t.bg, color: t.fg }}
          >
            <Icon size={18} />
          </span>
        )}
      </div>
      {spark && (
        <div className="mt-3 hidden h-10 sm:block">
          <Chart
            unstyled
            type="area"
            height={40}
            data={spark.map((y, x) => ({ x, y }))}
            x="x"
            series={[{ key: 'y', name: label, color: t.fg }]}
            legend={false}
            tooltip={false}
            axisX={{ hide: true }}
            axisY={{ hide: true }}
            grid={false}
            line={{ curve: 'smooth', area: { show: true, fill: { opacity: 0.14 } } }}
          />
        </div>
      )}
    </Surface>
  )
}
