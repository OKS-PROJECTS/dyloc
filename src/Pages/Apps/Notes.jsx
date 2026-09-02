import { useState } from 'react'
import { Button, Chip } from 'oks-ui'
import { Plus } from 'lucide-react'
import { PageHeader, Surface } from '../../Components/ui/index.js'

const NOTES = [
  { id: 1, title: 'Release checklist', tag: 'Work', body: 'Run lint + build, sweep every route, check mobile at 375px, then tag the release.', when: 'Today' },
  { id: 2, title: 'Supplier follow-ups', tag: 'Finance', body: 'Chase Greenlane and Oakmont for signed contracts. Kestrel already returned.', when: 'Yesterday' },
  { id: 3, title: 'Dashboard ideas', tag: 'Product', body: 'Add a cohort retention grid and a refund-reason breakdown to the sales view.', when: '3 days ago' },
  { id: 4, title: 'Onboarding copy', tag: 'Product', body: 'Rewrite the empty states to be more encouraging. Shorter descriptions.', when: '1 week ago' },
]

const TAG_COLOR = { Work: 'primary', Finance: 'warning', Product: 'success' }

export default function Notes() {
  const [active, setActive] = useState(NOTES[0])
  return (
    <>
      <PageHeader
        title="Notes"
        trail={[{ label: 'Apps', to: '/apps/notes' }, { label: 'Notes' }]}
        actions={<Button size="sm" color="primary" startContent={<Plus size={14} />}>New note</Button>}
      />
      <Surface className="grid grid-cols-1 overflow-hidden lg:grid-cols-[300px_1fr]" style={{ minHeight: '60vh' }}>
        <ul className="border-r" style={{ borderColor: 'var(--app-border)' }}>
          {NOTES.map((n) => (
            <li key={n.id}>
              <button
                type="button"
                onClick={() => setActive(n)}
                className="flex w-full flex-col gap-1 border-b px-4 py-3 text-left"
                style={{ borderColor: 'var(--app-border)', background: active.id === n.id ? 'var(--app-primary-soft)' : 'transparent' }}
              >
                <span className="flex items-center justify-between">
                  <span className="text-[12.5px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>{n.title}</span>
                  <span className="text-[10.5px]" style={{ color: 'var(--app-fg-muted)' }}>{n.when}</span>
                </span>
                <span className="line-clamp-2 text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>{n.body}</span>
              </button>
            </li>
          ))}
        </ul>
        <article className="p-6">
          <div className="flex items-center gap-2">
            <h2 className="text-[17px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>{active.title}</h2>
            <Chip size="sm" variant="soft" color={TAG_COLOR[active.tag]}>{active.tag}</Chip>
          </div>
          <p className="mt-1 text-[11.5px]" style={{ color: 'var(--app-fg-subtle)' }}>Edited {active.when}</p>
          <p className="mt-4 text-[13px] leading-relaxed" style={{ color: 'var(--app-fg)' }}>{active.body}</p>
        </article>
      </Surface>
    </>
  )
}
