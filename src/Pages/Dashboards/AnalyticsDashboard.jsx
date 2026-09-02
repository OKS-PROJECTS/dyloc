import { SegmentedControl } from 'oks-ui'
import { useState } from 'react'
import { Activity, Users, Timer, MousePointerClick } from 'lucide-react'
import {
  PageHeader,
  Surface,
  CardHeader,
  KpiCard,
  ChartCard,
  DonutCard,
  MeterList,
} from '../../Components/ui/index.js'
import { MONTHS, series } from '../../data/mock.js'

const traffic = MONTHS.map((m, i) => ({
  month: m,
  sessions: series(12, 900, 260)[i],
  users: series(12, 620, 180, 2)[i],
}))

const channels = [
  { label: 'Organic search', value: '18,204' },
  { label: 'Direct', value: '9,113' },
  { label: 'Referral', value: '5,402' },
  { label: 'Social', value: '3,880' },
  { label: 'Email', value: '2,214' },
]

const devices = [
  { label: 'Desktop', value: 58 },
  { label: 'Mobile', value: 34 },
  { label: 'Tablet', value: 8 },
]

export default function AnalyticsDashboard() {
  const [range, setRange] = useState('30d')
  return (
    <>
      <PageHeader
        title="Analytics"
        trail={[{ label: 'Dashboards', to: '/dashboards/default' }, { label: 'Analytics' }]}
        actions={
          <SegmentedControl
            aria-label="Date range"
            size="sm"
            value={range}
            onChange={setRange}
            options={[
              { label: '7D', value: '7d' },
              { label: '30D', value: '30d' },
              { label: 'QTR', value: 'qtr' },
            ]}
          />
        }
      />

      <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard label="Sessions" value="126,540" delta={5.4} tone="primary" icon={Activity} spark={series(14, 60, 18)} />
        <KpiCard label="Active users" value="38,902" delta={2.1} tone="success" icon={Users} spark={series(14, 50, 14, 3)} />
        <KpiCard label="Avg. engagement" value="3m 42s" delta={-0.8} tone="warning" icon={Timer} spark={series(14, 40, 10, 1)} />
        <KpiCard label="Bounce rate" value="41.3%" delta={-1.6} tone="danger" icon={MousePointerClick} spark={series(14, 45, 12, 4)} />
      </div>

      <div className="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <ChartCard
          className="xl:col-span-2"
          title="Traffic overview"
          subtitle="Sessions and users"
          type="area"
          data={traffic}
          x="month"
          series={[
            { key: 'sessions', name: 'Sessions', color: 'var(--oks-color-primary-500)' },
            { key: 'users', name: 'Users', color: 'var(--oks-color-info-400)' },
          ]}
          height={300}
        />
        <Surface>
          <CardHeader title="Device split" subtitle="Share of sessions" />
          <div className="px-5 pb-6 pt-2">
            <DonutCard
              data={devices}
              centerValue="126K"
              centerLabel="sessions"
              roles={['primary', 'info', 'warning']}
              height={180}
            />
          </div>
        </Surface>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Surface>
          <CardHeader title="Acquisition channels" subtitle="New users by source" />
          <div className="px-5 pb-5 pt-1">
            <MeterList
              items={channels.map((c, i) => ({ ...c, percent: [92, 58, 34, 24, 14][i] }))}
            />
          </div>
        </Surface>
        <ChartCard
          title="Conversions by month"
          subtitle="Checkout completions"
          type="column"
          data={traffic}
          x="month"
          series={[{ key: 'users', name: 'Conversions', color: 'var(--oks-color-primary-500)' }]}
          column={{ radius: 4 }}
          height={260}
        />
      </div>
    </>
  )
}
