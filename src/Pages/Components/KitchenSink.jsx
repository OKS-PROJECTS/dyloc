import { useState } from 'react'
import {
  Button,
  Modal,
  Drawer,
  Form,
  FormFieldSet,
  LoopFields,
  loopGroupToArray,
  TextField,
  Switch,
  RangeField,
  toast,
  validateForm,
  VALIDATION_RULES,
} from 'oks-ui'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'

export default function KitchenSink() {
  const [modal, setModal] = useState(false)
  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <PageHeader
        title="Kitchen sink"
        trail={[{ label: 'Components', to: '/components' }, { label: 'Kitchen sink' }]}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Surface>
          <CardHeader title="Overlays" subtitle="Modal · Drawer" />
          <div className="flex flex-wrap gap-2 p-5">
            <Button color="primary" onPress={() => setModal(true)}>Open modal</Button>
            <Button variant="bordered" color="default" onPress={() => setDrawer(true)}>Open drawer</Button>
          </div>
        </Surface>

        <Surface>
          <CardHeader title="Validation utils" subtitle="validateForm + VALIDATION_RULES" />
          <div className="p-5">
            <Form
              onSubmit={(data) => {
                const errors = validateForm(data, {
                  email: { rules: { required: true, email: true } },
                })
                if (Object.keys(errors).length) toast.error('Fix the errors')
                else toast.success('Valid')
              }}
              className="space-y-3"
            >
              <FormFieldSet type="email" name="email" label="Email" placeholder="you@company.com" />
              <p className="text-[11.5px]" style={{ color: 'var(--app-fg-subtle)' }}>
                Runtime rules: {Object.keys(VALIDATION_RULES).join(', ')}
              </p>
              <Button type="submit" size="sm" color="primary">Validate</Button>
            </Form>
          </div>
        </Surface>

        <Surface className="lg:col-span-2">
          <CardHeader title="Repeatable fields" subtitle="LoopFields + loopGroupToArray" />
          <div className="p-5">
            <Form
              onSubmit={(data) => toast.success(`${loopGroupToArray(data, 'contacts').length} contacts`)}
              className="space-y-3"
            >
              <LoopFields group="contacts" minItems={1} maxItems={4} addTitle="Add contact">
                {(index) => (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <TextField name={`contacts.${index}.name`} placeholder="Name" size="sm" />
                    <TextField name={`contacts.${index}.email`} type="email" placeholder="Email" size="sm" />
                  </div>
                )}
              </LoopFields>
              <Button type="submit" size="sm" color="primary">Submit</Button>
            </Form>
          </div>
        </Surface>

        <Surface>
          <CardHeader title="Controls" subtitle="Switch · RangeField" />
          <div className="space-y-4 p-5">
            <Switch showStateText checkedText="On" uncheckedText="Off" defaultChecked aria-label="Feature" />
            <RangeField selection="range" min={0} max={100} defaultValue={{ min: 20, max: 80 }} showValue />
          </div>
        </Surface>
      </div>

      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        title="Confirm action"
        role="alertdialog"
        actions={
          <>
            <Button variant="bordered" color="default" onPress={() => setModal(false)}>Cancel</Button>
            <Button color="danger" onPress={() => { setModal(false); toast.success('Done') }}>Delete</Button>
          </>
        }
      >
        <p className="text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
          This is an <code>alertdialog</code> — use it for destructive confirmations.
        </p>
      </Modal>

      <Drawer isOpen={drawer} onClose={() => setDrawer(false)} position="right" title="Panel">
        <p className="text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>A slide-in Drawer.</p>
      </Drawer>
    </>
  )
}
