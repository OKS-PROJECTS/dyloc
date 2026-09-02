import { Timeline, TimelineItem, Chip } from 'oks-ui'
import { GitCommit, Package, Rocket, ShieldCheck } from 'lucide-react'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'

const EVENTS = [
  { icon: Rocket, color: 'primary', title: 'v0.1.0 released', time: '2 Sep 2026', body: 'First public build — shell, three dashboards, auth, archetypes.', tag: 'Release' },
  { icon: Package, color: 'success', title: 'Component gallery live', time: '2 Sep 2026', body: 'Every oks-ui primitive shown with copyable source.' },
  { icon: ShieldCheck, color: 'warning', title: 'Dark mode pass', time: '1 Sep 2026', body: 'Redefined every form-field token for the dark theme.' },
  { icon: GitCommit, color: 'default', title: 'Design tokens captured', time: '1 Sep 2026', body: 'Brand ramp built around the reference primary.' },
]

export default function TimelinePage() {
  return (
    <>
      <PageHeader title="Timeline" trail={[{ label: 'Pages', to: '/pages/timeline' }, { label: 'Timeline' }]} />
      <Surface className="mx-auto max-w-2xl">
        <CardHeader title="Project activity" subtitle="Most recent first" />
        <div className="px-5 pb-6 pt-2">
          <Timeline>
            {EVENTS.map((e) => (
              <TimelineItem
                key={e.title}
                title={
                  <span className="flex items-center gap-2">
                    {e.title}
                    {e.tag && <Chip size="sm" variant="soft" color="primary">{e.tag}</Chip>}
                  </span>
                }
                time={e.time}
                color={e.color}
                icon={<e.icon size={13} />}
              >
                <span style={{ color: 'var(--app-fg-muted)' }}>{e.body}</span>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Surface>
    </>
  )
}
