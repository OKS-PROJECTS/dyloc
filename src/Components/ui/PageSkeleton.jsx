import { Skeleton } from 'oks-ui'
import { Surface } from './Surface.jsx'

/** Suspense fallback for lazy route bundles — mirrors the common page shape. */
export function PageSkeleton() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <Skeleton variant="rect" width={180} height={22} radius={6} />
        <Skeleton variant="rect" width={140} height={16} radius={6} />
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Surface key={i} className="p-5">
            <Skeleton variant="text" lines={2} />
            <Skeleton variant="rect" height={28} radius={6} className="mt-3" />
          </Surface>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <Surface className="p-5 xl:col-span-2">
          <Skeleton variant="rect" height={260} radius={8} />
        </Surface>
        <Surface className="p-5">
          <Skeleton variant="text" lines={6} />
        </Surface>
      </div>
    </div>
  )
}
