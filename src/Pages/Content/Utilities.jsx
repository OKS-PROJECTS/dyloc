import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'

const TOKENS = [
  ['--app-bg', 'page background'],
  ['--app-surface', 'card background'],
  ['--app-surface-2', 'sunken / subtle surface'],
  ['--app-border', 'hairline border'],
  ['--app-fg-strong', 'headings'],
  ['--app-fg', 'body text'],
  ['--app-fg-muted', 'secondary text'],
  ['--app-fg-subtle', 'captions / disabled'],
  ['--app-primary', 'brand / primary action'],
  ['--app-success', 'positive'],
  ['--app-warning', 'attention'],
  ['--app-danger', 'destructive'],
]

const HELPERS = [
  ['useMediaQuery(query, default?)', 'SSR-safe responsive value — drives Tabs isVertical, sidebar collapse, etc.'],
  ['oksVar(name)', 'returns var(--name)'],
  ['oksColorVarName(role, shade)', 'returns "oks-color-primary-600"'],
  ['clamp(n, min, max)', 'numeric clamp'],
  ['blurOnEscape', 'input handler — blur on Escape'],
]

export default function Utilities() {
  return (
    <>
      <PageHeader title="Utilities" trail={[{ label: 'Components', to: '/components' }, { label: 'Utilities' }]} />

      <Surface className="mb-5">
        <CardHeader title="Semantic tokens" subtitle="The --app-* layer read by every composed component" />
        <div className="grid grid-cols-1 gap-2 p-5 sm:grid-cols-2">
          {TOKENS.map(([name, desc]) => (
            <div key={name} className="flex items-center gap-3 rounded-md p-2" style={{ border: '1px solid var(--app-border)' }}>
              <span className="h-6 w-6 shrink-0 rounded" style={{ background: `var(${name})`, border: '1px solid var(--app-border)' }} />
              <div className="min-w-0">
                <code className="text-[11.5px]" style={{ color: 'var(--app-fg-strong)' }}>{name}</code>
                <p className="truncate text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Surface>

      <Surface>
        <CardHeader title="JS helpers" subtitle="Exported from oks-ui" />
        <ul className="divide-y p-5" style={{ borderColor: 'var(--app-border)' }}>
          {HELPERS.map(([sig, desc]) => (
            <li key={sig} className="py-2.5">
              <code className="text-[12px]" style={{ color: 'var(--app-fg-strong)' }}>{sig}</code>
              <p className="text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>{desc}</p>
            </li>
          ))}
        </ul>
      </Surface>
    </>
  )
}
