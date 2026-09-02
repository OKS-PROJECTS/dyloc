import { Chart } from 'oks-ui'
import { PageHeader, Surface, CardHeader, ChartCard } from '../../Components/ui/index.js'
import { MONTHS, series } from '../../data/mock.js'

const area = MONTHS.map((m, i) => ({ month: m, a: series(12, 60, 20)[i], b: series(12, 42, 18, 3)[i] }))
const bars = ['Q1', 'Q2', 'Q3', 'Q4'].map((q, i) => ({ q, revenue: series(4, 120, 40)[i], cost: series(4, 80, 30, 1)[i] }))
const pie = [
  { label: 'Organic', value: 42 },
  { label: 'Direct', value: 26 },
  { label: 'Referral', value: 18 },
  { label: 'Social', value: 14 },
]
const HOURS = ['9am', '11am', '1pm', '3pm', '5pm']
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
// series = rows (weekdays), x = columns (hours)
const heat = HOURS.map((h, c) => {
  const row = { hour: h }
  DAYS.forEach((d, r) => {
    row[d] = series(5, 40, 30, r + c)[c]
  })
  return row
})

const META = {
  'line-area': { title: 'Line & Area', trail: 'Line & Area' },
  'bar-column': { title: 'Bar & Column', trail: 'Bar & Column' },
  'pie-donut': { title: 'Pie & Donut', trail: 'Pie & Donut' },
  heatmap: { title: 'Heatmap', trail: 'Heatmap' },
}

export default function ChartsGallery({ kind }) {
  const meta = META[kind]
  return (
    <>
      <PageHeader
        title={meta.title}
        trail={[{ label: 'Charts', to: '/charts/line-area' }, { label: meta.trail }]}
      />

      {kind === 'line-area' && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ChartCard title="Smooth area" type="area" data={area} x="month" series={[{ key: 'a', name: 'Sessions', color: 'var(--oks-color-primary-500)' }]} height={280} />
          <ChartCard title="Multi-series line" type="line" data={area} x="month" series={[{ key: 'a', name: 'A', color: 'var(--oks-color-primary-500)' }, { key: 'b', name: 'B', color: 'var(--oks-color-info-400)' }]} height={280} />
        </div>
      )}

      {kind === 'bar-column' && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ChartCard title="Grouped column" type="column" data={bars} x="q" series={[{ key: 'revenue', name: 'Revenue', color: 'var(--oks-color-primary-500)' }, { key: 'cost', name: 'Cost', color: 'var(--oks-color-warning-400)' }]} column={{ radius: 4 }} height={280} />
          <ChartCard title="Stacked bar" type="bar" data={bars} x="q" series={[{ key: 'revenue', name: 'Revenue', color: 'var(--oks-color-primary-500)' }, { key: 'cost', name: 'Cost', color: 'var(--oks-color-info-400)' }]} bar={{ stacked: true, radius: 4 }} height={280} />
        </div>
      )}

      {kind === 'pie-donut' && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Surface>
            <CardHeader title="Pie" />
            <div className="px-4 pb-4"><Chart unstyled type="pie" height={280} data={pie} x="label" series={[{ key: 'value', name: 'Share' }]} legend /></div>
          </Surface>
          <Surface>
            <CardHeader title="Donut" />
            <div className="donut-no-center px-4 pb-4"><Chart unstyled type="donut" height={280} data={pie} x="label" series={[{ key: 'value', name: 'Share' }]} legend pie={{ center: false }} /></div>
          </Surface>
        </div>
      )}

      {kind === 'heatmap' && (
        <Surface>
          <CardHeader title="Activity heatmap" subtitle="Sessions by weekday and hour" />
          <div className="px-4 pb-4">
            <Chart
              unstyled
              type="heatmap"
              height={300}
              data={heat}
              x="hour"
              series={DAYS.map((d) => ({ key: d, name: d }))}
              heatmap={{ color: 'var(--oks-color-primary-500)', showValues: true }}
            />
          </div>
        </Surface>
      )}
    </>
  )
}
