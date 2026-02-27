export interface Route {
  id: string
  name: string
  slug: string
  description: string
  distance_km: number
  is_muddy: boolean
  published: boolean
  geojson: GeoJSON.FeatureCollection | null
  gpx_url: string | null
  created_at: string
  updated_at: string
}

export type RouteInsert = Omit<Route, 'id' | 'created_at' | 'updated_at'>
export type RouteUpdate = Partial<RouteInsert>
