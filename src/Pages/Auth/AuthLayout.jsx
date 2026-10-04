import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../../Components/Commom/Logo.jsx'

export function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2" style={{ background: 'var(--app-bg)' }}>
      {/* brand panel */}
      <aside
        className="relative hidden flex-col justify-between overflow-hidden p-12 lg:flex"
        style={{
          background:
            'linear-gradient(150deg, var(--oks-color-primary-600), var(--oks-color-primary-800))',
        }}
      >
        <Logo onDark markSize={28} />
        <div>
          <h2 className="max-w-sm text-2xl font-semibold text-white">
            An admin template built entirely with oks-ui.
          </h2>
          <p className="mt-3 max-w-sm text-[13px] text-white/70">
            Every table, chart, form and menu on the next screen is an oks-ui
            primitive or composed from one.
          </p>
        </div>
        <p className="text-[12px] text-white/60">© {new Date().getFullYear()} dyloc</p>
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        />
      </aside>

      {/* form panel */}
      <main className="flex items-center justify-center p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-sm"
        >
          <div className="mb-6 lg:hidden">
            <Logo markSize={26} />
          </div>
          <h1 className="text-[20px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
              {subtitle}
            </p>
          )}
          <div className="mt-6">{children}</div>
          {footer && (
            <p className="mt-6 text-center text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>
              {footer}
            </p>
          )}
          <p className="mt-8 text-center text-[11px]" style={{ color: 'var(--app-fg-subtle)' }}>
            <Link to="/dashboards/default" className="hover:underline">
              Skip to the demo
            </Link>
          </p>
        </motion.div>
      </main>
    </div>
  )
}
