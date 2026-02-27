// Afstandsslider, modder-toggle, sorteerselectie
'use client'
import { useState } from 'react'
import Slider from '@/components/ui/Slider'

export default function RouteFilters() {
  const [maxDistance, setMaxDistance] = useState(20)
  const [onlyMuddy, setOnlyMuddy]     = useState(false)

  return (
    <div className="flex flex-wrap gap-6 items-end mb-8">
      <div>
        <label className="font-mono text-xs text-earth uppercase tracking-wider block mb-2">
          Max. afstand: {maxDistance} km
        </label>
        <Slider min={1} max={30} value={maxDistance} onChange={setMaxDistance} />
      </div>
      <label className="flex items-center gap-2 cursor-pointer font-body font-light text-sm text-ink-light">
        <input type="checkbox" checked={onlyMuddy} onChange={(e) => setOnlyMuddy(e.target.checked)} />
        Toon enkel modderige routes
      </label>
    </div>
  )
}
