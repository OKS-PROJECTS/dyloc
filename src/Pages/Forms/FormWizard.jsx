import { SteppedForm, defineStep, toast } from 'oks-ui'
import { PageHeader, Surface } from '../../Components/ui/index.js'

export default function FormWizard() {
  return (
    <>
      <PageHeader title="Form wizard" trail={[{ label: 'Forms', to: '/forms/elements' }, { label: 'Wizard' }]} />
      <Surface className="mx-auto max-w-2xl p-6">
        <SteppedForm
          headerVariant="dots"
          onSubmit={() => toast.success('Onboarding complete')}
          steps={[
            defineStep({
              key: 'workspace',
              title: 'Workspace',
              description: 'Name your workspace',
              fields: [
                { type: 'text', name: 'workspace', label: 'Workspace name', validation: { rules: { required: true } } },
                { type: 'select', name: 'size', label: 'Team size', options: [
                  { label: 'Just me', value: '1' },
                  { label: '2–10', value: '10' },
                  { label: '11–50', value: '50' },
                  { label: '50+', value: '99' },
                ] },
              ],
            }),
            defineStep({
              key: 'invite',
              title: 'Invite',
              description: 'Add teammates',
              fields: [
                { type: 'email', name: 'invite1', label: 'Teammate email' },
                { type: 'email', name: 'invite2', label: 'Teammate email' },
              ],
            }),
            defineStep({
              key: 'prefs',
              title: 'Preferences',
              fields: [
                { type: 'switch', name: 'digest', label: 'Send me a weekly digest' },
                { type: 'switch', name: 'tips', label: 'Product tips' },
              ],
            }),
          ]}
        />
      </Surface>
    </>
  )
}
