import { Progress } from 'oks-ui'

/** Labelled progress rows — the reference's "Sales Activity" / progress widgets. */
export function MeterList({ items, color = 'primary' }) {
  return (
    <ul className="space-y-4">
      {items.map((it) => (
        <li key={it.label}>
          <div className="mb-1.5 flex items-center justify-between text-[12px]">
            <span style={{ color: 'var(--app-fg)' }}>{it.label}</span>
            <span style={{ color: 'var(--app-fg-muted)' }}>{it.value}</span>
          </div>
          <Progress value={it.percent} color={it.color ?? color} size="sm" aria-label={it.label} />
        </li>
      ))}
    </ul>
  )
}
