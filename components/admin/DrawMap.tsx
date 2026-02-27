// Leaflet.Draw-editor voor het intekenen van routes — vult GeoJSON-veld
'use client'

interface Props { onChange: (geojson: object) => void }

export default function DrawMap({ onChange: _ }: Props) {
  return (
    <div className="h-96 rounded-card bg-mist flex items-center justify-center">
      <span className="font-mono text-xs text-earth">Teken kaarteditor</span>
    </div>
  )
}
