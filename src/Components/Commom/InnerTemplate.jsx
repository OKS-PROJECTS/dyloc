import { Suspense, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Drawer } from 'oks-ui'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useIsDesktop } from '../../lib/useMediaQuery.js'
import { PageTransition } from '../ui/PageTransition.jsx'
import { PageSkeleton } from '../ui/PageSkeleton.jsx'

export default function InnerTemplate() {
  const { pathname } = useLocation()
  const isDesktop = useIsDesktop()
  const mainRef = useRef(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  // scroll container is <main>, not the window — reset it on navigation,
  // and make sure the mobile drawer never survives a route change
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 })
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false)
  }, [pathname])

  const sidebarWidth = collapsed ? 72 : 240

  return (
    <div className="flex h-full" style={{ background: 'var(--app-bg)' }}>
      {isDesktop && (
        <aside
          className="shrink-0 transition-[width] duration-200"
          style={{
            width: sidebarWidth,
            borderRight: '1px solid var(--app-border)',
            boxShadow: 'var(--app-header-shadow)',
          }}
        >
          <div className="fixed top-0 bottom-0" style={{ width: sidebarWidth }}>
            <Sidebar collapsed={collapsed} />
          </div>
        </aside>
      )}

      <Drawer
        isOpen={!isDesktop && mobileOpen}
        onClose={() => setMobileOpen(false)}
        position="left"
        width={272}
      >
        <div className="h-full">
          <Sidebar onNavigate={() => setMobileOpen(false)} />
        </div>
      </Drawer>

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          onOpenMobileNav={() => setMobileOpen(true)}
          onToggleCollapse={() => setCollapsed((c) => !c)}
        />
        <main ref={mainRef} className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-[1400px] px-4 py-5 sm:px-6">
            <Suspense fallback={<PageSkeleton />}>
              <AnimatePresence mode="wait" initial={false}>
                <PageTransition key={pathname}>
                  <Outlet />
                </PageTransition>
              </AnimatePresence>
            </Suspense>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
