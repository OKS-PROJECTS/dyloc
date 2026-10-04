import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'oks-ui'
import { Minus, Plus, X } from 'lucide-react'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'
import { makeProducts } from '../../data/mock.js'

const START = makeProducts(4).map((p, i) => ({ ...p, qty: [1, 2, 1, 3][i] }))

export default function Cart() {
  const [items, setItems] = useState(START)
  const set = (id, delta) =>
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it))
        .filter((it) => it.qty > 0),
    )

  const subtotal = items.reduce((a, it) => a + it.price * it.qty, 0)
  const shipping = subtotal > 150 ? 0 : 9.9
  const tax = subtotal * 0.2

  return (
    <>
      <PageHeader title="Cart" trail={[{ label: 'E-Commerce', to: '/ecommerce/shop' }, { label: 'Cart' }]} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_320px]">
        <Surface>
          <CardHeader title={`${items.length} item${items.length === 1 ? '' : 's'}`} />
          <ul className="divide-y" style={{ borderColor: 'var(--app-border)' }}>
            {items.map((it) => (
              <li key={it.id} className="flex items-center gap-4 px-5 py-4">
                <div className="h-14 w-14 shrink-0 rounded-md" style={{ background: `linear-gradient(135deg, hsl(${(it.seed * 29) % 360} 45% 62%), hsl(${(it.seed * 29 + 40) % 360} 45% 48%))` }} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>{it.name}</p>
                  <p className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>${it.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Button isIconOnly size="sm" variant="bordered" color="default" aria-label="Decrease" onPress={() => set(it.id, -1)}><Minus size={12} /></Button>
                  <span className="w-7 text-center text-[12.5px]" style={{ color: 'var(--app-fg)' }}>{it.qty}</span>
                  <Button isIconOnly size="sm" variant="bordered" color="default" aria-label="Increase" onPress={() => set(it.id, 1)}><Plus size={12} /></Button>
                </div>
                <span className="w-16 text-right text-[12.5px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                  ${(it.price * it.qty).toFixed(2)}
                </span>
                <Button isIconOnly size="sm" variant="ghost" color="default" aria-label="Remove" onPress={() => set(it.id, -it.qty)}><X size={13} /></Button>
              </li>
            ))}
          </ul>
        </Surface>

        <Surface className="h-fit p-5">
          <h2 className="text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>Summary</h2>
          <dl className="mt-3 space-y-2 text-[12.5px]">
            <div className="flex justify-between"><dt style={{ color: 'var(--app-fg-muted)' }}>Subtotal</dt><dd style={{ color: 'var(--app-fg)' }}>${subtotal.toFixed(2)}</dd></div>
            <div className="flex justify-between"><dt style={{ color: 'var(--app-fg-muted)' }}>Shipping</dt><dd style={{ color: 'var(--app-fg)' }}>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd></div>
            <div className="flex justify-between"><dt style={{ color: 'var(--app-fg-muted)' }}>Tax (20%)</dt><dd style={{ color: 'var(--app-fg)' }}>${tax.toFixed(2)}</dd></div>
            <div className="flex justify-between border-t pt-2 text-[13px] font-semibold" style={{ borderColor: 'var(--app-border)', color: 'var(--app-fg-strong)' }}>
              <dt>Total</dt><dd>${(subtotal + shipping + tax).toFixed(2)}</dd>
            </div>
          </dl>
          <Button as={Link} to="/ecommerce/checkout" color="primary" fullWidth className="mt-4">Checkout</Button>
        </Surface>
      </div>
    </>
  )
}
