import { Avatar } from 'oks-ui'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'
import { avatarUrl } from '../../lib/cx.js'

const team = [
  { name: 'Ava Reid', role: 'Head of Operations', seed: 1 },
  { name: 'Noah Marsh', role: 'Product', seed: 3 },
  { name: 'Mia Vance', role: 'Engineering', seed: 5 },
  { name: 'Liam Okafor', role: 'Support Lead', seed: 7 },
]

const values = [
  { title: 'Composed, not bolted on', body: 'Every widget is an oks-ui primitive or built from a handful of them.' },
  { title: 'Tokens all the way down', body: 'One theme file drives light, dark and rebrand.' },
  { title: 'Real screens', body: 'No lorem-ipsum stubs — every route is a working page.' },
]

export default function About() {
  return (
    <>
      <PageHeader title="About us" trail={[{ label: 'Pages', to: '/pages/about' }, { label: 'About' }]} />
      <Surface className="mb-5 p-6">
        <h2 className="text-[18px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
          dyloc is an admin template built entirely with oks-ui.
        </h2>
        <p className="mt-2 max-w-2xl text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
          It exists to show that a single CSS-variable component library can carry
          a full product surface — tables, charts, forms, the shell and the deep
          app pages — without reaching for a second UI kit.
        </p>
      </Surface>

      <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {values.map((v) => (
          <Surface key={v.title} className="p-5">
            <h2 className="text-[13.5px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>{v.title}</h2>
            <p className="mt-1 text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>{v.body}</p>
          </Surface>
        ))}
      </div>

      <Surface>
        <CardHeader title="The team" />
        <div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <Avatar src={avatarUrl(m.seed)} name={m.name} size={56} showFallback />
              <p className="mt-2 text-[12.5px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>{m.name}</p>
              <p className="text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>{m.role}</p>
            </div>
          ))}
        </div>
      </Surface>
    </>
  )
}
