import { Accordion, AccordionItem } from 'oks-ui'
import { PageHeader, Surface } from '../../Components/ui/index.js'

const FAQS = [
  ['Is dyloc really built entirely with oks-ui?', 'Yes. Every button, input, chart, menu and table cell is an oks-ui primitive or composed from oks-ui primitives. There is no second UI library and no separate charting library.'],
  ['Which framework does it use?', 'Vite + React 19 with react-router-dom v7. Styling is Tailwind utilities for layout only; every colour, radius and shadow comes from a CSS variable.'],
  ['Can I change the brand colour?', 'Repoint the --oks-color-primary-* ramp in src/styles/theme.css. Light, dark and every component follow.'],
  ['Does it have a dark mode?', 'Yes — a designed one, toggled from the header and persisted. Try the moon icon.'],
  ['Where does the data come from?', 'All data is deterministic mock data in src/data/. There is no backend.'],
  ['How are the charts drawn?', "With oks-ui's <Chart> component only — line, area, bar, column, pie, donut and heatmap."],
]

export default function Faq() {
  return (
    <>
      <PageHeader title="FAQ" trail={[{ label: 'Pages', to: '/pages/faq' }, { label: 'FAQ' }]} />
      <Surface className="mx-auto max-w-2xl p-2 sm:p-4">
        <Accordion selectionMode="single" variant="splitted" defaultExpandedKeys={['q0']}>
          {FAQS.map(([q, a], i) => (
            <AccordionItem key={`q${i}`} itemKey={`q${i}`} title={q}>
              <p className="text-[12.5px]" style={{ color: 'var(--app-fg-muted)' }}>{a}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </Surface>
    </>
  )
}
