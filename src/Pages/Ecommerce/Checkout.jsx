import { useNavigate } from 'react-router-dom'
import { SteppedForm, defineStep, FormFieldSet, PhoneField, SelectField, toast } from 'oks-ui'
import { PageHeader, Surface } from '../../Components/ui/index.js'

const grid = 'grid grid-cols-1 gap-4 sm:grid-cols-2'

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
              fields: ['name', 'email'],
              content: (
                <div className={grid}>
                  <FormFieldSet type="text" name="name" label="Full name" wrapperClassName="sm:col-span-2" validation={{ rules: { required: true } }} />
                  <FormFieldSet type="email" name="email" label="Email" validation={{ rules: { required: true, email: true } }} />
                  <PhoneField name="phone" label="Phone" defaultCountryCode="US" />
                </div>
              ),
            }),
            defineStep({
              key: 'shipping',
              title: 'Shipping',
              fields: ['address'],
              content: (
                <div className={grid}>
                  <FormFieldSet type="text" name="address" label="Address" wrapperClassName="sm:col-span-2" validation={{ rules: { required: true } }} />
                  <FormFieldSet type="text" name="city" label="City" />
                  <FormFieldSet type="text" name="postcode" label="Postal code" />
                  <SelectField
                    name="method"
                    label="Shipping method"
                    wrapperClassName="sm:col-span-2"
                    defaultValue="standard"
                    options={[
                      { label: 'Standard (3–5 days) — free', value: 'standard' },
                      { label: 'Express (1–2 days) — $14', value: 'express' },
                    ]}
                  />
                </div>
              ),
            }),
            defineStep({
              key: 'payment',
              title: 'Payment',
              fields: ['cardName', 'cardNumber'],
              content: (
                <div className={grid}>
                  <FormFieldSet type="text" name="cardName" label="Name on card" wrapperClassName="sm:col-span-2" validation={{ rules: { required: true } }} />
                  <FormFieldSet type="text" name="cardNumber" label="Card number" wrapperClassName="sm:col-span-2" placeholder="4242 4242 4242 4242" validation={{ rules: { required: true } }} />
                  <FormFieldSet type="text" name="expiry" label="Expiry" placeholder="MM / YY" />
                  <FormFieldSet type="text" name="cvc" label="CVC" placeholder="123" />
                </div>
              ),
            }),
          ]}
        />
      </Surface>
    </>
  )
}
