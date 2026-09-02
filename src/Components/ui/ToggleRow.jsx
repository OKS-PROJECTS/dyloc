import { Switch } from 'oks-ui'

/** A label + hint on the left, a Switch on the right. Keeps the oks-ui
 *  SwitchField from stretching and collapsing the text (it renders wide). */
export function ToggleRow({ label, hint, icon: Icon, defaultChecked, checked, onChange, name }) {
  return (
    <div className="flex items-center gap-4">
      {Icon && (
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
          style={{ background: 'var(--app-primary-soft)', color: 'var(--app-primary)' }}
        >
          <Icon size={16} />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-[12.5px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>
          {label}
        </p>
        {hint && (
          <p className="text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>
            {hint}
          </p>
        )}
      </div>
      <div className="shrink-0">
        <Switch
          name={name}
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={onChange}
          aria-label={typeof label === 'string' ? label : undefined}
        />
      </div>
    </div>
  )
}
