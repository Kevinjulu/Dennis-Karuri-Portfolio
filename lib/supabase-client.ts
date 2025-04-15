'use client'

import { createBrowserClient } from '@supabase/ssr'

export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-supabase-url.supabase.co"
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key"
  
  return createBrowserClient(
    supabaseUrl,
    supabaseKey
  )
}
