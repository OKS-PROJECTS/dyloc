import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHeader, Surface } from '../../Components/ui/index.js'
import { GALLERY, GALLERY_SLUGS } from '../../data/gallery.jsx'

export default function GalleryIndex() {
  const groups = {}
  for (const slug of GALLERY_SLUGS) {
    const e = GALLERY[slug]
    ;(groups[e.group] ??= []).push({ slug, ...e })
  }

  return (
    <>
      <PageHeader
        title="Components"
        trail={[{ label: 'Home', to: '/dashboards/default' }, { label: 'Components' }]}
      />
      <Surface className="mb-5 p-5">
        <p className="text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
          Every screen in dyloc is assembled from oks-ui primitives or components
          composed from them. Each entry below is a live example with copyable
          source. See the{' '}
          <Link to="/components/kitchen-sink" style={{ color: 'var(--app-primary)' }}>
            kitchen sink
          </Link>{' '}
          for the interactive primitives.
        </p>
      </Surface>

      {Object.entries(groups).map(([group, entries]) => (
        <div key={group} className="mb-6">
          <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--app-fg-subtle)' }}>
            {group}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((e) => (
              <Surface
                key={e.slug}
                as={Link}
                to={`/components/${e.slug}`}
                className="group flex flex-col p-4 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-[13.5px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                    {e.title}
                  </h2>
                  <ArrowRight
                    size={15}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: 'var(--app-primary)' }}
                  />
                </div>
                <p className="mt-1 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                  {e.blurb}
                </p>
              </Surface>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
