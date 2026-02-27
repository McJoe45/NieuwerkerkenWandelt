import { NextRequest, NextResponse } from 'next/server'

type Ctx = { params: { id: string } }

// GET /api/routes/[id]
export async function GET(_req: NextRequest, { params }: Ctx) {
  return NextResponse.json({ id: params.id })
}

// PUT /api/routes/[id] — bijwerken (admin)
export async function PUT(_req: NextRequest, { params }: Ctx) {
  return NextResponse.json({ error: 'Not implemented' }, { status: 501 })
}

// DELETE /api/routes/[id] — verwijderen (admin)
export async function DELETE(_req: NextRequest, { params }: Ctx) {
  return NextResponse.json({ error: 'Not implemented' }, { status: 501 })
}
