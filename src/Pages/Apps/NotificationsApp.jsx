import { Button, SelectField, toast } from 'oks-ui'
import { Bell, MessageSquare, ShoppingCart, ShieldAlert } from 'lucide-react'
import { PageHeader, Surface, CardHeader, ToggleRow } from '../../Components/ui/index.js'

const CHANNELS = [
  { icon: MessageSquare, label: 'Mentions & replies', hint: 'When someone @-mentions you or replies', on: true },
  { icon: ShoppingCart, label: 'New orders', hint: 'A notification for every new order', on: true },
  { icon: ShieldAlert, label: 'Security alerts', hint: 'New sign-ins and permission changes', on: true },
  { icon: Bell, label: 'Product updates', hint: 'Release notes and new features', on: false },
]

const DELIVERY = [
  { label: 'Weekly digest email', hint: 'A Monday summary of everything you missed', on: true },
  { label: 'Desktop push', hint: 'Browser notifications while dyloc is open', on: true },
  { label: 'Play a sound', hint: 'A short chime for high-priority alerts', on: false },
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

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Surface>
          <CardHeader title="Notification channels" subtitle="Choose what dyloc pushes to you" />
          <ul className="divide-y" style={{ borderColor: 'var(--app-border)' }}>
            {CHANNELS.map((c) => (
              <li key={c.label} className="px-5 py-4">
                <ToggleRow label={c.label} hint={c.hint} icon={c.icon} defaultChecked={c.on} />
              </li>
            ))}
          </ul>
        </Surface>

        <div className="space-y-5">
          <Surface>
            <CardHeader title="Delivery" />
            <ul className="space-y-4 px-5 pb-5 pt-1">
              {DELIVERY.map((d) => (
                <li key={d.label}>
                  <ToggleRow label={d.label} hint={d.hint} defaultChecked={d.on} />
                </li>
              ))}
            </ul>
          </Surface>

          <Surface className="p-5">
            <CardHeader title="Quiet hours" className="px-0 pt-0" />
            <div className="mt-3 grid grid-cols-2 gap-3">
              <SelectField
                label="From"
                defaultValue="22"
                options={['20', '21', '22', '23'].map((h) => ({ label: `${h}:00`, value: h }))}
              />
              <SelectField
                label="To"
                defaultValue="7"
                options={['6', '7', '8', '9'].map((h) => ({ label: `${h.padStart(2, '0')}:00`, value: h }))}
              />
            </div>
            <p className="mt-3 text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              Only security alerts break through quiet hours.
            </p>
          </Surface>
        </div>
      </div>
    </>
  )
}
