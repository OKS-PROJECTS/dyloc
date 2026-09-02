import { useState } from 'react'
import { Button, Chip, SegmentedControl } from 'oks-ui'
import { Check } from 'lucide-react'
import { PageHeader, Surface } from '../../Components/ui/index.js'

const PLANS = [
  { name: 'Starter', monthly: 0, annual: 0, blurb: 'For side projects', features: ['1 workspace', 'Up to 3 dashboards', 'Community support'] },
  { name: 'Growth', monthly: 49, annual: 39, blurb: 'For growing teams', highlight: true, features: ['Unlimited dashboards', '10 team members', 'Priority support', 'Audit log'] },
  { name: 'Scale', monthly: 149, annual: 119, blurb: 'For larger orgs', features: ['Everything in Growth', 'SSO / SAML', 'Dedicated success manager', '99.9% uptime SLA'] },
]

export default function Pricing() {
  const [cycle, setCycle] = useState('annual')
  return (
    <>
      <PageHeader
        title="Pricing"
        trail={[{ label: 'Pages', to: '/pages/pricing' }, { label: 'Pricing' }]}
        actions={
          <SegmentedControl
            aria-label="Billing cycle"
            size="sm"
            value={cycle}
            onChange={setCycle}
            options={[
              { label: 'Monthly', value: 'monthly' },
              { label: 'Annual', value: 'annual' },
            ]}
          />
        }
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {PLANS.map((p) => (
          <Surface
            key={p.name}
            className="flex flex-col p-6"
            style={p.highlight ? { borderColor: 'var(--app-primary)', borderWidth: 1, borderStyle: 'solid' } : undefined}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>{p.name}</h3>
              {p.highlight && <Chip size="sm" color="primary">Popular</Chip>}
            </div>
            <p className="mt-1 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>{p.blurb}</p>
            <p className="mt-4">
              <span className="text-[30px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                ${cycle === 'annual' ? p.annual : p.monthly}
              </span>
              <span className="text-[12px]" style={{ color: 'var(--app-fg-muted)' }}> / month</span>
            </p>
            <Button color={p.highlight ? 'primary' : 'default'} variant={p.highlight ? 'solid' : 'bordered'} className="mt-4">
              {p.monthly === 0 ? 'Get started' : 'Start trial'}
            </Button>
            <ul className="mt-5 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[12.5px]" style={{ color: 'var(--app-fg)' }}>
                  <Check size={15} style={{ color: 'var(--app-primary)' }} className="mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </Surface>
        ))}
      </div>
    </>
  )
}
