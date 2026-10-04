import { Link } from 'react-router-dom'
import { Button } from 'oks-ui'
import { motion } from 'framer-motion'
import Logo from '../../Components/Commom/Logo.jsx'

function Shell({ code, title, description, action }) {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ background: 'var(--app-bg)' }}
    >
      <Logo markSize={28} className="mb-10" />
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="text-[88px] font-bold leading-none"
        style={{ color: 'var(--app-primary)' }}
      >
        {code}
      </motion.p>
      <h1 className="mt-4 text-[22px] font-semibold" style={{ color: 'var(--app-fg-strong)' }}>
        {title}
      </h1>
      <p className="mt-2 max-w-md text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
        {description}
      </p>
      <div className="mt-6">{action}</div>
    </main>
  )
}

export function NotFound() {
  return (
    <Shell
      code="404"
      title="Page not found"
      description="The page you're looking for was moved, renamed, or never existed."
      action={
        <Button as={Link} to="/dashboards/default" color="primary">
          Back to dashboard
        </Button>
      }
    />
  )
}

export function ServerError() {
  return (
    <Shell
      code="500"
      title="Something went wrong"
      description="An unexpected error occurred on our side. Try again in a few minutes."
      action={
        <Button as={Link} to="/dashboards/default" color="primary">
          Return home
        </Button>
      }
    />
  )
}

export function Maintenance() {
  return (
    <Shell
      code="503"
      title="Down for maintenance"
      description="We're performing scheduled upgrades and will be back shortly."
      action={
        <Button as={Link} to="/dashboards/default" variant="soft" color="primary">
          Check status
        </Button>
      }
    />
  )
}
