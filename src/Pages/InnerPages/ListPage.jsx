import { useMemo, useState } from 'react'
import { Button, Chip } from 'oks-ui'
import { Plus, Download } from 'lucide-react'
import { PageHeader, Surface, CardHeader, DataTable } from '../../Components/ui/index.js'

/**
 * Config-driven list / CRUD screen.
 * config: { title, subtitle, trail?, columns, rows, searchKeys?, filters?, stats? }
 */
export default function ListPage({ config }) {
  const { title, subtitle, trail, columns, rows, searchKeys, filters = [], stats = [] } = config
  const [active, setActive] = useState(null)

  const shown = useMemo(() => {
    if (!active) return rows
    const f = filters.find((x) => x.key === active)
    return f ? rows.filter(f.test) : rows
  }, [rows, active, filters])

  return (
    <>
      <PageHeader
        title={title}
        trail={trail ?? [{ label: 'Home', to: '/dashboards/default' }, { label: title }]}
        actions={
          <>
            <Button size="sm" variant="bordered" color="default" startContent={<Download size={14} />}>
              Export
            </Button>
            <Button size="sm" color="primary" startContent={<Plus size={14} />}>
              New
            </Button>
          </>
        }
      />

      {stats.length > 0 && (
        <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <Surface key={s.label} className="p-4">
              <p className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                {s.label}
              </p>
              <p className="mt-1 text-[20px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                {s.value}
              </p>
            </Surface>
          ))}
        </div>
      )}

      <Surface>
        <CardHeader
          title={`${shown.length} ${title.toLowerCase()}`}
          subtitle={subtitle}
          actions={
            filters.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                <Chip
                  size="sm"
                  variant={active === null ? 'solid' : 'bordered'}
                  color={active === null ? 'primary' : 'default'}
                  onClick={() => setActive(null)}
                >
                  All
                </Chip>
                {filters.map((f) => (
                  <Chip
                    key={f.key}
                    size="sm"
                    variant={active === f.key ? 'solid' : 'bordered'}
                    color={active === f.key ? 'primary' : 'default'}
                    onClick={() => setActive(f.key)}
                  >
                    {f.label}
                  </Chip>
                ))}
              </div>
            )
          }
        />
        <DataTable
          ariaLabel={title}
          rows={shown}
          columns={columns}
          searchKeys={searchKeys}
          pageSize={10}
        />
      </Surface>
    </>
  )
}
