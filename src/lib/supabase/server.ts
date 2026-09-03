import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client for the contact form's Server Action.
 * Uses the public anon key — the `leads` table's RLS policy must allow
 * inserts from the anon role (see /docs or Supabase dashboard setup).
 */
export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured — set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  return createClient(url, anonKey);
}
