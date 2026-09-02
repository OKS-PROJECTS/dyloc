import { Chart } from 'oks-ui'
import { Surface, CardHeader } from './Surface.jsx'

/** A titled chart in a Surface.
 *  - single-series line/area → smooth line with a soft fill, no gridlines/Y-axis/markers
 *  - multi-series line/area → clean overlaid lines (no muddy stacked fills)
 *  - bar/column → keep the category axis + a light horizontal grid
 */
export function ChartCard({
  title,
  subtitle,
  actions,
  height = 300,
  className,
  type = 'area',
  line: lineOverride,
  children,
  ...chartProps
}) {
  const isBarish = type === 'bar' || type === 'column'
  const isPieish = type === 'pie' || type === 'donut'
  const multiSeries = Array.isArray(chartProps.series) && chartProps.series.length > 1
  const renderType = !isBarish && !isPieish && multiSeries ? 'line' : type

  return (
    <Surface className={className}>
      {title && <CardHeader title={title} subtitle={subtitle} actions={actions} />}
      <div className="px-4 pb-4 pt-1">
        {children ?? (
          <Chart
            unstyled
            type={renderType}
            height={height}
            legend
            grid={isBarish ? { show: true, horizontal: true, vertical: false } : { show: false }}
            axisY={isBarish || isPieish ? undefined : { hide: true }}
            padding={
              isPieish
                ? undefined
                : { top: 8, right: 6, bottom: isBarish ? 4 : 2, left: isBarish ? 8 : 2 }
            }
            line={
              isBarish || isPieish
                ? lineOverride
                : {
                    curve: 'smooth',
                    strokeWidth: 2,
                    markers: { size: 0 },
                    area: { show: !multiSeries, fill: { opacity: 0.12 } },
                    ...lineOverride,
                  }
            }
            {...chartProps}
          />
        )}
      </div>
    </Surface>
  )
}
