import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { NAV } from '../../data/nav.js'
import { cx } from '../../lib/cx.js'
import Logo from './Logo.jsx'

const rowBase = (depth) =>
  cx(
    'group flex items-center gap-2.5 rounded-md px-3 py-2 text-[12.5px] transition-colors',
    depth === 0 ? 'font-medium' : 'font-normal',
  )

function Chevron({ open }) {
  return (
    <ChevronRight
      size={14}
      className={cx('ml-auto shrink-0 transition-transform', open && 'rotate-90')}
    />
  )
}

function NavLeaf({ node, depth, collapsed, onNavigate }) {
  return (
    <NavLink
      to={node.to}
      end={node.to === '/'}
      onClick={onNavigate}
      className={({ isActive }) =>
        cx(rowBase(depth), 'dyloc-nav-row', isActive && 'dyloc-nav-row--active')
      }
      style={({ isActive }) => ({
        color: isActive ? 'var(--app-menu-active-fg)' : 'var(--app-menu-fg)',
        background: isActive ? 'var(--app-menu-active-bg)' : 'transparent',
        paddingLeft: depth > 0 ? 12 + depth * 12 : undefined,
      })}
    >
      {node.icon ? (
        <node.icon size={17} className="shrink-0" />
      ) : depth > 0 ? (
        <span className="ml-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'currentColor', opacity: 0.4 }} />
      ) : null}
      {!collapsed && <span className="truncate">{node.label}</span>}
    </NavLink>
  )
}

function NavGroup({ node, depth, collapsed, onNavigate }) {
  const { pathname } = useLocation()
  const pathActive = collectTos(node).some((to) => pathname === to || pathname.startsWith(to + '/'))
  const [manual, setManual] = useState(null)
  const open = manual ?? pathActive

  return (
    <div className={cx(collapsed && depth === 0 && 'dyloc-flyout-anchor relative')}>
      <button
        type="button"
        onClick={() => setManual(!open)}
        aria-expanded={open}
        className={cx(rowBase(depth), 'dyloc-nav-row w-full')}
        style={{
          color: pathActive ? 'var(--app-menu-active-fg)' : 'var(--app-menu-fg)',
          paddingLeft: depth > 0 ? 12 + depth * 12 : undefined,
        }}
      >
        {node.icon ? (
          <node.icon size={17} className="shrink-0" />
        ) : (
          <span className="ml-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'currentColor', opacity: 0.4 }} />
        )}
        {!collapsed && <span className="truncate">{node.label}</span>}
        {!collapsed && <Chevron open={open} />}
      </button>

      {!collapsed && open && (
        <div className="mt-0.5 space-y-0.5">
          {node.children.map((c) => (
            <NavNode key={c.label} node={c} depth={depth + 1} collapsed={false} onNavigate={onNavigate} />
          ))}
        </div>
      )}

      {collapsed && depth === 0 && (
        <div className="dyloc-flyout">
          <p className="mb-1 px-2 text-[11px] font-semibold" style={{ color: 'var(--app-menu-heading)' }}>
            {node.label}
          </p>
          <div className="space-y-0.5">
            {node.children.map((c) => (
              <NavNode key={c.label} node={c} depth={1} collapsed={false} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function NavNode(props) {
  return props.node.children ? <NavGroup {...props} /> : <NavLeaf {...props} />
}

function collectTos(node) {
  if (node.to) return [node.to]
  if (node.children) return node.children.flatMap(collectTos)
  return []
}

export default function Sidebar({ collapsed = false, onNavigate }) {
  return (
    <nav
      aria-label="Primary"
      className="flex h-full flex-col overflow-y-auto"
      style={{ background: 'var(--app-menu-bg)' }}
    >
      <div
        className="flex h-16 shrink-0 items-center px-5"
        style={{ borderBottom: '1px solid var(--app-menu-border)' }}
      >
        <Logo showWordmark={!collapsed} markSize={24} />
      </div>
      <div className="flex-1 space-y-6 px-3 py-4">
        {NAV.map((section) => (
          <div key={section.heading} className="space-y-1">
            {!collapsed && (
              <p
                className="px-3 pb-1 text-[10.5px] font-semibold uppercase tracking-wider"
                style={{ color: 'var(--app-menu-heading)' }}
              >
                {section.heading}
              </p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <NavNode key={item.label} node={item} depth={0} collapsed={collapsed} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}
