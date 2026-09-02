import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Chip, SegmentedControl, RangeField } from 'oks-ui'
import { ShoppingCart } from 'lucide-react'
import { PageHeader, Surface } from '../../Components/ui/index.js'
import { makeProducts } from '../../data/mock.js'

const PRODUCTS = makeProducts(12)

export default function Shop() {
  const [sort, setSort] = useState('popular')
  const rows = [...PRODUCTS].sort((a, b) =>
    sort === 'price' ? a.price - b.price : sort === 'new' ? b.seed - a.seed : b.sold - a.sold,
  )

  return (
    <>
      <PageHeader
        title="Shop"
        trail={[{ label: 'E-Commerce', to: '/ecommerce/shop' }, { label: 'Shop' }]}
        actions={
          <SegmentedControl
            aria-label="Sort"
            size="sm"
            value={sort}
            onChange={setSort}
            options={[
              { label: 'Popular', value: 'popular' },
              { label: 'Newest', value: 'new' },
              { label: 'Price', value: 'price' },
            ]}
          />
        }
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[220px_1fr]">
        <Surface className="hidden h-fit p-5 lg:block">
          <p className="text-[12px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>Price</p>
          <RangeField selection="range" min={0} max={300} defaultValue={{ min: 20, max: 220 }} showValue className="mt-3" />
          <p className="mt-5 text-[12px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>Category</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {['Photography', 'Audio', 'Networking', 'Home', 'Outdoor'].map((c) => (
              <Chip key={c} size="sm" variant="bordered" color="default">{c}</Chip>
            ))}
          </div>
        </Surface>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {rows.map((p) => (
            <Surface key={p.id} className="flex flex-col overflow-hidden">
              <div className="aspect-square w-full" style={{ background: `linear-gradient(135deg, hsl(${(p.seed * 29) % 360} 45% 62%), hsl(${(p.seed * 29 + 40) % 360} 45% 48%))` }} />
              <div className="flex flex-1 flex-col p-3">
                <Link to="/ecommerce/product" className="text-[12.5px] font-medium hover:underline" style={{ color: 'var(--app-fg-strong)' }}>
                  {p.name}
                </Link>
                <p className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>{p.category}</p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>${p.price.toFixed(2)}</span>
                  <Button isIconOnly size="sm" color="primary" variant="soft" aria-label="Add to cart"><ShoppingCart size={13} /></Button>
                </div>
              </div>
            </Surface>
          ))}
        </div>
      </div>
    </>
  )
}
