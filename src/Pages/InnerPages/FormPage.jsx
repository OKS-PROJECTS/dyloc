import { Form, FormFieldSet, Button, toast } from 'oks-ui'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'

/**
 * Config-driven create / edit form.
 * config: { title, subtitle, trail?, sections: [{ title?, fields: FieldConfig[] }], submitLabel? }
 * FieldConfig: { type, name, label, ...FormFieldSet props, colSpan? }
 */
export default function FormPage({ config }) {
  const { title, subtitle, trail, sections, submitLabel = 'Save changes' } = config
  return (
    <>
      <PageHeader
        title={title}
        trail={trail ?? [{ label: 'Home', to: '/dashboards/default' }, { label: title }]}
      />
      <Form
        onSubmit={() => toast.success('Saved')}
        className="mx-auto max-w-3xl space-y-5"
      >
        {sections.map((section, i) => (
          <Surface key={section.title ?? i}>
            {section.title && <CardHeader title={section.title} subtitle={i === 0 ? subtitle : undefined} divider />}
            <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
              {section.fields.map((f) => (
                <FormFieldSet
                  key={f.name}
                  {...f}
                  wrapperClassName={f.colSpan === 2 ? 'sm:col-span-2' : undefined}
                />
              ))}
            </div>
          </Surface>
        ))}
        <div className="flex justify-end gap-2">
          <Button type="reset" variant="bordered" color="default">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            {submitLabel}
          </Button>
        </div>
      </Form>
    </>
  )
}
