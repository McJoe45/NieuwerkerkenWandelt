import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

// Publieke client — veilig in browser, enkel lezen via RLS
export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

// Server-only admin client — NOOIT exporteren naar 'use client' modules
export function createAdminClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  )
}
