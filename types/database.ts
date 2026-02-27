// Gegenereerde Supabase database types — run `npx supabase gen types typescript` om te verversen
export type Database = {
  public: {
    Tables: {
      routes: {
        Row: {
          id: string
          name: string
          slug: string
          description: string
          distance_km: number
          is_muddy: boolean
          published: boolean
          geojson: unknown | null
          gpx_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['routes']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['routes']['Insert']>
      }
    }
  }
}
