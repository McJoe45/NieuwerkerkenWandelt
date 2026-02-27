// Server-side sessiehelpers voor gebruik in middleware en API-routes
import { NextRequest } from 'next/server'

export async function getSession(req: NextRequest) {
  // TODO: implementeer met Supabase Auth session cookie
  void req
  return null
}

export async function requireSession(req: NextRequest) {
  const session = await getSession(req)
  if (!session) throw new Error('Niet ingelogd')
  return session
}
