import { Avatar, Chip, Progress, Button } from 'oks-ui'
import { ArrowUpRight, Users, DollarSign, Activity } from 'lucide-react'
import { PageHeader, Surface, CardHeader, KpiCard, DonutCard, MeterList, TrendChip, EntityCell } from '../../Components/ui/index.js'
import { makeCustomers } from '../../data/mock.js'

const people = makeCustomers(5)

export default function Widgets() {
  return (
    <>
      <PageHeader title="Widgets" trail={[{ label: 'Components', to: '/components' }, { label: 'Widgets' }]} />

      <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard label="Members" value="4,820" delta={3.1} tone="primary" icon={Users} />
        <KpiCard label="MRR" value="$92.4k" delta={5.6} tone="success" icon={DollarSign} />
        <KpiCard label="Active now" value="312" delta={-1.2} tone="warning" icon={Activity} />
        <KpiCard label="Churn" value="1.8%" delta={-0.3} tone="danger" icon={ArrowUpRight} />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Surface>
          <CardHeader title="Storage" subtitle="By file type" />
          <div className="px-5 pb-6 pt-2">
            <DonutCard
              data={[
                { label: 'Media', value: 48 },
                { label: 'Documents', value: 30 },
                { label: 'Other', value: 22 },
              ]}
              centerValue="82%"
              centerLabel="used"
              roles={['primary', 'info', 'warning']}
              height={170}
            />
          </div>
        </Surface>

        <Surface>
          <CardHeader title="Goals" subtitle="This quarter" />
          <div className="px-5 pb-5 pt-1">
            <MeterList
              items={[
                { label: 'Revenue', value: '72%', percent: 72 },
                { label: 'New customers', value: '54%', percent: 54, color: 'info' },
                { label: 'NPS', value: '88%', percent: 88, color: 'success' },
              ]}
            />
          </div>
        </Surface>

        <Surface>
          <CardHeader title="Top members" />
          <ul className="space-y-1 p-3">
            {people.map((p) => (
              <li key={p.id} className="flex items-center justify-between gap-3 px-2 py-2">
                <EntityCell name={p.name} sub={p.company} seed={p.seed} />
                <TrendChip value={((p.seed * 7) % 20) - 6} />
              </li>
            ))}
          </ul>
        </Surface>

        <Surface className="p-5 lg:col-span-2">
          <CardHeader title="Profile completeness" className="px-0 pt-0" />
          <div className="mt-2 flex items-center gap-4">
            <Avatar name="Ava Reid" size={48} showFallback />
            <div className="flex-1">
              <Progress value={70} color="primary" label="70% complete" showValueLabel aria-label="Profile completeness" />
              <p className="mt-1.5 text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>
                Add a phone number and a backup email to finish.
              </p>
            </div>
            <Button size="sm" color="primary" variant="soft">Complete</Button>
          </div>
        </Surface>

        <Surface className="p-5">
          <CardHeader title="Plan" className="px-0 pt-0" />
          <div className="mt-2">
            <Chip color="primary">Growth</Chip>
            <p className="mt-3 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              10 of 10 seats used · renews 5 Sep 2026
            </p>
            <Button size="sm" variant="bordered" color="default" className="mt-3">Manage plan</Button>
          </div>
        </Surface>
      </div>
    </>
  )
}
