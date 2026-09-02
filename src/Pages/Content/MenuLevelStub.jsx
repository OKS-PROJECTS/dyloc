import { PageHeader, Surface } from '../../Components/ui/index.js'

export default function MenuLevelStub({ label }) {
  return (
    <>
      <PageHeader
        title={label}
        trail={[{ label: 'Multi Level', to: '/menu-levels/level-1' }, { label }]}
      />
      <Surface className="p-8">
        <p className="text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
          This route demonstrates the sidebar's multi-level nesting. <strong>{label}</strong> sits
          {label.startsWith('Level 3') ? ' three levels deep' : label.startsWith('Level 2') ? ' two levels deep' : ' at the top level'} in
          the navigation tree — the recursive <code>Sidebar</code> renders any depth, and the collapsed
          rail shows child groups in a hover flyout.
        </p>
      </Surface>
    </>
  )
}
