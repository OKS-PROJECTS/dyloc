import { Link, useLocation } from 'react-router-dom'
import { Button, EmptyState } from 'oks-ui'
import { Hammer } from 'lucide-react'

export default function ComingSoon() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <EmptyState
        icon={<Hammer size={26} />}
        title="Page in progress"
        description={`${pathname} is scaffolded in the nav but not built yet.`}
        actions={
          <Button as={Link} to="/dashboards/default" color="primary" variant="soft">
            Back to dashboard
          </Button>
        }
      />
    </div>
  )
}
