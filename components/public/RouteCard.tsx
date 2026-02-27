// Kaartcomponent: naam, korte beschrijving, afstands-badge, modderindicator, mini-map, CTA
import type { Route } from '@/types/route'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

interface Props { route: Route }

export default function RouteCard({ route }: Props) {
  return (
    <Card>
      <p className="font-mono text-xs text-earth uppercase tracking-widest mb-1">
        {route.distance_km} km
      </p>
      <h2 className="font-body font-medium text-ink text-lg mb-2">{route.name}</h2>
      <p className="font-body font-light text-ink-light text-sm line-clamp-2 mb-4">
        {route.description}
      </p>
      <div className="flex gap-2">
        <Badge variant="distance">{route.distance_km} km</Badge>
        {route.is_muddy && <Badge variant="muddy">Modderig</Badge>}
      </div>
    </Card>
  )
}
