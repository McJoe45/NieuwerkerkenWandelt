import { NextRequest, NextResponse } from 'next/server'

// GET /api/routes — gepubliceerde routes ophalen (publiek)
export async function GET(_req: NextRequest) {
  // TODO: supabase.from('routes').select().eq('published', true)
  return NextResponse.json({ routes: [] })
}

// POST /api/routes — nieuwe route aanmaken (admin)
export async function POST(_req: NextRequest) {
  // TODO: auth check + supabase insert
  return NextResponse.json({ error: 'Not implemented' }, { status: 501 })
}
