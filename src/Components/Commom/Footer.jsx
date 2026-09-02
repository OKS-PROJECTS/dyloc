import { Chip } from 'oks-ui'

export const REPO_URL = 'https://github.com/OKS-PROJECTS/dyloc'

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-between gap-2 px-5 py-4 text-[12px] sm:flex-row"
      style={{ color: 'var(--app-fg-muted)', borderTop: '1px solid var(--app-border)' }}
    >
      <p>
        © {new Date().getFullYear()} dyloc. Built entirely with{' '}
        <a
          href="https://www.oks-ui.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--app-primary)' }}
        >
          oks-ui
        </a>
        .
      </p>
      <div className="flex items-center gap-3">
        <a href={REPO_URL} target="_blank" rel="noreferrer" className="hover:underline">
          Repository
        </a>
        <Chip size="sm" variant="soft" color="primary">
          v0.1.0
        </Chip>
      </div>
    </footer>
  )
}
