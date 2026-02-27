import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

// Loopt op elke /beheer/* request vóór rendering (edge runtime)
export async function middleware(req: NextRequest) {
  const session = await getSession(req)
  if (!session && req.nextUrl.pathname.startsWith('/beheer')) {
    return NextResponse.redirect(new URL('/beheer/login', req.url))
  }
}

export const config = { matcher: ['/beheer/:path*'] }
