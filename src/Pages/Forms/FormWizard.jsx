import { SteppedForm, defineStep, FormFieldSet, SelectField, toast } from 'oks-ui'
import { PageHeader, Surface, ToggleRow } from '../../Components/ui/index.js'

const grid = 'grid grid-cols-1 gap-4 sm:grid-cols-2'

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
              fields: ['workspace'],
              content: (
                <div className={grid}>
                  <FormFieldSet type="text" name="workspace" label="Workspace name" wrapperClassName="sm:col-span-2" validation={{ rules: { required: true } }} />
                  <SelectField
                    name="size"
                    label="Team size"
                    wrapperClassName="sm:col-span-2"
                    defaultValue="10"
                    options={[
                      { label: 'Just me', value: '1' },
                      { label: '2–10', value: '10' },
                      { label: '11–50', value: '50' },
                      { label: '50+', value: '99' },
                    ]}
                  />
                </div>
              ),
            }),
            defineStep({
              key: 'invite',
              title: 'Invite',
              description: 'Add teammates',
              content: (
                <div className="space-y-4">
                  <FormFieldSet type="email" name="invite1" label="Teammate email" />
                  <FormFieldSet type="email" name="invite2" label="Teammate email" />
                  <FormFieldSet type="email" name="invite3" label="Teammate email" />
                </div>
              ),
            }),
            defineStep({
              key: 'prefs',
              title: 'Preferences',
              content: (
                <div className="space-y-4">
                  <ToggleRow name="digest" label="Weekly digest" hint="A Monday summary of activity" defaultChecked />
                  <ToggleRow name="tips" label="Product tips" hint="Occasional emails about new features" />
                </div>
              ),
            }),
          ]}
        />
      </Surface>
    </>
  )
}
