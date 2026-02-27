import { NextRequest, NextResponse } from 'next/server'

// GET /api/gpx/[id] — GPX-bestand downloaden
export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: fetch GeoJSON from Supabase, convert to GPX, stream as attachment
  return NextResponse.json({ error: `GPX voor route ${params.id} — nog niet geïmplementeerd` })
}
