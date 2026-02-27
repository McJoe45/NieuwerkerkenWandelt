// Responsive grid van RouteCards met empty state
import type { Route } from '@/types/route'
import RouteCard from './RouteCard'

interface Props { routes: Route[] }

export default function RouteList({ routes }: Props) {
  if (routes.length === 0) {
    return (
      <div className="text-center py-20 text-ink-light font-body font-light">
        Geen routes gevonden.
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {routes.map((r) => <RouteCard key={r.id} route={r} />)}
    </div>
  )
}
