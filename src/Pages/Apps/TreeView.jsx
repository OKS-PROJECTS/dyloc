import { useState } from 'react'
import { ChevronRight, Folder, FileText } from 'lucide-react'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'
import { cx } from '../../lib/cx.js'

// oks-ui ships no data-tree (only nav) — composed recursively here.
const TREE = [
  {
    name: 'src', children: [
      { name: 'Components', children: [
        { name: 'Commom', children: [{ name: 'Sidebar.jsx' }, { name: 'Header.jsx' }, { name: 'InnerTemplate.jsx' }] },
        { name: 'ui', children: [{ name: 'Surface.jsx' }, { name: 'DataTable.jsx' }, { name: 'ChartCard.jsx' }] },
      ] },
      { name: 'Pages', children: [{ name: 'Dashboards' }, { name: 'InnerPages' }, { name: 'Apps' }] },
      { name: 'data', children: [{ name: 'nav.js' }, { name: 'mock.js' }, { name: 'lists.jsx' }] },
      { name: 'styles', children: [{ name: 'theme.css' }] },
    ],
  },
]

function Node({ node, depth }) {
  const [open, setOpen] = useState(depth < 1)
  const isFolder = !!node.children
  return (
    <li>
      <button
        type="button"
        onClick={() => isFolder && setOpen((o) => !o)}
        className="flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-left text-[12.5px] hover:bg-[var(--app-neutral-soft)]"
        style={{ paddingLeft: 8 + depth * 16, color: 'var(--app-fg)' }}
      >
        {isFolder ? (
          <ChevronRight size={13} className={cx('transition-transform', open && 'rotate-90')} />
        ) : (
          <span className="w-[13px]" />
        )}
        {isFolder ? (
          <Folder size={14} style={{ color: 'var(--app-primary)' }} />
        ) : (
          <FileText size={14} style={{ color: 'var(--app-fg-muted)' }} />
        )}
        {node.name}
      </button>
      {isFolder && open && (
        <ul>
          {node.children.map((c) => (
            <Node key={c.name} node={c} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default function TreeView() {
  return (
    <>
      <PageHeader title="Tree view" trail={[{ label: 'Apps', to: '/apps/tree-view' }, { label: 'Tree View' }]} />
      <Surface className="max-w-xl">
        <CardHeader title="Project files" subtitle="Recursive disclosure — composed, oks-ui ships no data tree" />
        <ul className="p-3">
          {TREE.map((n) => (
            <Node key={n.name} node={n} depth={0} />
          ))}
        </ul>
      </Surface>
    </>
  )
}
