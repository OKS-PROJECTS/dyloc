import { DollarSign, Package, RotateCcw, TrendingUp } from 'lucide-react'
import {
  PageHeader,
  Surface,
  CardHeader,
  KpiCard,
  ChartCard,
  DataTable,
  StatusChip,
  EntityCell,
} from '../../Components/ui/index.js'
import { MONTHS, series, makeOrders } from '../../data/mock.js'

const revenue = MONTHS.map((m, i) => ({
  month: m,
  revenue: series(12, 42000, 12000)[i],
  target: 40000 + i * 900,
}))

const topProducts = [
  { name: 'Nimbus Wireless Pad', revenue: '$48,220', share: 22 },
  { name: 'Corewave Router X2', revenue: '$39,540', share: 18 },
  { name: 'Kestrel Bluetooth Speaker', revenue: '$31,900', share: 15 },
  { name: 'Brightsmith Desk Lamp', revenue: '$24,110', share: 11 },
  { name: 'Aperture Lens 24mm', revenue: '$19,880', share: 9 },
]

const orders = makeOrders(9)

export default function SalesDashboard() {
  return (
    <>
      <PageHeader
        title="Sales"
        trail={[{ label: 'Dashboards', to: '/dashboards/default' }, { label: 'Sales' }]}
      />

      <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard label="Revenue (MTD)" value="$512,340" delta={7.8} tone="primary" icon={DollarSign} spark={series(14, 70, 20)} />
        <KpiCard label="Orders" value="8,942" delta={3.2} tone="success" icon={Package} spark={series(14, 55, 16, 2)} />
        <KpiCard label="Avg. order value" value="$57.30" delta={1.1} tone="warning" icon={TrendingUp} spark={series(14, 45, 12, 1)} />
        <KpiCard label="Returns" value="248" delta={-2.7} tone="danger" icon={RotateCcw} spark={series(14, 30, 9, 3)} />
      </div>

      <div className="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <ChartCard
          className="xl:col-span-2"
          title="Revenue vs. target"
          subtitle="Rolling 12 months"
          type="area"
          data={revenue}
          x="month"
          series={[
            { key: 'revenue', name: 'Revenue', color: 'var(--oks-color-primary-500)' },
            { key: 'target', name: 'Target', color: 'var(--oks-color-warning-400)' },
          ]}
          dataFormat={{ prefix: '$', format: 'compact' }}
          height={300}
        />
        <Surface>
          <CardHeader title="Top products" subtitle="By revenue" />
          <ul className="space-y-1 px-3 pb-3">
            {topProducts.map((p) => (
              <li key={p.name} className="flex items-center justify-between gap-3 rounded-md px-2 py-2.5">
                <div className="min-w-0">
                  <p className="truncate text-[12.5px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>
                    {p.name}
                  </p>
                  <p className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>
                    {p.share}% of revenue
                  </p>
                </div>
                <span className="text-[12.5px] tabular-nums" style={{ color: 'var(--app-fg)' }}>
                  {p.revenue}
                </span>
              </li>
            ))}
          </ul>
        </Surface>
      </div>

      <Surface>
        <CardHeader title="Latest orders" actions={<StatusChip status="Live" />} />
        <DataTable
          ariaLabel="Latest orders"
          rows={orders}
          searchKeys={['id', 'customer', 'product']}
          pageSize={8}
          columns={[
            { key: 'id', header: 'Order', sortable: true },
            {
              key: 'customer',
              header: 'Customer',
              render: (r) => <EntityCell name={r.customer} sub={r.product} seed={r.seed} />,
            },
            { key: 'date', header: 'Date', sortable: true },
            {
              key: 'total',
              header: 'Total',
              align: 'end',
              sortable: true,
              render: (r) => `$${r.total.toLocaleString()}`,
            },
            { key: 'payment', header: 'Payment' },
            { key: 'status', header: 'Status', render: (r) => <StatusChip status={r.status} /> },
          ]}
        />
      </Surface>
    </>
  )
}
