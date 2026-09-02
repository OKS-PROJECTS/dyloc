import { Link } from 'react-router-dom'
import { Button, Chip, Checkbox, CircularProgress, Timeline, TimelineItem } from 'oks-ui'
import { ArrowUpRight } from 'lucide-react'
import {
  PageHeader,
  Surface,
  CardHeader,
  KpiCard,
  ChartCard,
  DataTable,
  MeterList,
  StatusChip,
  TrendChip,
  EntityCell,
} from '../../Components/ui/index.js'
import {
  kpis,
  storagePct,
  budget,
  browsers,
  recentCustomers,
  mainTasks,
  salesActivity,
  warehouse,
  timeline,
  visitors,
  productSummary,
} from '../../data/dashboard.js'

export default function DefaultDashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        trail={[{ label: 'Home', to: '/dashboards/default' }, { label: 'Overview' }]}
      />

      {/* welcome banner + storage */}
      <Surface className="mb-5 overflow-hidden">
        <div className="flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-[17px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
              Welcome back, Ava{' '}
              <span style={{ color: 'var(--app-primary)' }}>·</span> here is today
            </h2>
            <p className="mt-1 max-w-lg text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              You have used {storagePct}% of your plan storage. Upgrade to keep syncing
              media assets without limits.
            </p>
            <Button as={Link} to="/pages/pricing" color="primary" size="sm" className="mt-3">
              Upgrade plan
            </Button>
          </div>
          <div className="donut-no-center shrink-0">
            <CircularProgress
              value={storagePct}
              size={92}
              color="primary"
              strokeWidth={8}
              showValueLabel
              aria-label="Storage used"
            />
          </div>
        </div>
      </Surface>

      {/* KPI row */}
      <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <KpiCard key={k.label} {...k} icon={ArrowUpRight} />
        ))}
      </div>

      {/* budget chart + browser usage */}
      <div className="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <ChartCard
          className="xl:col-span-2"
          title="Project budget"
          subtitle="Orders vs. sales, rolling 12 months"
          type="column"
          data={budget}
          x="month"
          series={[
            { key: 'orders', name: 'Total orders', color: 'var(--oks-color-primary-500)' },
            { key: 'sales', name: 'Total sales', color: 'var(--oks-color-info-400)' },
          ]}
          column={{ radius: 4 }}
          height={300}
        />
        <Surface>
          <CardHeader title="Browser usage" subtitle="Sessions this week" />
          <ul className="divide-y px-2" style={{ borderColor: 'var(--app-border)' }}>
            {browsers.map((b) => (
              <li key={b.name} className="flex items-center justify-between gap-3 px-3 py-3">
                <div className="min-w-0">
                  <p className="text-[12.5px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>
                    {b.name}
                  </p>
                  <p className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>
                    {b.vendor}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[12.5px] tabular-nums" style={{ color: 'var(--app-fg)' }}>
                    {b.visits.toLocaleString()}
                  </span>
                  <TrendChip value={b.trend} />
                </div>
              </li>
            ))}
          </ul>
        </Surface>
      </div>

      {/* recent customers + main tasks + sales activity */}
      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Surface>
          <CardHeader
            title="Recent customers"
            actions={
              <Button as={Link} to="/ecommerce/products" size="sm" variant="ghost" color="default">
                View all
              </Button>
            }
          />
          <ul className="space-y-1 px-3 pb-3">
            {recentCustomers.map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-3 rounded-md px-2 py-2 hover:bg-[var(--app-neutral-soft)]">
                <EntityCell name={c.name} sub={`ID: ${c.id}`} seed={c.seed} />
                <Chip size="sm" variant="soft" color={c.payStatus === 'Paid' ? 'success' : 'warning'}>
                  {c.payStatus}
                </Chip>
              </li>
            ))}
          </ul>
        </Surface>

        <Surface>
          <CardHeader title="Main tasks" subtitle="Assigned to you" />
          <ul className="space-y-1 px-4 pb-4">
            {mainTasks.map((t) => (
              <li key={t.text} className="flex items-start gap-2.5 py-1.5">
                <Checkbox defaultChecked={t.done} aria-label={t.text} />
                <div className="min-w-0">
                  <p
                    className="text-[12.5px]"
                    style={{
                      color: t.done ? 'var(--app-fg-subtle)' : 'var(--app-fg)',
                      textDecoration: t.done ? 'line-through' : 'none',
                    }}
                  >
                    {t.text}
                  </p>
                  <p className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>
                    {t.when}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Surface>

        <Surface>
          <CardHeader title="Sales activity" subtitle="Revenue by region" />
          <div className="px-5 pb-5 pt-1">
            <MeterList items={salesActivity} />
          </div>
        </Surface>
      </div>

      {/* warehouse costs */}
      <Surface className="mb-5">
        <CardHeader title="Warehouse operating costs" subtitle="Month to date" />
        <div className="grid grid-cols-2 gap-px overflow-hidden md:grid-cols-3 lg:grid-cols-6" style={{ background: 'var(--app-border)' }}>
          {warehouse.map((w) => (
            <div key={w.label} className="p-4" style={{ background: 'var(--app-surface)' }}>
              <p className="text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>
                {w.label}
              </p>
              <p className="mt-1 text-[17px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                {w.value}
              </p>
              <div className="mt-1 flex items-center gap-1.5">
                <TrendChip value={w.delta} />
                <span className="text-[10.5px]" style={{ color: 'var(--app-fg-subtle)' }}>
                  {w.when}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Surface>

      {/* timeline + weekly visitors */}
      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Surface>
          <CardHeader title="Timeline" subtitle="Recent team activity" />
          <div className="px-5 pb-5 pt-2">
            <Timeline>
              {timeline.map((t) => (
                <TimelineItem key={t.name + t.date} title={t.name} time={t.date}>
                  <span style={{ color: 'var(--app-fg-muted)' }}>{t.text}</span>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </Surface>

        <ChartCard
          title="Weekly visitors"
          subtitle="Male vs. female, last 7 days"
          type="area"
          data={visitors}
          x="day"
          series={[
            { key: 'male', name: 'Male', color: 'var(--oks-color-primary-500)' },
            { key: 'female', name: 'Female', color: 'var(--oks-color-secondary-400)' },
          ]}
          height={300}
        />
      </div>

      {/* product summary table */}
      <Surface>
        <CardHeader
          title="Product summary"
          actions={<StatusChip status="Live" />}
        />
        <DataTable
          ariaLabel="Product summary"
          rows={productSummary}
          searchKeys={['name', 'category']}
          pageSize={10}
          columns={[
            {
              key: 'name',
              header: 'Product',
              sortable: true,
              render: (r) => <EntityCell name={r.name} sub={r.id} seed={r.seed} square />,
            },
            { key: 'category', header: 'Category', sortable: true },
            {
              key: 'price',
              header: 'Price',
              align: 'end',
              sortable: true,
              render: (r) => `$${r.price.toFixed(2)}`,
            },
            {
              key: 'sold',
              header: 'Units sold',
              align: 'end',
              sortable: true,
              render: (r) => r.sold.toLocaleString(),
            },
            {
              key: 'status',
              header: 'Status',
              render: (r) => <StatusChip status={r.status} />,
            },
          ]}
        />
      </Surface>
    </>
  )
}
