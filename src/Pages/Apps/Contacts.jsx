import { useState } from 'react'
import { Avatar, Button, Chip, TextField } from 'oks-ui'
import { Mail, Phone, Search, Plus } from 'lucide-react'
import { PageHeader, Surface } from '../../Components/ui/index.js'
import { avatarUrl } from '../../lib/cx.js'
import { makeCustomers } from '../../data/mock.js'

const CONTACTS = makeCustomers(24)

export default function Contacts() {
  const [q, setQ] = useState('')
  const rows = q
    ? CONTACTS.filter((c) => `${c.name} ${c.company} ${c.city}`.toLowerCase().includes(q.toLowerCase()))
    : CONTACTS

  return (
    <>
      <PageHeader
        title="Contacts"
        trail={[{ label: 'Apps', to: '/apps/contacts' }, { label: 'Contacts' }]}
        actions={
          <>
            <TextField
              type="search"
              size="sm"
              placeholder="Search contacts…"
              value={q}
              startIcon={<Search size={14} />}
              onChange={setQ}
              className="w-48"
            />
            <Button size="sm" color="primary" startContent={<Plus size={14} />}>Add</Button>
          </>
        }
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rows.map((c) => (
          <Surface key={c.id} className="flex flex-col items-center p-5 text-center">
            <Avatar src={avatarUrl(c.seed)} name={c.name} size={64} showFallback status={c.status === 'Active' ? 'online' : 'offline'} />
            <p className="mt-3 text-[13px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>{c.name}</p>
            <p className="text-[11.5px]" style={{ color: 'var(--app-fg-muted)' }}>{c.company} · {c.city}</p>
            <Chip size="sm" variant="soft" color={c.status === 'Active' ? 'success' : 'default'} className="mt-2">{c.status}</Chip>
            <div className="mt-4 flex gap-2">
              <Button isIconOnly size="sm" variant="bordered" color="default" aria-label="Email"><Mail size={14} /></Button>
              <Button isIconOnly size="sm" variant="bordered" color="default" aria-label="Call"><Phone size={14} /></Button>
            </div>
          </Surface>
        ))}
      </div>
    </>
  )
}
