import { useState } from 'react'
import { Modal, SegmentedControl, Chip } from 'oks-ui'
import { PageHeader, Surface } from '../../Components/ui/index.js'

// Deterministic gradient "photos" — no external image dependency for the grid.
const ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: ['Warehouse', 'Studio', 'Storefront', 'Team', 'Product', 'Event'][i % 6] + ' ' + (i + 1),
  category: ['Operations', 'Brand', 'Product'][i % 3],
  hue: (i * 37) % 360,
}))

export default function GalleryApp() {
  const [cat, setCat] = useState('all')
  const [open, setOpen] = useState(null)
  const shown = cat === 'all' ? ITEMS : ITEMS.filter((i) => i.category === cat)

  return (
    <>
      <PageHeader
        title="Gallery"
        trail={[{ label: 'Apps', to: '/apps/gallery' }, { label: 'Gallery' }]}
        actions={
          <SegmentedControl
            aria-label="Category"
            size="sm"
            value={cat}
            onChange={setCat}
            options={[
              { label: 'All', value: 'all' },
              { label: 'Operations', value: 'Operations' },
              { label: 'Brand', value: 'Brand' },
              { label: 'Product', value: 'Product' },
            ]}
          />
        }
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {shown.map((it) => (
          <Surface key={it.id} className="overflow-hidden">
            <button type="button" onClick={() => setOpen(it)} className="block w-full text-left">
              <div
                className="aspect-[4/3] w-full"
                style={{ background: `linear-gradient(135deg, hsl(${it.hue} 55% 60%), hsl(${(it.hue + 40) % 360} 55% 45%))` }}
              />
              <div className="p-3">
                <p className="text-[12.5px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>{it.title}</p>
                <Chip size="sm" variant="soft" color="primary" className="mt-1">{it.category}</Chip>
              </div>
            </button>
          </Surface>
        ))}
      </div>

      <Modal isOpen={!!open} onClose={() => setOpen(null)} title={open?.title} size="lg">
        {open && (
          <div
            className="aspect-video w-full rounded-md"
            style={{ background: `linear-gradient(135deg, hsl(${open.hue} 55% 60%), hsl(${(open.hue + 40) % 360} 55% 45%))` }}
          />
        )}
      </Modal>
    </>
  )
}
