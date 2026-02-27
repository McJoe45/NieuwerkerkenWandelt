// Statische preview-kaart, niet-interactief
'use client'

interface Props { geojson?: object }

export default function MiniMap({ geojson: _ }: Props) {
  return (
    <div className="h-32 w-full rounded-card bg-mist flex items-center justify-center">
      <span className="font-mono text-xs text-earth">Kaartpreview</span>
    </div>
  )
}
