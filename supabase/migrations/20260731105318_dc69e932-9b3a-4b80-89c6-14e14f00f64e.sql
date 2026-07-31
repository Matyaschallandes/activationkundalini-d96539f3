CREATE TABLE public.carnet_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  prenom text not null,
  nom text not null,
  email text not null,
  telephone text,
  date_naissance text,
  answers jsonb not null default '{}'::jsonb,
  analysis jsonb not null default '{}'::jsonb,
  intensity int
);
GRANT ALL ON public.carnet_submissions TO service_role;
ALTER TABLE public.carnet_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "no public access to carnet submissions"
ON public.carnet_submissions FOR SELECT TO authenticated USING (false);