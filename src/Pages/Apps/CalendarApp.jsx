import { useState } from 'react'
import { Calendar, Chip } from 'oks-ui'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'

const EVENTS = [
  { date: '2026-09-03', title: 'Ops sync', color: 'primary' },
  { date: '2026-09-08', title: 'Board review', color: 'warning' },
  { date: '2026-09-12', title: 'Release v0.2', color: 'success' },
  { date: '2026-09-18', title: 'Supplier call', color: 'primary' },
  { date: '2026-09-24', title: 'Team offsite', color: 'danger' },
]

export default function CalendarApp() {
  const [selected, setSelected] = useState('2026-09-12')
  const dayEvents = EVENTS.filter((e) => e.date === selected)

  return (
    <>
      <PageHeader title="Calendar" trail={[{ label: 'Apps', to: '/apps/calendar' }, { label: 'Calendar' }]} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Surface className="p-4 lg:col-span-2">
          <Calendar
            value={selected}
            onChange={setSelected}
            month="2026-09"
            renderDay={(ctx) => {
              const has = EVENTS.some((e) => e.date === ctx.date)
              return (
                <span className="relative flex h-full w-full items-center justify-center">
                  {new Date(ctx.date).getUTCDate()}
                  {has && (
                    <span className="absolute bottom-1 h-1 w-1 rounded-full" style={{ background: 'var(--app-primary)' }} />
                  )}
                </span>
              )
            }}
          />
        </Surface>
        <Surface>
          <CardHeader title={selected} subtitle={`${dayEvents.length} event${dayEvents.length === 1 ? '' : 's'}`} />
          <ul className="space-y-2 p-5">
            {dayEvents.length === 0 && (
              <li className="text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>Nothing scheduled.</li>
            )}
            {dayEvents.map((e) => (
              <li key={e.title} className="flex items-center gap-2">
                <Chip size="sm" variant="dot" color={e.color}>{e.title}</Chip>
              </li>
            ))}
          </ul>
          <div className="border-t px-5 py-4" style={{ borderColor: 'var(--app-border)' }}>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--app-fg-subtle)' }}>Upcoming</p>
            <ul className="space-y-2">
              {EVENTS.map((e) => (
                <li key={e.date + e.title} className="flex items-center justify-between text-[12px]">
                  <span style={{ color: 'var(--app-fg)' }}>{e.title}</span>
                  <span style={{ color: 'var(--app-fg-muted)' }}>{e.date.slice(5)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Surface>
      </div>
    </>
  )
}
