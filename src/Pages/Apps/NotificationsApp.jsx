import { Button, Switch, toast } from 'oks-ui'
import { Bell, MessageSquare, ShoppingCart, ShieldAlert } from 'lucide-react'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'

const CHANNELS = [
  { icon: MessageSquare, label: 'Mentions & replies', hint: 'When someone @-mentions you or replies', on: true },
  { icon: ShoppingCart, label: 'New orders', hint: 'A notification for every new order', on: true },
  { icon: ShieldAlert, label: 'Security alerts', hint: 'New sign-ins and permission changes', on: true },
  { icon: Bell, label: 'Product updates', hint: 'Release notes and new features', on: false },
]

export default function NotificationsApp() {
  return (
    <>
      <PageHeader
        title="Notifications"
        trail={[{ label: 'Apps', to: '/apps/notifications' }, { label: 'Notifications' }]}
        actions={
          <Button
            size="sm"
            color="primary"
            variant="soft"
            onPress={() => toast('This is a test notification', { icon: <Bell size={14} /> })}
          >
            Send test
          </Button>
        }
      />
      <Surface className="mx-auto max-w-2xl">
        <CardHeader title="Notification channels" subtitle="Choose what dyloc pushes to you" />
        <ul className="divide-y" style={{ borderColor: 'var(--app-border)' }}>
          {CHANNELS.map((c) => (
            <li key={c.label} className="flex items-center gap-4 px-5 py-4">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                style={{ background: 'var(--app-primary-soft)', color: 'var(--app-primary)' }}
              >
                <c.icon size={16} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12.5px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>{c.label}</p>
                <p className="text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>{c.hint}</p>
              </div>
              <Switch defaultChecked={c.on} aria-label={c.label} />
            </li>
          ))}
        </ul>
      </Surface>
    </>
  )
}
