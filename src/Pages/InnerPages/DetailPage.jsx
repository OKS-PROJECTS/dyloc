import { Avatar, Button, Chip, Divider } from 'oks-ui'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'
import { avatarUrl } from '../../lib/cx.js'

/**
 * Config-driven entity detail view.
 * config: {
 *   title, trail?, hero?: { name, sub, seed?, tags?: [] , actions? },
 *   sections: [{ title, rows: [{ label, value }] }],
 *   aside?: [{ title, rows }]
 * }
 */
export default function DetailPage({ config }) {
  const { title, trail, hero, sections = [], aside = [] } = config
  return (
    <>
      <PageHeader
        title={title}
        trail={trail ?? [{ label: 'Home', to: '/dashboards/default' }, { label: title }]}
        actions={
          <>
            <Button size="sm" variant="bordered" color="default">Edit</Button>
            <Button size="sm" color="primary">Actions</Button>
          </>
        }
      />

      {hero && (
        <Surface className="mb-5 flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center">
          <Avatar src={hero.seed !== undefined ? avatarUrl(hero.seed) : undefined} name={hero.name} size={64} showFallback />
          <div className="min-w-0 flex-1">
            <h2 className="text-[17px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              {hero.name}
            </h2>
            {hero.sub && (
              <p className="text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>{hero.sub}</p>
            )}
            {hero.tags?.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {hero.tags.map((t) => (
                  <Chip key={t} size="sm" variant="soft" color="primary">{t}</Chip>
                ))}
              </div>
            )}
          </div>
        </Surface>
      )}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {sections.map((s) => (
            <Surface key={s.title}>
              <CardHeader title={s.title} divider />
              <dl className="divide-y p-5" style={{ borderColor: 'var(--app-border)' }}>
                {s.rows.map((r) => (
                  <div key={r.label} className="grid grid-cols-3 gap-3 py-2.5 text-[12.5px]">
                    <dt style={{ color: 'var(--app-fg-muted)' }}>{r.label}</dt>
                    <dd className="col-span-2" style={{ color: 'var(--app-fg)' }}>{r.value}</dd>
                  </div>
                ))}
              </dl>
            </Surface>
          ))}
        </div>
        <div className="space-y-5">
          {aside.map((s) => (
            <Surface key={s.title} className="p-5">
              <h3 className="text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>{s.title}</h3>
              <Divider className="my-3" />
              <ul className="space-y-2 text-[12.5px]">
                {s.rows.map((r) => (
                  <li key={r.label} className="flex justify-between gap-3">
                    <span style={{ color: 'var(--app-fg-muted)' }}>{r.label}</span>
                    <span style={{ color: 'var(--app-fg)' }}>{r.value}</span>
                  </li>
                ))}
              </ul>
            </Surface>
          ))}
        </div>
      </div>
    </>
  )
}
