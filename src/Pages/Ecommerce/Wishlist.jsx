import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'oks-ui'
import { Heart, ShoppingCart } from 'lucide-react'
import { EmptyState } from 'oks-ui'
import { PageHeader, Surface } from '../../Components/ui/index.js'
import { makeProducts } from '../../data/mock.js'

const START = makeProducts(6)

export default function Wishlist() {
  const [items, setItems] = useState(START)

  return (
    <>
      <PageHeader title="Wishlist" trail={[{ label: 'E-Commerce', to: '/ecommerce/shop' }, { label: 'Wishlist' }]} />
      {items.length === 0 ? (
        <Surface className="flex min-h-[40vh] items-center justify-center p-8">
          <EmptyState
            icon={<Heart size={24} />}
            title="Your wishlist is empty"
            description="Save products you love and find them here later."
            actions={<Button as={Link} to="/ecommerce/shop" color="primary" variant="soft">Browse the shop</Button>}
          />
        </Surface>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <Surface key={p.id} className="flex flex-col overflow-hidden">
              <div className="aspect-square w-full" style={{ background: `linear-gradient(135deg, hsl(${(p.seed * 29) % 360} 45% 62%), hsl(${(p.seed * 29 + 40) % 360} 45% 48%))` }} />
              <div className="flex flex-1 flex-col p-3">
                <p className="text-[12.5px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>{p.name}</p>
                <p className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>${p.price.toFixed(2)}</p>
                <div className="mt-auto flex gap-2 pt-3">
                  <Button size="sm" color="primary" variant="soft" fullWidth startContent={<ShoppingCart size={13} />}>Add</Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="bordered"
                    color="default"
                    aria-label="Remove"
                    onPress={() => setItems((prev) => prev.filter((x) => x.id !== p.id))}
                  >
                    <Heart size={13} />
                  </Button>
                </div>
              </div>
            </Surface>
          ))}
        </div>
      )}
    </>
  )
}
