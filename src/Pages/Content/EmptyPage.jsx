import { Link } from 'react-router-dom'
import { Button, EmptyState } from 'oks-ui'
import { LayoutTemplate } from 'lucide-react'
import { PageHeader, Surface } from '../../Components/ui/index.js'

export default function EmptyPage() {
  return (
    <>
      <PageHeader title="Empty page" trail={[{ label: 'Pages', to: '/pages/empty' }, { label: 'Empty' }]} />
      <Surface className="flex min-h-[50vh] items-center justify-center p-8">
        <EmptyState
          icon={<LayoutTemplate size={26} />}
          title="A blank canvas"
          description="This is the starting point for a new screen — the shell, page header and a Surface, ready for your content."
          actions={
            <Button as={Link} to="/components" color="primary" variant="soft">
              Browse components
            </Button>
          }
        />
      </Surface>
    </>
  )
}
