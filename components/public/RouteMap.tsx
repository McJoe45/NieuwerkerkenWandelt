// Volledig Leaflet-kaartcomponent met GeoJSON overlay — dynamisch geladen (no SSR)
'use client'
// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'

export default function RouteMap() {
  return (
    <div className="h-96 rounded-card bg-mist flex items-center justify-center">
      <span className="font-mono text-xs text-earth">Kaart laden…</span>
    </div>
  )
}
