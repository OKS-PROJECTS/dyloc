import { useState } from 'react'
import { Avatar, Button, Chip, Tabs, Tab } from 'oks-ui'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'
import { avatarUrl } from '../../lib/cx.js'

const ALL = [
  { id: 1, who: 'Noah Marsh', seed: 3, text: 'commented on the Q3 report', time: '30 min ago', kind: 'mention', unread: true },
  { id: 2, who: 'System', seed: 0, text: 'Nightly backup completed', time: '2 hours ago', kind: 'system', unread: true },
  { id: 3, who: 'Mia Vance', seed: 5, text: 'assigned you "Update pricing page"', time: '4 hours ago', kind: 'task', unread: true },
  { id: 4, who: 'Liam Okafor', seed: 7, text: 'resolved 12 support tickets', time: 'Yesterday', kind: 'task', unread: false },
  { id: 5, who: 'Billing', seed: 0, text: 'Invoice INV-2026014 is due in 3 days', time: 'Yesterday', kind: 'system', unread: false },
]

const KIND_COLOR = { mention: 'primary', system: 'default', task: 'warning' }

export default function NotificationList() {
  const [filter, setFilter] = useState('all')
  const rows = filter === 'all' ? ALL : filter === 'unread' ? ALL.filter((n) => n.unread) : ALL.filter((n) => n.kind === filter)

  return (
    <>
      <PageHeader
        title="Notifications"
        trail={[{ label: 'Pages', to: '/pages/notification-list' }, { label: 'Notifications' }]}
        actions={<Button size="sm" variant="bordered" color="default">Mark all read</Button>}
      />
      <Surface className="mx-auto max-w-2xl">
        <CardHeader title={`${rows.length} notifications`} />
        <div className="px-3">
          <Tabs aria-label="Filter" variant="underlined" color="primary" selectedKey={filter} onSelectionChange={setFilter}>
            <Tab key="all" title="All" />
            <Tab key="unread" title="Unread" />
            <Tab key="mention" title="Mentions" />
            <Tab key="task" title="Tasks" />
          </Tabs>
        </div>
        <ul className="divide-y" style={{ borderColor: 'var(--app-border)' }}>
          {rows.map((n) => (
            <li key={n.id} className="flex items-start gap-3 px-5 py-3.5" style={{ background: n.unread ? 'var(--app-primary-soft)' : 'transparent' }}>
              <Avatar src={n.seed ? avatarUrl(n.seed) : undefined} name={n.who} size={34} showFallback />
              <div className="min-w-0 flex-1">
                <p className="text-[12.5px]" style={{ color: 'var(--app-fg)' }}>
                  <strong style={{ color: 'var(--app-fg-strong)' }}>{n.who}</strong> {n.text}
                </p>
                <p className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>{n.time}</p>
              </div>
              <Chip size="sm" variant="soft" color={KIND_COLOR[n.kind]}>{n.kind}</Chip>
            </li>
          ))}
        </ul>
      </Surface>
    </>
  )
}
