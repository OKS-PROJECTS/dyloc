import { PageHeader, Surface, CardHeader, MeterList } from '../../Components/ui/index.js'

// A composed "map" — a token-coloured region list, since oks-ui ships no map
// component and the playbook forbids adding a mapping library.
const REGIONS = [
  { label: 'North America', value: '38,204 users', percent: 88 },
  { label: 'Europe', value: '31,660 users', percent: 74 },
  { label: 'Asia Pacific', value: '24,918 users', percent: 58 },
  { label: 'South America', value: '9,412 users', percent: 26, color: 'info' },
  { label: 'Africa', value: '6,105 users', percent: 17, color: 'warning' },
]

export default function MapsPage() {
  return (
    <>
      <PageHeader title="Maps" trail={[{ label: 'General', to: '/maps' }, { label: 'Maps' }]} />
      <Surface>
        <CardHeader
          title="Users by region"
          subtitle="Composed from oks-ui Progress bars — no mapping library"
        />
        <div className="p-5">
          <MeterList items={REGIONS} />
        </div>
      </Surface>
    </>
  )
}
