import { Button, Progress, Chip } from 'oks-ui'
import { Folder, FileText, FileImage, FileArchive, MoreVertical, Upload } from 'lucide-react'
import { PageHeader, Surface, CardHeader } from '../../Components/ui/index.js'

const FOLDERS = [
  { name: 'Brand assets', files: 128, size: '2.4 GB' },
  { name: 'Contracts', files: 42, size: '310 MB' },
  { name: 'Product photos', files: 512, size: '8.1 GB' },
  { name: 'Exports', files: 74, size: '1.2 GB' },
]

const ICON = { doc: FileText, img: FileImage, zip: FileArchive }
const FILES = [
  { name: 'Q3-report.pdf', type: 'doc', size: '1.8 MB', when: '2 days ago' },
  { name: 'hero-dark.png', type: 'img', size: '640 KB', when: '3 days ago' },
  { name: 'press-kit.zip', type: 'zip', size: '22 MB', when: '1 week ago' },
  { name: 'pricing-v3.pdf', type: 'doc', size: '412 KB', when: '1 week ago' },
]

export default function FileManager() {
  return (
    <>
      <PageHeader
        title="File manager"
        trail={[{ label: 'Apps', to: '/apps/file-manager' }, { label: 'Files' }]}
        actions={<Button size="sm" color="primary" startContent={<Upload size={14} />}>Upload</Button>}
      />

      <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="mb-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {FOLDERS.map((f) => (
              <Surface key={f.name} className="p-4">
                <Folder size={22} style={{ color: 'var(--app-primary)' }} />
                <p className="mt-2 text-[12.5px] font-medium" style={{ color: 'var(--app-fg-strong)' }}>{f.name}</p>
                <p className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>{f.files} files · {f.size}</p>
              </Surface>
            ))}
          </div>

          <Surface>
            <CardHeader title="Recent files" />
            <ul className="divide-y" style={{ borderColor: 'var(--app-border)' }}>
              {FILES.map((file) => {
                const Icon = ICON[file.type]
                return (
                  <li key={file.name} className="flex items-center gap-3 px-5 py-3">
                    <Icon size={17} style={{ color: 'var(--app-fg-muted)' }} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[12.5px]" style={{ color: 'var(--app-fg-strong)' }}>{file.name}</span>
                      <span className="text-[11px]" style={{ color: 'var(--app-fg-muted)' }}>{file.size} · {file.when}</span>
                    </span>
                    <Button isIconOnly size="sm" variant="ghost" color="default" aria-label="More"><MoreVertical size={14} /></Button>
                  </li>
                )
              })}
            </ul>
          </Surface>
        </div>

        <Surface className="p-5">
          <CardHeader title="Storage" className="px-0 pt-0" />
          <div className="mt-3">
            <Progress value={62} color="primary" label="62 GB of 100 GB" showValueLabel aria-label="Storage used" />
            <ul className="mt-4 space-y-2 text-[12px]">
              <li className="flex justify-between"><span style={{ color: 'var(--app-fg-muted)' }}>Images</span><span style={{ color: 'var(--app-fg)' }}>28 GB</span></li>
              <li className="flex justify-between"><span style={{ color: 'var(--app-fg-muted)' }}>Documents</span><span style={{ color: 'var(--app-fg)' }}>19 GB</span></li>
              <li className="flex justify-between"><span style={{ color: 'var(--app-fg-muted)' }}>Archives</span><span style={{ color: 'var(--app-fg)' }}>15 GB</span></li>
            </ul>
            <Chip size="sm" variant="soft" color="warning" className="mt-4">Upgrade for more</Chip>
          </div>
        </Surface>
      </div>
    </>
  )
}
