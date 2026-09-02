import { useState } from 'react'
import { Board, Checkbox, Chip, Button, TextField } from 'oks-ui'
import { Plus } from 'lucide-react'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'

const INITIAL = [
  { id: 't1', col: 'todo', title: 'Reconcile Q3 supplier invoices', priority: 'High' },
  { id: 't2', col: 'todo', title: 'Draft the 360° sales overview deck', priority: 'Medium' },
  { id: 't3', col: 'doing', title: 'Customize onboarding email sequence', priority: 'Medium' },
  { id: 't4', col: 'doing', title: 'Respond to the escalated support thread', priority: 'High' },
  { id: 't5', col: 'done', title: 'Share the pipeline report', priority: 'Low' },
  { id: 't6', col: 'done', title: 'Publish the summer pricing update', priority: 'Medium' },
]

const PRIORITY = { High: 'danger', Medium: 'warning', Low: 'default' }

export default function Todo() {
  const [items, setItems] = useState(INITIAL)
  const [quick, setQuick] = useState('')

  const add = () => {
    if (!quick.trim()) return
    setItems((p) => [...p, { id: `t${Date.now()}`, col: 'todo', title: quick, priority: 'Medium' }])
    setQuick('')
  }

  return (
    <>
      <PageHeader title="To-Do" trail={[{ label: 'Apps', to: '/apps/todo' }, { label: 'To-Do' }]} />

      <Surface className="mb-5 p-4">
        <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); add() }}>
          <TextField value={quick} onChange={setQuick} placeholder="Add a task…" size="sm" className="flex-1" />
          <Button type="submit" size="sm" color="primary" startContent={<Plus size={14} />}>Add</Button>
        </form>
      </Surface>

      <Surface className="p-4">
        <CardHeader title="Board" subtitle="Drag cards between columns, or use the keyboard" className="px-1 pt-1" />
        <div className="mt-2 h-[460px]">
          <Board
            columns={[
              { id: 'todo', title: 'To do' },
              { id: 'doing', title: 'In progress' },
              { id: 'done', title: 'Done' },
            ]}
            items={items}
            getItemId={(i) => i.id}
            getItemColumn={(i) => i.col}
            onItemMove={({ itemId, to }) =>
              setItems((prev) => prev.map((it) => (it.id === itemId ? { ...it, col: to.columnId } : it)))
            }
            renderCard={(i) => (
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Checkbox defaultChecked={i.col === 'done'} aria-label={i.title} />
                  <span className="text-[12.5px]" style={{ color: 'var(--app-fg)' }}>{i.title}</span>
                </div>
                <Chip size="sm" variant="soft" color={PRIORITY[i.priority]}>{i.priority}</Chip>
              </div>
            )}
          />
        </div>
      </Surface>
    </>
  )
}
