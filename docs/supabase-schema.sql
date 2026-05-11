create table if not exists public.perks (
  id text primary key,
  company text not null,
  title text not null,
  subtitle text not null,
  category text not null,
  badge_text text,
  badge_tone text,
  expiry_text text,
  savings_value text,
  logo_type text,
  logo_key text,
  description text not null,
  how_to_claim text[] not null default '{}',
  terms text[] not null default '{}',
  external_url text not null,
  source_url text not null,
  verified_at date not null,
  expires_at date,
  is_verified boolean not null default false,
  region text not null,
  student_only boolean not null default false,
  provider text not null,
  is_featured boolean not null default false,
  is_trending boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.perks enable row level security;

create policy "Allow public read access to verified perks"
on public.perks
for select
using (is_verified = true);
