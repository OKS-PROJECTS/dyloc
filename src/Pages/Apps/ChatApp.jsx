import { useState } from 'react'
import { Avatar, Button, Message, MessageList, TextField } from 'oks-ui'
import { Send } from 'lucide-react'
import { PageHeader, Surface } from '../../Components/ui/index.js'
import { avatarUrl } from '../../lib/cx.js'

const THREADS = [
  { id: 1, name: 'Ops team', seed: 3, last: '3–5 business days from Lisbon', unread: 2 },
  { id: 2, name: 'Mia Vance', seed: 5, last: 'Pushed the pricing fix', unread: 0 },
  { id: 3, name: 'Liam Okafor', seed: 7, last: 'Tickets cleared for today', unread: 0 },
  { id: 4, name: 'Suppliers', seed: 9, last: 'Invoice attached', unread: 1 },
]

const SEED_MSGS = [
  { author: 'Noah Marsh', seed: 3, at: '09:24', align: 'start', text: 'Can you confirm the shipping window for the EU orders?' },
  { author: 'Ava Reid', seed: 1, at: '09:26', align: 'end', text: 'Yes — 3 to 5 business days from Lisbon.', status: 'read' },
  { author: 'Noah Marsh', seed: 3, at: '09:27', align: 'start', text: 'Perfect, I will update the storefront copy.' },
]

export default function ChatApp() {
  const [active, setActive] = useState(1)
  const [msgs, setMsgs] = useState(SEED_MSGS)
  const [draft, setDraft] = useState('')

  const send = () => {
    if (!draft.trim()) return
    setMsgs((m) => [...m, { author: 'Ava Reid', seed: 1, at: 'now', align: 'end', text: draft, status: 'sent' }])
    setDraft('')
  }

  return (
    <>
      <PageHeader title="Chat" trail={[{ label: 'Apps', to: '/apps/chat' }, { label: 'Chat' }]} />
      <Surface className="grid grid-cols-1 overflow-hidden lg:grid-cols-[280px_1fr]" style={{ height: '70vh' }}>
        <div className="hidden flex-col border-r lg:flex" style={{ borderColor: 'var(--app-border)' }}>
          <div className="p-3">
            <TextField size="sm" placeholder="Search conversations…" />
          </div>
          <ul className="flex-1 overflow-y-auto">
            {THREADS.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => setActive(t.id)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left"
                  style={{ background: active === t.id ? 'var(--app-primary-soft)' : 'transparent' }}
                >
                  <Avatar src={avatarUrl(t.seed)} name={t.name} size={36} showFallback />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[12.5px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>{t.name}</span>
                    <span className="block truncate text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>{t.last}</span>
                  </span>
                  {t.unread > 0 && (
                    <span className="rounded-full px-1.5 text-[10px] font-semibold text-white" style={{ background: 'var(--app-primary)' }}>{t.unread}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-w-0 flex-col">
          <div className="flex items-center gap-3 border-b px-4 py-3" style={{ borderColor: 'var(--app-border)' }}>
            <Avatar src={avatarUrl(3)} name="Ops team" size={34} showFallback />
            <p className="text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>Ops team</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <MessageList>
              {msgs.map((m, i) => (
                <Message key={i} author={m.author} avatar={avatarUrl(m.seed)} timestamp={m.at} align={m.align} status={m.status}>
                  {m.text}
                </Message>
              ))}
            </MessageList>
          </div>
          <form
            className="flex items-center gap-2 border-t p-3"
            style={{ borderColor: 'var(--app-border)' }}
            onSubmit={(e) => { e.preventDefault(); send() }}
          >
            <TextField value={draft} onChange={setDraft} placeholder="Write a message…" className="flex-1" size="sm" />
            <Button type="submit" isIconOnly color="primary" aria-label="Send"><Send size={15} /></Button>
          </form>
        </div>
      </Surface>
    </>
  )
}
