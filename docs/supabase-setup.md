# Supabase Setup

1. Create a new Supabase project.
2. Open the SQL Editor in Supabase.
3. Run `docs/supabase-schema.sql` to create the `public.perks` table and read policy.
4. Run `docs/supabase-seed-perks.sql` to upsert the current verified seed offers.
5. Copy your Supabase Project URL and publishable key from the Supabase Connect dialog or API Keys screen.
6. Create a local `.env` file from `.env.example`.
7. Set:
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
8. Start the Expo app with `npm run start`.
9. Confirm the app loads perks successfully and that the data source switches to Supabase in development logs.

## Notes

- The app keeps local fallback data in `data/perks.ts`.
- The Supabase client only uses public Expo env vars.
- The app also accepts the legacy `EXPO_PUBLIC_SUPABASE_ANON_KEY` name as a fallback.
- Do not use a service role key in the mobile app.
