import { useState } from 'react'
import { TextEditor, Button, blockToHtml, toast } from 'oks-ui'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'

const INITIAL = [
  { type: 'heading', content: [{ text: 'Release notes — v0.2' }], props: { level: 2 } },
  { type: 'paragraph', content: [{ text: 'This build finishes the archetype pages and the component gallery.' }] },
  { type: 'bulletList', content: [{ text: 'Config-driven list, form, settings and detail pages' }] },
  { type: 'bulletList', content: [{ text: 'Every oks-ui primitive shown with copyable source' }] },
]

export default function FormEditor() {
  const [blocks, setBlocks] = useState(INITIAL)
  return (
    <>
      <PageHeader
        title="Form editor"
        trail={[{ label: 'Forms', to: '/forms/elements' }, { label: 'Editor' }]}
        actions={
          <Button
            size="sm"
            color="primary"
            onPress={() => {
              const html = blocks.map((b) => blockToHtml(b)).join('')
              toast.success(`Serialized ${html.length} chars of HTML`)
            }}
          >
            Save
          </Button>
        }
      />
      <Surface className="mx-auto max-w-3xl">
        <CardHeader title="Rich text" subtitle="oks-ui TextEditor — block-based" />
        <div className="p-4">
          <TextEditor value={blocks} onChange={setBlocks} />
        </div>
      </Surface>
    </>
  )
}
