import { Chart } from 'oks-ui'
import { cx } from '../../lib/cx.js'

/** Donut + custom centre value + legend, stacked vertically (chart on top,
 *  legend below). Composed over <Chart type="donut">. */
export function DonutCard({ data, centerValue, centerLabel, roles, height = 200, className }) {
  const total = data.reduce((a, d) => a + d.value, 0)
  const colorFor = (d, i) =>
    d.color ?? `var(--oks-color-${(roles ?? ['primary'])[i % (roles?.length ?? 1)]}-500)`

  return (
    <div className={cx('flex flex-col items-center gap-4', className)}>
      <div className="donut-no-center relative" style={{ width: height, height }}>
        <Chart
          unstyled
          type="donut"
          height={height}
          data={data.map((d) => ({ name: d.label, value: d.value }))}
          x="name"
          series={[{ key: 'value', name: 'Value' }]}
          legend={false}
          tooltip={{ show: false }}
          axisX={{ hide: true }}
          axisY={{ hide: true }}
          palette={roles ? { roles } : undefined}
          pie={{ center: false }}
        />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[20px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
            {centerValue}
          </span>
          {centerLabel && (
            <span className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>
              {centerLabel}
            </span>
          )}
        </div>
      </div>

      <ul className="flex w-full flex-wrap justify-center gap-x-5 gap-y-2">
        {data.map((d, i) => (
          <li key={d.label} className="flex items-center gap-2 text-[12px]">
            <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: colorFor(d, i) }} />
            <span style={{ color: 'var(--app-fg)' }}>{d.label}</span>
            <span className="tabular-nums font-medium" style={{ color: 'var(--app-fg-muted)' }}>
              {total ? Math.round((d.value / total) * 100) : 0}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
