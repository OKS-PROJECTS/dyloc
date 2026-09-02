import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from 'oks-ui'
import { Check, Copy } from 'lucide-react'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'
import { GALLERY } from '../../data/gallery.jsx'

export default function GalleryEntry() {
  const { slug } = useParams()
  const entry = GALLERY[slug]
  const [copied, setCopied] = useState(false)

  if (!entry) {
    return (
      <>
        <PageHeader title="Component" trail={[{ label: 'Components', to: '/components' }, { label: slug }]} />
        <Surface className="p-8 text-center">
          <p className="text-[13px]" style={{ color: 'var(--app-fg-muted)' }}>
            No gallery entry for <code>{slug}</code>.{' '}
            <Link to="/components" style={{ color: 'var(--app-primary)' }}>Back to all components</Link>
          </p>
        </Surface>
      </>
    )
  }

  const copy = () => {
    navigator.clipboard?.writeText(entry.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <>
      <PageHeader
        title={entry.title}
        trail={[{ label: 'Components', to: '/components' }, { label: entry.title }]}
      />
      <Surface className="mb-5">
        <CardHeader title="Preview" subtitle={entry.blurb} />
        <div className="px-5 pb-6 pt-2">{entry.render()}</div>
      </Surface>
      <Surface>
        <CardHeader
          title="Source"
          actions={
            <Button size="sm" variant="ghost" color="default" onPress={copy} startContent={copied ? <Check size={13} /> : <Copy size={13} />}>
              {copied ? 'Copied' : 'Copy'}
            </Button>
          }
        />
        <pre
          className="dyloc-scroll-x m-4 rounded-md p-4 text-[12px] leading-relaxed"
          style={{ background: 'var(--app-surface-2)', color: 'var(--app-fg)' }}
        >
          <code>{entry.code}</code>
        </pre>
      </Surface>
    </>
  )
}
