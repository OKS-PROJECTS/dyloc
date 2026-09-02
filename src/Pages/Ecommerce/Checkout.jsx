import { useNavigate } from 'react-router-dom'
import { SteppedForm, defineStep, toast } from 'oks-ui'
import { PageHeader, Surface } from '../../Components/ui/index.js'

export default function Checkout() {
  const navigate = useNavigate()
  return (
    <>
      <PageHeader title="Checkout" trail={[{ label: 'E-Commerce', to: '/ecommerce/cart' }, { label: 'Checkout' }]} />
      <Surface className="mx-auto max-w-2xl p-6">
        <SteppedForm
          headerVariant="progress"
          submitLabel="Place order"
          onSubmit={() => {
            toast.success('Order placed')
            setTimeout(() => navigate('/ecommerce/shop'), 700)
          }}
          steps={[
            defineStep({
              key: 'contact',
              title: 'Contact',
              fields: [
                { type: 'text', name: 'name', label: 'Full name', validation: { rules: { required: true } } },
                { type: 'email', name: 'email', label: 'Email', validation: { rules: { required: true, email: true } } },
                { type: 'phone', name: 'phone', label: 'Phone', defaultCountryCode: 'US' },
              ],
            }),
            defineStep({
              key: 'shipping',
              title: 'Shipping',
              fields: [
                { type: 'text', name: 'address', label: 'Address', validation: { rules: { required: true } } },
                { type: 'text', name: 'city', label: 'City' },
                { type: 'text', name: 'postcode', label: 'Postal code' },
                {
                  type: 'select',
                  name: 'method',
                  label: 'Shipping method',
                  options: [
                    { label: 'Standard (3–5 days) — free', value: 'standard' },
                    { label: 'Express (1–2 days) — $14', value: 'express' },
                  ],
                },
              ],
            }),
            defineStep({
              key: 'payment',
              title: 'Payment',
              fields: [
                { type: 'text', name: 'cardName', label: 'Name on card', validation: { rules: { required: true } } },
                { type: 'text', name: 'cardNumber', label: 'Card number', placeholder: '•••• •••• •••• ••••' },
                { type: 'text', name: 'expiry', label: 'Expiry' },
                { type: 'text', name: 'cvc', label: 'CVC' },
              ],
            }),
          ]}
        />
      </Surface>
    </>
  )
}
