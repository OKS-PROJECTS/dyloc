import { Tabs, Tab, Form, FormFieldSet, Button, Divider, toast } from 'oks-ui'
import { PageHeader, Surface, ToggleRow } from '../../Components/ui/index.js'
import { useIsDesktop } from '../../lib/useMediaQuery.js'

/**
 * Config-driven settings panel.
 * config: { title, trail?, tabs: [{ key, title, groups: [{ title, description?, fields }] }] }
 * fields: FormFieldSet configs, or { type: 'switch', ... } toggles.
 */
export default function SettingsPage({ config }) {
  const { title, trail, tabs } = config
  const isDesktop = useIsDesktop()

  return (
    <>
      <PageHeader
        title={title}
        trail={trail ?? [{ label: 'Settings', to: '/settings/account' }, { label: title }]}
      />
      <Surface className="p-2 sm:p-4">
        <Tabs
          aria-label="Settings sections"
          isVertical={isDesktop}
          variant={isDesktop ? 'light' : 'underlined'}
          color="primary"
          classNames={{
            tabList: isDesktop
              ? 'min-w-[180px] border-r pr-2 [border-color:var(--app-border)]'
              : undefined,
            panel: 'flex-1',
          }}
        >
          {tabs.map((t) => (
            <Tab key={t.key} title={t.title}>
              <Form onSubmit={() => toast.success('Settings saved')} className="max-w-2xl space-y-6 p-4 lg:pl-6">
                {t.groups.map((g, gi) => (
                  <div key={g.title}>
                    {gi > 0 && <Divider className="mb-5" />}
                    <h3 className="text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
                      {g.title}
                    </h3>
                    {g.description && (
                      <p className="mt-0.5 mb-3 text-[12px]" style={{ color: 'var(--app-fg-muted)' }}>
                        {g.description}
                      </p>
                    )}
                    <div className="mt-3 space-y-4">
                      {g.fields.map((f) =>
                        f.type === 'switch' ? (
                          <ToggleRow
                            key={f.name}
                            name={f.name}
                            label={f.label}
                            hint={f.hint}
                            defaultChecked={f.defaultChecked}
                          />
                        ) : (
                          <FormFieldSet key={f.name} {...f} />
                        ),
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex justify-end">
                  <Button type="submit" color="primary">Save changes</Button>
                </div>
              </Form>
            </Tab>
          ))}
        </Tabs>
      </Surface>
    </>
  )
}
