// Sorteerbare tabel van routes met publiceer-toggle en actieknoppen
'use client'
import type { Route } from '@/types/route'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

interface Props { routes: Route[] }

export default function RouteTable({ routes }: Props) {
  return (
    <div className="overflow-x-auto rounded-card border border-sage">
      <table className="w-full font-body font-light text-sm">
        <thead className="bg-cream-dark">
          <tr>
            {['Naam', 'Afstand', 'Modderig', 'Gepubliceerd', 'Acties'].map((h) => (
              <th key={h} className="text-left px-4 py-3 font-mono text-xs text-earth uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {routes.map((r) => (
            <tr key={r.id} className="border-t border-sage hover:bg-mist transition-colors">
              <td className="px-4 py-3 text-ink">{r.name}</td>
              <td className="px-4 py-3"><Badge variant="distance">{r.distance_km} km</Badge></td>
              <td className="px-4 py-3">{r.is_muddy ? '✓' : '—'}</td>
              <td className="px-4 py-3">{r.published ? '✓' : '—'}</td>
              <td className="px-4 py-3 flex gap-2">
                <Button variant="ghost" size="sm">Bewerk</Button>
                <Button variant="danger" size="sm">Verwijder</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
