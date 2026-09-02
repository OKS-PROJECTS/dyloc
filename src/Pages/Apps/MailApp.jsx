import { useState } from 'react'
import { Avatar, Button, Chip } from 'oks-ui'
import { Inbox, Send, FileText, Trash2, Star, Reply } from 'lucide-react'
import { PageHeader, Surface } from '../../Components/ui/index.js'
import { avatarUrl } from '../../lib/cx.js'

const FOLDERS = [
  { key: 'inbox', label: 'Inbox', icon: Inbox, count: 5 },
  { key: 'sent', label: 'Sent', icon: Send },
  { key: 'drafts', label: 'Drafts', icon: FileText, count: 2 },
  { key: 'starred', label: 'Starred', icon: Star },
  { key: 'trash', label: 'Trash', icon: Trash2 },
]

const MAIL = [
  { id: 1, from: 'Noah Marsh', seed: 3, subject: 'Q3 supplier invoices', preview: 'I have reconciled the first batch — three still need approval.', time: '09:24', unread: true, tag: 'Finance' },
  { id: 2, from: 'Greenlane Billing', seed: 9, subject: 'Invoice INV-2026014 due soon', preview: 'This is a friendly reminder that your invoice is due in 3 days.', time: '08:10', unread: true, tag: 'Billing' },
  { id: 3, from: 'Mia Vance', seed: 5, subject: 'Pricing page copy', preview: 'Updated the annual discount line as discussed.', time: 'Yesterday', unread: false },
  { id: 4, from: 'Liam Okafor', seed: 7, subject: 'Support summary', preview: '12 tickets resolved, 2 escalated to engineering.', time: 'Yesterday', unread: false, tag: 'Support' },
]

export default function MailApp() {
  const [folder, setFolder] = useState('inbox')
  const [open, setOpen] = useState(MAIL[0])

  return (
    <>
      <PageHeader
        title="Mail"
        trail={[{ label: 'Apps', to: '/apps/mail' }, { label: 'Mail' }]}
        actions={<Button size="sm" color="primary" startContent={<Send size={14} />}>Compose</Button>}
      />
      <Surface className="grid grid-cols-1 overflow-hidden lg:grid-cols-[200px_320px_1fr]" style={{ height: '72vh' }}>
        <nav className="hidden flex-col gap-1 border-r p-3 lg:flex" style={{ borderColor: 'var(--app-border)' }}>
          {FOLDERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFolder(f.key)}
              className="flex items-center gap-2.5 rounded-md px-3 py-2 text-[12.5px]"
              style={{
                background: folder === f.key ? 'var(--app-primary-soft)' : 'transparent',
                color: folder === f.key ? 'var(--app-primary)' : 'var(--app-fg)',
              }}
            >
              <f.icon size={15} />
              <span className="flex-1 text-left">{f.label}</span>
              {f.count && <span style={{ color: 'var(--app-fg-muted)' }}>{f.count}</span>}
            </button>
          ))}
        </nav>

        <ul className="overflow-y-auto border-r" style={{ borderColor: 'var(--app-border)' }}>
          {MAIL.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setOpen(m)}
                className="flex w-full flex-col gap-1 border-b px-4 py-3 text-left"
                style={{
                  borderColor: 'var(--app-border)',
                  background: open.id === m.id ? 'var(--app-primary-soft)' : m.unread ? 'var(--app-surface-2)' : 'transparent',
                }}
              >
                <span className="flex items-center justify-between">
                  <span className="text-[12.5px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>{m.from}</span>
                  <span className="text-[10.5px]" style={{ color: 'var(--app-fg-muted)' }}>{m.time}</span>
                </span>
                <span className="text-[12px]" style={{ color: 'var(--app-fg)' }}>{m.subject}</span>
                <span className="line-clamp-1 text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>{m.preview}</span>
              </button>
            </li>
          ))}
        </ul>

        <article className="hidden min-w-0 flex-col overflow-y-auto p-6 lg:flex">
          <div className="flex items-center gap-3">
            <Avatar src={avatarUrl(open.seed)} name={open.from} size={40} showFallback />
            <div className="min-w-0">
              <p className="text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>{open.from}</p>
              <p className="text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>to me · {open.time}</p>
            </div>
            {open.tag && <Chip size="sm" variant="soft" color="primary" className="ml-auto">{open.tag}</Chip>}
          </div>
          <h2 className="mt-4 text-[16px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>{open.subject}</h2>
          <p className="mt-3 text-[13px] leading-relaxed" style={{ color: 'var(--app-fg)' }}>
            {open.preview} Lorem ipsum aside, this pane is a genuine reading view — the folder
            list and message list are <code>hidden lg:flex</code> on small screens so the list
            pane stands alone on mobile.
          </p>
          <div className="mt-6 flex gap-2">
            <Button size="sm" color="primary" startContent={<Reply size={13} />}>Reply</Button>
            <Button size="sm" variant="bordered" color="default">Forward</Button>
          </div>
        </article>
      </Surface>
    </>
  )
}
