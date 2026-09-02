import { Chart } from 'oks-ui'
import { Surface, CardHeader } from './Surface.jsx'

/** A titled chart in a Surface. Line/area render clean (no gridlines, no Y axis,
 *  no markers); bar/column keep the category axis. */
export function ChartCard({ title, subtitle, actions, height = 300, children, ...chartProps }) {
  const isBarish = chartProps.type === 'bar' || chartProps.type === 'column'
  return (
    <Surface>
      {title && <CardHeader title={title} subtitle={subtitle} actions={actions} />}
      <div className="px-4 pb-4 pt-1">
        {children ?? (
          <Chart
            unstyled
            height={height}
            legend
            grid={isBarish ? { horizontal: true } : false}
            axisY={isBarish ? undefined : { hide: true }}
            line={
              isBarish
                ? undefined
                : { curve: 'smooth', point: { show: false }, area: { fill: { opacity: 0.14 } } }
            }
            {...chartProps}
          />
        )}
      </div>
    </Surface>
  )
}
